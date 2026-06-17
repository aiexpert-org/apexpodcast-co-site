/**
 * The Apex catalog. Powers the Portfolio grid and the Show Wall mosaic. Cover
 * art is the background-tile content (the CCM design move, recast for podcasts).
 *
 * FOUR are real, human-hosted anchor shows already in Apex's Transistor stable.
 * TWENTY are AI-narrated brand productions for the Apex Podcast Network, mapped
 * to Brett's six categories (Sports, Music, Business, Communication, Biohacking,
 * Relationships) with a hit-comparable lane each. No fabricated host names: every
 * network show is narrated by the Apex brand voice and discloses it.
 *
 * Canonical sources: strategy/apex-stable-v3-inspired-by-2026-06-17.md (titles +
 * hit-comparables + premises), strategy/20-podcast-stable-2026-06-16-v2-categories.md
 * (categories), brand/2026-06-16-20-show-stable/COVER-ART-BRIEF-v2-categories.md
 * (cover art). Real cover art for the 4 human shows is pending a Transistor API
 * key; branded covers stand in. Live Transistor metadata flows in when the key
 * lands (see LIVING-NOTES).
 */

export type Category =
  | 'Sports'
  | 'Music'
  | 'Business'
  | 'Communication'
  | 'Biohacking'
  | 'Relationships'

