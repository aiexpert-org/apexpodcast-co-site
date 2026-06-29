/**
 * Host press-kit pages (guest-acquisition surface), distinct from the /work/
 * case studies (client-proof surface).
 *
 * SCAFFOLD: the dossier-dependent prose (bio, show premise, and Randy's guest
 * list) is an explicit pending marker, not invented copy. Real content fills in
 * from `02-Network/<Person>/PUBLIC-DOSSIER-2026-05-30.md` once those land. Hard
 * facts already confirmed (role, cadence, named guests) are real. Taglines are
 * short true descriptors derived from confirmed facts, not fabricated positioning.
 */

export const PENDING = '[Pulled from dossier — pending]'

export type Host = {
  slug: string
  name: string
  /** Matching /work/<slug>/ case study. */
  caseStudySlug: string
  /** Show name, when confirmed. */
  show?: string
  tagline: string
  bio: string
  showPremise: string
  cadence?: string
  audience?: string
  notableGuests: string[]
  dossier: string
}

/** Same network benefits for every host page (not dossier-dependent). */
export const whyGuest: { title: string; body: string }[] = [
  {
    title: 'A producer in the room.',
    body: 'A producer is on the session, dropping markers and steering the conversation. You show up and talk. We handle the rest.',
  },
  {
    title: 'The network carries it.',
    body: 'Your episode publishes into the Apex catalog feed, gets collab-tagged across the cohort, and is a candidate for The Debrief newsletter.',
  },
  {
    title: 'You leave with assets.',
    body: 'A produced episode, social clips anchored to a producer-noted quote, and a clean recording you own. The appearance keeps working after the session.',
  },
]

/** Platforms shown in the subscribe row. URLs are placeholders (see PHASE3-PLACEHOLDERS.md). */
export const subscribePlatforms = ['Apple Podcasts', 'Spotify', 'Overcast', 'RSS'] as const

export const hosts: Host[] = [
  {
    slug: 'russ-laggan',
    name: 'Russ Laggan',
    caseStudySlug: 'russ-laggan',
    tagline: 'Real estate leadership, recorded weekly.',
    bio: PENDING,
    showPremise: PENDING,
    cadence: 'Weekly, recorded on Riverside with a producer in the room.',
    audience: 'Real estate professionals and eXp Realty leaders.',
    notableGuests: [],
    dossier: '02-Network/Russ Laggan/PUBLIC-DOSSIER-2026-05-30.md',
  },
  {
    slug: 'austin-cheviron',
    name: 'Austin Cheviron',
    caseStudySlug: 'austin-cheviron',
    tagline: 'Money and finance, made usable.',
    bio: PENDING,
    showPremise: PENDING,
    audience: 'People who want to make better decisions with what they earn.',
    notableGuests: ['Jairek Robbins'],
    dossier: '02-Network/Austin Cheviron/PUBLIC-DOSSIER-2026-05-30.md',
  },
]

export function getHost(slug: string): Host | undefined {
  return hosts.find((h) => h.slug === slug)
}
