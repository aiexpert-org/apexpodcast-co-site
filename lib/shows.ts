/**
 * The Apex catalog. Powers the Portfolio grid and the Show Wall mosaic. Cover
 * art is the background-tile content (the CCM design move, recast for podcasts).
 *
 * FOUR human-hosted anchor shows still live front and center.
 * SEVENTEEN Apex Podcast Network shows are AI-narrated brand productions
 * organized by Pentatype Core (Connection, Structure, Conviction, Discovery,
 * Meaning). No fabricated host names: every network show is narrated by the
 * Apex brand voice and discloses it.
 *
 * Canonical source: strategy/v4-concept-validation-2026-06-17.md (the v4.1
 * slate locked 2026-06-17 evening; supersedes the v2/v3 20-show stable).
 * Cover art for renamed and net-new shows is a typographic placeholder in
 * the Acid brand until full art lands.
 */

export type Core =
  | 'Connection'
  | 'Structure'
  | 'Conviction'
  | 'Discovery'
  | 'Meaning'

/** The Pentatype finger that maps to each Core, used in section headings. */
export const CORE_FINGER: Record<Core, string> = {
  Connection: 'Thumb',
  Structure: 'Pointer',
  Conviction: 'Middle',
  Discovery: 'Ring',
  Meaning: 'Pinkie',
}

/** Optional one-line gloss for each Core, used in section copy. */
export const CORE_GLOSS: Record<Core, string> = {
  Connection: 'Daily presence and ambient companionship.',
  Structure: 'Frameworks, principles, and how things actually work.',
  Conviction: 'Craft, character, and the harder questions.',
  Discovery: 'Curiosity, wonder, and the world made vivid.',
  Meaning: 'Love, legacy, and what outlasts the work.',
}

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
  /** Network shows: the Pentatype Core bucket. */
  core?: Core
  /** Set when the show has a full case study page. */
  caseStudy?: boolean
  /** Flagship anchor show, pinned first. */
  flagship?: boolean
  /** Provisional shows may move or get swapped before launch. */
  provisional?: boolean
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
  core: Core
  excerpt: string
  /** Optional override for the cover path (when reusing an existing webp). */
  cover?: string
  provisional?: boolean
}

