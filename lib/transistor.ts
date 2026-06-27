/**
 * Transistor API client. Pulls live show data for the Network catalog page.
 *
 * API docs: https://developers.transistor.fm/
 * API key lives at `01-Businesses/Apex Podcast Co/.credentials/transistor-api-key`
 * on Brett's machine, and is mirrored into Vercel env as TRANSISTOR_API_KEY.
 *
 * Endpoint: GET https://api.transistor.fm/v1/shows
 * Auth:     x-api-key header.
 *
 * The Network page calls fetchTransistorShows() with `revalidate: 3600` so
 * the catalog is fresh hourly without hammering the API on every visit.
 * If the API key is missing or the request fails, the function returns null
 * and the page falls back to the static catalog. Live + Coming Soon entries
 * still render either way.
 */

export type TransistorShow = {
  id: string
  title: string
  description: string
  imageUrl: string | null
  websiteUrl: string | null
  appleUrl: string | null
  spotifyUrl: string | null
  slug: string | null
}

type ApiShow = {
  id: string
  type: 'show'
  attributes: {
    title?: string
    description?: string
    summary?: string
    image_url?: string
    website?: string
    apple_podcasts?: string
    spotify?: string
    slug?: string
  }
}

type ApiEnvelope = {
  data?: ApiShow[]
}

const BASE = 'https://api.transistor.fm/v1'

export async function fetchTransistorShows(): Promise<TransistorShow[] | null> {
  const apiKey = process.env.TRANSISTOR_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch(`${BASE}/shows`, {
      headers: { 'x-api-key': apiKey, Accept: 'application/json' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const json = (await res.json()) as ApiEnvelope
    const shows = json.data ?? []
    return shows.map((s) => {
      const a = s.attributes
      return {
        id: s.id,
        title: a.title ?? 'Untitled show',
        description: a.description ?? a.summary ?? '',
        imageUrl: a.image_url ?? null,
        websiteUrl: a.website ?? null,
        appleUrl: a.apple_podcasts ?? null,
        spotifyUrl: a.spotify ?? null,
        slug: a.slug ?? null,
      }
    })
  } catch {
    return null
  }
}

/** Best-effort match a Transistor show to our local Show catalog. */
export function matchTransistorShow(
  apexSlug: string,
  apexTitle: string,
  transistor: TransistorShow[] | null,
): TransistorShow | null {
  if (!transistor) return null
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const a = norm(apexSlug)
  const aTitle = norm(apexTitle)
  return (
    transistor.find((t) => norm(t.slug ?? '') === a) ??
    transistor.find((t) => norm(t.title) === aTitle) ??
    null
  )
}
