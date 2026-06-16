/**
 * The Apex catalog. Powers the Portfolio grid (24 shows) and the Show Wall
 * mosaic. Cover art is the background-tile content (the CCM design move, recast
 * for podcasts).
 *
 * FOUR are real, human-hosted shows already in Apex's Transistor stable. TWENTY
 * are AI-voiced shows in production for the Apex Podcast Network — branded as
 * network productions with NO fabricated host names per Brett's direction.
 *
 * PLACEHOLDER NOTE: the 20 network shows below are honest catalog placeholders
 * (APX-005..024, "In Production"). When `strategy/20-podcast-stable-2026-06-16.md`
 * and its COVER-ART-BRIEF land, replace the title + cover for each, keep host
 * null + network true. Real cover art for the 4 human shows is pending a
 * Transistor API key (see LIVING-NOTES) — branded typographic covers stand in.
 */

export type Show = {
  slug: string
  title: string
  /** Human host name, or null for Apex Network (AI-voiced) productions. */
  host: string | null
  coHost?: string
  /** Apex Podcast Network production (AI-voiced) vs human-hosted. */
  network: boolean
  catalog: string
  cover: string
  status: 'live' | 'production'
  excerpt: string
  /** Set when the show has a full case study page. */
  caseStudy?: boolean
  /** Flagship parent show, pinned first. */
  flagship?: boolean
}

export const REAL_SHOWS: Show[] = [
  {
    slug: 'the-apex-podcast',
    title: 'The Apex Podcast',
    host: 'Brett Moore',
    coHost: 'Randy Highsmith',
    network: false,
    catalog: 'APX-001',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    excerpt:
      'The network’s parent show. Brett Moore and Randy Highsmith sit down with owners, operators, and leaders and find the show inside what they have already built.',
  },
  {
    slug: 'sweeter-after-difficulty',
    title: 'Sweeter After Difficulty',
    host: 'Randy Highsmith',
    network: false,
    catalog: 'APX-002',
    cover: '/covers/show-sweeter-after-difficulty.webp',
    status: 'live',
    caseStudy: true,
    excerpt:
      'Randy Highsmith on the hard seasons that make the good ones land. A producer in the room for every conversation.',
  },
  {
    slug: 'the-russ-laggan-podcast',
    title: 'The Russ Laggan Podcast',
    host: 'Russ Laggan',
    network: false,
    catalog: 'APX-003',
    cover: '/covers/show-the-russ-laggan-podcast.webp',
    status: 'live',
    caseStudy: true,
    excerpt:
      'Russ Laggan on training, leadership, and the long game, recorded weekly with the Apex production standard.',
  },
  {
    slug: 'winning-twice',
    title: 'Winning Twice',
    host: 'Austin Cheviron',
    network: false,
    catalog: 'APX-004',
    cover: '/covers/show-winning-twice.webp',
    status: 'live',
    caseStudy: true,
    excerpt:
      'Austin Cheviron on building, selling, and doing it again. The show inside the operator’s second act.',
  },
]

// 20 AI-voiced Apex Podcast Network shows. Honest placeholders until the
// 20-podcast-stable strategy file lands. Host is intentionally null.
export const NETWORK_SHOWS: Show[] = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 5).padStart(3, '0')
  return {
    slug: `apx-${n}`,
    title: 'In Production',
    host: null,
    network: true,
    catalog: `APX-${n}`,
    cover: `/covers/show-apx-${n}.webp`,
    status: 'production' as const,
    excerpt: 'From the Apex Podcast Network. A new AI-voiced show in production.',
  }
})

export const SHOWS: Show[] = [...REAL_SHOWS, ...NETWORK_SHOWS]

/** Cover paths for the Show Wall mosaic (real shows first for the visible grid). */
export const SHOW_COVERS: string[] = SHOWS.map((s) => s.cover)

export function getShow(slug: string): Show | undefined {
  return SHOWS.find((s) => s.slug === slug)
}

/** Shows with full case study pages, in catalog order. */
export const CASE_STUDY_SHOWS: Show[] = REAL_SHOWS.filter((s) => s.caseStudy)

export function hostLine(show: Show): string {
  if (show.network) return 'From the Apex Podcast Network'
  if (show.coHost) return `${show.host} & ${show.coHost}`
  return show.host ?? 'From the Apex Podcast Network'
}