// The 17 Apex Podcast Network shows from the v4.1 slate (locked 2026-06-17).
// Organized by Pentatype Core. Cover paths default to typographic SVG
// placeholders; a handful reuse webp art where the concept survived a rename.
const NETWORK_SEED: NetSeed[] = [
  // Connection (Thumb)
  {
    slug: 'the-brief',
    title: 'The Brief',
    core: 'Connection',
    excerpt:
      'A daily ten-minute Apex operator briefing. One story from across the Apex network, one craft observation, one market signal, closing with the move for your day.',
  },
  {
    slug: 'the-55-plus-operator',
    title: 'The 55+ Operator',
    core: 'Connection',
    excerpt:
      'Operator audio designed for the audience that already grew fastest. Late-career transitions, encore careers, multigenerational family, the dignity of a long arc.',
  },
  {
    slug: 'pure-reading',
    title: 'Pure Reading',
    core: 'Connection',
    excerpt:
      'The Apex Sleep Series. Pre-1923 public-domain texts read slowly with a soft ambient bed. Yeats, Wharton, Emerson, Dickens across two-week arcs.',
  },

  // Structure (Pointer)
  {
    slug: 'ai-native',
    title: 'AI Native',
    core: 'Structure',
    excerpt:
      'Case studies of companies that could not have existed before 2023. The build choices, the model stack, the team shape, and the part the AI Use Case segment used to live in.',
  },
  {
    slug: 'coaches',
    title: 'Coaches',
    core: 'Structure',
    excerpt:
      'Great coaches and the principles that travel beyond their sport. Wooden, Belichick, Auriemma, Popovich, Saban. Absorbs the Underdogs segment.',
  },
  {
    slug: 'first-principles',
    title: 'First Principles',
    core: 'Structure',
    excerpt:
      'Socratic foundational thinking applied to one operator question per episode. Absorbs Mental Models, Big Decisions, and Cross-Training into one curriculum.',
  },
  {
    slug: 'old-books',
    title: 'Old Books',
    core: 'Structure',
    excerpt:
      'One ancient or classical text per episode, walked for what it still gives an operator today. Absorbs Drafts, Sentences, Great Speeches, and Great Lines into one canon.',
  },

  // Conviction (Middle)
  {
    slug: 'hands-on',
    title: 'Hands On',
    core: 'Conviction',
    excerpt:
      'Trades and craft wisdom from the people who still make the thing. Carpenters, welders, watchmakers, farriers. Archival craft testimony with an Apex narrator stitching context.',
  },
  {
    slug: 'hard-questions-for-the-faithful',
    title: 'Hard Questions for the Faithful',
    core: 'Conviction',
    excerpt:
      'Apologetics for honest doubters. One hard question per episode, walked through the best three historical answers and the best three modern objections.',
  },
  {
    slug: 'the-liner-notes',
    title: 'The Liner Notes',
    core: 'Conviction',
    excerpt:
      'The album as literary artifact. Read the credits, walk the studio, the engineer, the hidden dedications, then back out to the record itself. No audio plays.',
  },

  // Discovery (Ring)
  {
    slug: 'etymon',
    title: 'Etymon',
    core: 'Discovery',
    excerpt:
      'A daily five-to-seven minute etymology. The root, the migration, and the one phrasing you can put to work in your writing this week.',
  },
  {
    slug: 'same-stars',
    title: 'Same Stars',
    core: 'Discovery',
    excerpt:
      'One star or constellation per episode. The astronomy, the cross-cultural mythology, and the lines of poetry written under the same light, told together.',
  },
  {
    slug: 'read-the-room',
    title: 'Read the Room',
    core: 'Discovery',
    cover: '/covers/show-the-listener.webp',
    excerpt:
      'The Pentatype communication framework, applied to one historical figure per episode across the five archetypes. Absorbs the How to Listen segment.',
  },

  // Meaning (Pinkie)
  {
    slug: 'perfect-love',
    title: 'Perfect Love',
    core: 'Meaning',
    excerpt:
      'The Four Loves, serialized. Lewis, Chesterton, Bonhoeffer, Augustine read by the Reader voice, questioned by the Skeptic voice, framed by the host. Absorbs Vows, Still Friends, On Friendship, Spiritual Practices, and Heroes & Lovers.',
  },
  {
    slug: 'master-of-two-worlds',
    title: 'Master of Two Worlds',
    core: 'Meaning',
    excerpt:
      'The Hero’s Journey as curriculum, applied to real historical figures. Absorbs the Letters to Sons and Pivot segments into a single arc.',
  },
  {
    slug: 'legacy',
    title: 'Legacy',
    core: 'Meaning',
    excerpt:
      'Building what outlasts you. One operator, leader, or maker per episode, told through the work that is still standing. Absorbs The Long Game, Letters, and Last Lectures.',
  },
  {
    slug: 'the-lyricists',
    title: 'The Lyricists',
    core: 'Meaning',
    provisional: true,
    excerpt:
      'Great lyricists and their lyrics decoded under fair use. Dylan, Mitchell, Cohen, Hill, Stevens. Provisional pick, designed to swap cleanly if a different second music show takes the slot.',
  },
]

export const NETWORK_SHOWS: Show[] = NETWORK_SEED.map((s, i) => ({
  slug: s.slug,
  title: s.title,
  host: null,
  network: true,
  catalog: `APX-NET-${String(i + 1).padStart(2, '0')}`,
  cover: s.cover ?? `/covers/show-${s.slug}.svg`,
  status: 'production',
  core: s.core,
  excerpt: s.excerpt,
  provisional: s.provisional,
}))

export const CORES: Core[] = [
  'Connection',
  'Structure',
  'Conviction',
  'Discovery',
  'Meaning',
]

/** Network shows grouped by Core, in the canonical Pentatype order. */
export const NETWORK_BY_CORE: Record<Core, Show[]> = CORES.reduce(
  (acc, core) => {
    acc[core] = NETWORK_SHOWS.filter((s) => s.core === core)
    return acc
  },
  {} as Record<Core, Show[]>,
)

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
