import { NextResponse } from 'next/server'

/**
 * Waitlist webhook intake.
 *
 * Browser POSTs from the JoinWaitlistModal land here. This route forwards the
 * payload to a Google Sheets Apps Script Web App URL that Brett provisions
 * separately, and optionally to GHL when the credentials are present.
 *
 * Brett swaps WAITLIST_SHEET_WEBHOOK_URL in Vercel env (or .env.local during
 * dev) to a real Apps Script Web App `/exec` URL when the sheet is ready.
 * Until then the route succeeds silently so submissions still close the
 * modal cleanly and bots cannot tell from the response whether anything
 * downstream is wired.
 *
 * The route also writes a best-effort GHL contact in the master sub-account
 * (QRzW1cp8gNa31VJDILvJ) when GHL_API_KEY + GHL_LOCATION_ID are set.
 *
 * Security:
 *  - Honeypot field `company` drops bot submissions silently.
 *  - 200-char limit per field, basic email regex.
 *  - No PII logged.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Payload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  affiliateCode?: string
  sourceCtaId?: string
  pageUrl?: string
  company?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }

  // Honeypot drop. Bots that fill `company` see a 200 and move on.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const firstName = clean(body.firstName, 80)
  const lastName = clean(body.lastName, 80)
  const email = clean(body.email, 200)
  const phone = clean(body.phone, 40)
  const affiliateCode = clean(body.affiliateCode, 80)
  const sourceCtaId = clean(body.sourceCtaId, 120) || 'unknown'
  const pageUrl = clean(body.pageUrl, 400)
  const timestamp = new Date().toISOString()

  if (!firstName || !lastName) {
    return NextResponse.json(
      { ok: false, error: 'name_required' },
      { status: 422 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 })
  }
  if (!phone || phone.replace(/\D/g, '').length < 7) {
    return NextResponse.json(
      { ok: false, error: 'invalid_phone' },
      { status: 422 },
    )
  }

  const record: SheetRecord = {
    type: 'waitlist',
    firstName,
    lastName,
    email,
    phone,
    affiliateCode,
    sourceCtaId,
    pageUrl,
    timestamp,
  }

  await Promise.allSettled([
    forwardToSheet(record),
    forwardToGhl({ ...record, name: `${firstName} ${lastName}`.trim() }),
  ])

  return NextResponse.json({ ok: true })
}

type SheetRecord = {
  type: 'waitlist'
  firstName: string
  lastName: string
  email: string
  phone: string
  affiliateCode: string
  sourceCtaId: string
  pageUrl: string
  timestamp: string
}

async function forwardToSheet(record: SheetRecord): Promise<void> {
  const url = process.env.WAITLIST_SHEET_WEBHOOK_URL
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

async function forwardToGhl(record: SheetRecord & { name: string }): Promise<void> {
  const apiKey = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID
  if (!apiKey || !locationId) return
  const tags = [
    'apex-waitlist-2026',
    `source:${record.sourceCtaId}`,
    ...(record.affiliateCode ? [`affiliate:${record.affiliateCode}`] : []),
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
        lastName: record.lastName,
        email: record.email,
        phone: record.phone,
        source: `Website waitlist (${record.sourceCtaId})`,
        tags,
      }),
    })
  } catch {
    /* best-effort */
  }
}
