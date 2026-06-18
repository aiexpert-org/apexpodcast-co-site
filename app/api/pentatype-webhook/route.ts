import { NextResponse } from 'next/server'
import { CORE_LABEL, type Core } from '@/lib/pentatype'

/**
 * Pentatype assessment webhook intake.
 *
 * Browser POSTs the completed assessment result + email here. The route
 * forwards to PENTATYPE_SHEET_WEBHOOK_URL (an Apps Script Web App that
 * appends to a Sheet on brett@apexpodcast.co), and optionally writes a GHL
 * contact tagged with the user's primary Core.
 *
 * The assessment is licensed from Pentatype the company (Brett + Russ 50/50)
 * to Apex. The pentatype.com Find Your Full Profile product is the upsell
 * path; this route does not handle payment.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const VALID_CORES: ReadonlySet<Core> = new Set<Core>([
  'connection',
  'structure',
  'conviction',
  'discovery',
  'meaning',
])

type ScoresPayload = Partial<Record<Core, number>>

type Payload = {
  firstName?: string
  email?: string
  primary?: string
  scores?: ScoresPayload
  stressScores?: ScoresPayload
  pageUrl?: string
  company?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function cleanScores(s: ScoresPayload | undefined): Record<Core, number> {
  const out: Record<Core, number> = {
    connection: 0,
    structure: 0,
    conviction: 0,
    discovery: 0,
    meaning: 0,
  }
  if (!s) return out
  for (const c of Object.keys(out) as Core[]) {
    const v = s[c]
    if (typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 100) {
      out[c] = v
    }
  }
  return out
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const firstName = clean(body.firstName, 80)
  const email = clean(body.email, 200)
  const primaryRaw = clean(body.primary, 40).toLowerCase()
  const primary = VALID_CORES.has(primaryRaw as Core)
    ? (primaryRaw as Core)
    : null
  const pageUrl = clean(body.pageUrl, 400)
  const timestamp = new Date().toISOString()

  if (!firstName) {
    return NextResponse.json(
      { ok: false, error: 'name_required' },
      { status: 422 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 })
  }
  if (!primary) {
    return NextResponse.json(
      { ok: false, error: 'missing_result' },
      { status: 422 },
    )
  }

  const scores = cleanScores(body.scores)
  const stressScores = cleanScores(body.stressScores)

  const record: AssessmentRecord = {
    type: 'pentatype-assessment',
    firstName,
    email,
    primary,
    primaryLabel: CORE_LABEL[primary],
    scores,
    stressScores,
    pageUrl,
    timestamp,
  }

  await Promise.allSettled([
    forwardToSheet(record),
    forwardToGhl({ ...record, primary }),
  ])

  return NextResponse.json({ ok: true })
}

type AssessmentRecord = {
  type: 'pentatype-assessment'
  firstName: string
  email: string
  primary: Core
  primaryLabel: string
  scores: Record<Core, number>
  stressScores: Record<Core, number>
  pageUrl: string
  timestamp: string
}

async function forwardToSheet(record: AssessmentRecord): Promise<void> {
  const url = process.env.PENTATYPE_SHEET_WEBHOOK_URL
  if (!url) return
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
  } catch {
    /* best-effort */
  }
}

async function forwardToGhl(record: AssessmentRecord): Promise<void> {
  const apiKey = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID
  if (!apiKey || !locationId) return
  const tags = [
    'apex-pentatype-2026',
    `pentatype-core:${record.primary}`,
  ]
  try {
    await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationId,
        firstName: record.firstName,
        email: record.email,
        source: 'Pentatype assessment',
        tags,
      }),
    })
  } catch {
    /* best-effort */
  }
}