export type Show = {
  slug: string
  title: string
  /** Human host name, or null for Apex Network (AI-narrated) productions. */
  host: string | null
  coHost?: string
  /** Apex Podcast Network production (AI-narrated) vs human-hosted. */
  network: boolean
  catalog: string
  cover: string
  status: 'live' | 'production'
  excerpt: string
  /** Network shows: the six-category bucket. */
  category?: Category
  /** Network shows: the hit-podcast lane, e.g. "In the lane of Song Exploder". */
  hitComparable?: string
  /** Set when the show has a full case study page. */
  caseStudy?: boolean
  /** Flagship anchor show, pinned first. */
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
      'The network’s anchor show. Brett Moore and Randy Highsmith sit down with owners, operators, and leaders and find the show inside what they have already built.',
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
      'Russ Laggan on training, leadership, and the long game, recorded weekly to the Apex production standard.',
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

type NetSeed = {
  slug: string
  title: string
  category: Category
  hitComparable: string
  excerpt: string
}

// The 20 Apex Podcast Network shows (canonical v3 + v2). Narrated with AI voice
// production. No host names, by design.
const NETWORK_SEED: NetSeed[] = [
  { slug: 'tracklist', title: 'Tracklist', category: 'Music', hitComparable: 'In the lane of Song Exploder', excerpt: 'The production story behind one iconic song, from first demo to final master, told as if you were in the studio the night it got made.' },
  { slug: 'b-sides', title: 'B-Sides', category: 'Music', hitComparable: 'In the lane of Cocaine & Rhinestones', excerpt: 'The song on the back of the single, era by era. The forgotten tracks and the ones that flipped to become the hit.' },
  { slug: 'album-one', title: 'Album One', category: 'Music', hitComparable: 'In the lane of Acquired', excerpt: 'The first album by a now-legendary artist, told the way Acquired tells a company’s first decade. The recording, the politics, the breakthrough.' },
  { slug: 'producers-chair', title: 'Producer’s Chair', category: 'Music', hitComparable: 'In the lane of Tetragrammaton', excerpt: 'One record producer per episode, walked through their body of work and the three sonic moves that define them.' },
  { slug: 'five-fingers', title: 'Five Fingers', category: 'Communication', hitComparable: 'In the lane of Hidden Brain', excerpt: 'How people actually communicate, profiled across the five Pentatype types, from politicians to founders to novelists.' },
  { slug: 'word-for-word', title: 'Word for Word', category: 'Communication', hitComparable: 'In the lane of The Daily Stoic', excerpt: 'One word a day in five to seven minutes. Its etymology, its uses across history, and one phrasing you can use in your writing this week.' },
  { slug: 'the-listener', title: 'The Listener', category: 'Communication', hitComparable: 'In the lane of On Being', excerpt: 'Listening as a discipline, one professional listener at a time, from hostage negotiators to jazz drummers, closing with one move to use this week.' },
  { slug: 'one-note', title: 'One Note', category: 'Communication', hitComparable: 'In the lane of The Memory Palace', excerpt: 'One line per episode, read first and then explained. Speeches, ads, taglines, opening sentences, and why each one landed.' },
  { slug: 'tool-talk', title: 'Tool Talk', category: 'Business', hitComparable: 'In the lane of 99% Invisible', excerpt: 'One tool per episode, told the way 99% Invisible tells a building. This week’s release, one listener question, and the object-history deep dive.' },
  { slug: 'second-acts', title: 'Second Acts', category: 'Business', hitComparable: 'In the lane of How I Built This', excerpt: 'Career pivots that worked, from lawyer to baker to executive to farmer, closing with one question. Was it courage or was it luck?' },
  { slug: 'the-anti-label', title: 'The Anti-Label', category: 'Business', hitComparable: 'In the lane of Acquired', excerpt: 'Creators chewed up by an extractive system who rebuilt as independent operators, naming what the old system took and what they built to take it back.' },
  { slug: 'black-belt-at-40', title: 'Black Belt at 40', category: 'Sports', hitComparable: 'In the lane of Bear Grease', excerpt: 'Adult Brazilian Jiu-Jitsu and reinvention through training, landing on the move from the mat that the midlife operator can take to the desk.' },
  { slug: 'the-comeback-mile', title: 'The Comeback Mile', category: 'Sports', hitComparable: 'In the lane of 30 for 30', excerpt: 'Returning to sport after the worst injury, each arc in four acts. Drew Brees and the shoulder, Serena and the embolism, Tiger and the back.' },
  { slug: 'reps', title: 'Reps', category: 'Sports', hitComparable: 'In the lane of Bear Grease', excerpt: 'What ten thousand hours actually feels like in the body, one practitioner at a time.' },
  { slug: 'the-protocol', title: 'The Protocol', category: 'Biohacking', hitComparable: 'In the lane of Huberman Lab', excerpt: 'One input per season (sleep, breath, fasting, cold, light), walking from the boldest claim to the mechanism to the protocol a sensible operator should run.' },
  { slug: 'n-of-one', title: 'N of One', category: 'Biohacking', hitComparable: 'In the lane of Acquired', excerpt: 'The self-experimenter at the edge, from Bryan Johnson’s Blueprint to Wim Hof, and what the placebo question can and cannot rule out.' },
  { slug: 'basics', title: 'Basics', category: 'Biohacking', hitComparable: 'In the lane of The Daily Stoic', excerpt: 'The boring thing that actually works in eight minutes, twice a week. Walking, sleep, protein, sun, and one move to try this week.' },
  { slug: 'men-im-lucky-to-know', title: 'Men I’m Lucky to Know', category: 'Relationships', hitComparable: 'In the lane of We Can Do Hard Things', excerpt: 'The men in the room who change a life, one theme at a time, each carrying a named role. The storyteller, the heart, the grounder, the truth-teller.' },
  { slug: 'the-long-marriage', title: 'The Long Marriage', category: 'Relationships', hitComparable: 'In the lane of You Must Remember This', excerpt: 'Marriages that lasted forty years or more, closing each season by naming what those marriages share.' },
  { slug: 'the-long-friendship', title: 'The Long Friendship', category: 'Relationships', hitComparable: 'In the lane of Hidden Brain', excerpt: 'Friendships that survived four decades, set against the Surgeon General’s lonely-epidemic moment.' },
]

export const NETWORK_SHOWS: Show[] = NETWORK_SEED.map((s, i) => ({
  slug: s.slug,
  title: s.title,
  host: null,
  network: true,
  catalog: `APX-NET-${String(i + 1).padStart(2, '0')}`,
  cover: `/covers/show-${s.slug}.webp`,
  status: 'production',
  category: s.category,
  hitComparable: s.hitComparable,
  excerpt: s.excerpt,
}))

export const CATEGORIES: Category[] = [
  'Sports',
  'Music',
  'Business',
  'Communication',
  'Biohacking',
  'Relationships',
]

export const SHOWS: Show[] = [...REAL_SHOWS, ...NETWORK_SHOWS]

/** Cover paths for the Show Wall mosaic (anchors first for the visible grid). */
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
