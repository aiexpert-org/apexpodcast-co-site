/**
 * The Apex catalog. Powers the Network catalog page, the home page's dark
 * Logo Scroller band, and the Selected Work section.
 *
 * Three tiers:
 *  1. FLAGSHIP (3): the human-hosted Selected Work shown on the home page.
 *     Sweeter After Difficulty, Winning Twice, The Russ Laggan Podcast.
 *  2. ESTABLISHED (7): host-supplied artwork already on Transistor. The Apex
 *     Podcast anchors. The Transistor API client fills in live metadata.
 *  3. COMING SOON (17): the v4 strategy slate that ships through 2026 + 2027.
 *     Each carries a wordmark SVG from `public/wordmarks/<slug>/` produced by
 *     the parallel `2026-06-18-17-show-wordmarks/` brand task. The dark Logo
 *     Scroller renders the wordmarks; the Network catalog cards render the
 *     ink-on-bone variant with a Pentatype Core badge.
 *
 * Pentatype Core assignments for the 17 are locked in the INDEX.md of the
 * wordmark folder (Brand task 2026-06-18). The legacy 10-show stable's Core
 * assignments are inferred from the v4 producer-craft frame.
 */

import type { Core } from '@/lib/pentatype'

export type Show = {
  slug: string
  title: string
  /** Human host name, or null for Apex Network productions. */
  host: string | null
  coHost?: string
  /** Apex Podcast Network production vs human-hosted. */
  network: boolean
  catalog: string
  /** Raster cover for FLAGSHIP + ESTABLISHED. Empty for COMING SOON (we render wordmarks instead). */
  cover: string
  /** Wordmark folder slug under /wordmarks/<slug>/. Set for COMING SOON shows. */
  wordmark?: string
  status: 'live' | 'coming-soon'
  /** Selected Work pinned to the home page. */
  flagship?: boolean
  /** Has a legacy /case-studies/[slug]/ page. */
  caseStudy?: boolean
  /** Brief artist statement (Selected Work) or show description (Network). */
  excerpt: string
  /** Pentatype Core that anchors the producer-craft frame for this show. */
  core: Core
  /** Network-page badge: the hit-comparable lane. */
  hitComparable?: string
  /** Transistor slug if the show is on Transistor. Otherwise we match by title. */
  transistorSlug?: string
  /** Direct Listen URL (Transistor public page). */
  listenUrl?: string
  /** Legacy v3 field, kept optional so old /portfolio/ and /work/ compile. */
  category?: 'Sports' | 'Music' | 'Business' | 'Communication' | 'Biohacking' | 'Relationships'
}

/** The three Selected Work shows on the home page. Human-hosted. */
export const FLAGSHIP_SHOWS: Show[] = [
  {
    slug: 'sweeter-after-difficulty',
    title: 'Sweeter After Difficulty',
    host: 'Randy Highsmith',
    network: false,
    catalog: 'APX-002',
    cover: '/covers/show-sweeter-after-difficulty.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'meaning',
    excerpt:
      'Randy Highsmith on the hard seasons that make the good ones land. Each episode finds the truth that survived the difficulty and the move that made the difference. Produced live in the room, every conversation, every week.',
    listenUrl: 'https://sweeterafterdifficulty.transistor.fm',
  },
  {
    slug: 'winning-twice',
    title: 'Winning Twice',
    host: 'Austin Cheviron',
    network: false,
    catalog: 'APX-004',
    cover: '/covers/show-winning-twice.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'conviction',
    excerpt:
      'Austin Cheviron on building, selling, and doing it again. The operator\'s second act, told from the inside, with the specifics of what the first exit taught and what the next one is going to take.',
    listenUrl: 'https://winningtwice.transistor.fm',
  },
  {
    slug: 'the-russ-laggan-podcast',
    title: 'The Russ Laggan Podcast',
    host: 'Russ Laggan',
    network: false,
    catalog: 'APX-003',
    cover: '/covers/show-the-russ-laggan-podcast.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'structure',
    excerpt:
      'Russ Laggan on training, leadership, and the long game. Conversations recorded weekly to the Apex production standard, with guests from the brokerage floor to the boardroom.',
    listenUrl: 'https://russlaggan.transistor.fm',
  },
]

/**
 * The 7 Established shows on Transistor (besides the 3 Flagship). The Apex
 * Podcast anchors; the others are host-supplied artwork on real Transistor
 * shows per the 2026-06-18 wordmark brief.
 */
export const ESTABLISHED_SHOWS: Show[] = [
  {
    slug: 'the-apex-podcast',
    title: 'The Apex Podcast',
    host: 'Brett Moore',
    coHost: 'Randy Highsmith',
    network: false,
    catalog: 'APX-001',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'The network anchor. Brett Moore and Randy Highsmith sit down with owners, operators, and leaders and find the show inside what they have already built.',
    listenUrl: 'https://theapexpodcast.transistor.fm',
  },
  {
    slug: 'buddy-buck',
    title: 'Buddy Buck',
    host: 'Buddy Buck',
    network: false,
    catalog: 'APX-005',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'Buddy Buck on real estate, AI, and the people who actually do the work. The show that turns a workshop floor into a microphone.',
  },
  {
    slug: 'youre-allowed',
    title: 'You\'re Allowed',
    host: 'Jesse Rhodes Jr',
    network: false,
    catalog: 'APX-006',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'meaning',
    excerpt:
      'Permission as a posture. Jesse Rhodes Jr on the work of giving yourself the green light, with guests who have already been there.',
  },
  {
    slug: 'in-a-moment',
    title: 'In a Moment',
    host: 'Apex Studio',
    network: false,
    catalog: 'APX-007',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'Short-form. The moment a decision turned, told in the host\'s own voice, in under fifteen minutes per episode.',
  },
  {
    slug: 'the-next-episode',
    title: 'The Next Episode',
    host: 'Apex Studio',
    network: false,
    catalog: 'APX-008',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'discovery',
    excerpt:
      'The behind-the-scenes feed for Apex producers. A working show on the producer\'s craft.',
  },
  {
    slug: 'martin-ruof',
    title: 'Martin Ruof Podcast',
    host: 'Martin Ruof',
    network: false,
    catalog: 'APX-009',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'structure',
    excerpt:
      'Martin Ruof on operating in the trades the way the best operate in software. Systems, hires, and the small decisions that compound.',
  },
  {
    slug: 'how-to-host-a-podcast',
    title: 'How To Host a Podcast',
    host: 'Brett Moore',
    network: false,
    catalog: 'APX-010',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'structure',
    excerpt:
      'A producer-coached series for new hosts. Each episode covers one move that separates an okay host from one who can carry a long conversation.',
  },
]

/**
 * The 17 v4 slate shows from `brand/2026-06-18-17-show-wordmarks/INDEX.md`.
 * Slug + Core assignment locked there. Wordmarks live at
 * `public/wordmarks/<slug>/`.
 */
export const COMING_SOON_SHOWS: Show[] = [
  {
    slug: 'the-brief',
    title: 'The Brief',
    host: null,
    network: true,
    catalog: 'APX-NET-01',
    cover: '',
    wordmark: 'the-brief',
    status: 'coming-soon',
    core: 'connection',
    hitComparable: 'In the lane of Up First',
    excerpt:
      'Apex\'s daily ten-minute operator briefing. One story from across the network, one craft observation, one market signal, one move for your day.',
  },
  {
    slug: 'etymon',
    title: 'Etymon',
    host: null,
    network: true,
    catalog: 'APX-NET-02',
    cover: '',
    wordmark: 'etymon',
    status: 'coming-soon',
    core: 'discovery',
    hitComparable: 'In the lane of Daily Stoic for vocabulary',
    excerpt:
      'A daily five-to-seven-minute etymology show framed as wisdom, not vocabulary. One word, its root, and how it changes when you hold the root in mind.',
  },
  {
    slug: 'read-the-room',
    title: 'Read the Room',
    host: null,
    network: true,
    catalog: 'APX-NET-03',
    cover: '',
    wordmark: 'read-the-room',
    status: 'coming-soon',
    core: 'structure',
    hitComparable: 'In the lane of Hidden Brain',
    excerpt:
      'The Pentatype applied to history. Five archetype voices profile one figure per episode, from Oprah to Aurelius to Joan Didion, on how they actually processed the world.',
  },
  {
    slug: 'ai-native',
    title: 'AI Native',
    host: null,
    network: true,
    catalog: 'APX-NET-04',
    cover: '',
    wordmark: 'ai-native',
    status: 'coming-soon',
    core: 'structure',
    hitComparable: 'In the lane of Acquired for the AI age',
    excerpt:
      'Companies that could not have existed before 2023. The Acquired format, applied to the AI-native firm. What architecture choices unlocked them and what their next two years look like.',
  },
  {
    slug: 'coaches',
    title: 'Coaches',
    host: null,
    network: true,
    catalog: 'APX-NET-05',
    cover: '',
    wordmark: 'coaches',
    status: 'coming-soon',
    core: 'conviction',
    hitComparable: 'In the lane of Founders for coaches',
    excerpt:
      'One great coach per episode, walked Senra-style. Belichick, Phil Jackson, Pat Summitt, Tex Winter. The principles, the rooms, and the moves that made the difference.',
  },
  {
    slug: 'perfect-love',
    title: 'Perfect Love',
    host: null,
    network: true,
    catalog: 'APX-NET-06',
    cover: '',
    wordmark: 'perfect-love',
    status: 'coming-soon',
    core: 'meaning',
    hitComparable: 'In the lane of On Being meets Tim Keller',
    excerpt:
      'The intellectually serious Christian lineage as a serialized show. Reader voice on Lewis, Chesterton, Bonhoeffer, Nouwen, Berry. A Skeptic voice asking the harder questions. Brett anchors.',
  },
  {
    slug: 'legacy',
    title: 'Legacy',
    host: null,
    network: true,
    catalog: 'APX-NET-07',
    cover: '',
    wordmark: 'legacy',
    status: 'coming-soon',
    core: 'meaning',
    hitComparable: 'In the lane of The Long Now Foundation',
    excerpt:
      'What outlasts. Buildings, ideas, and bloodlines. One legacy per episode, walked from the act of building to the artifact that survived.',
  },
  {
    slug: 'master-of-two-worlds',
    title: 'Master of Two Worlds',
    host: null,
    network: true,
    catalog: 'APX-NET-08',
    cover: '',
    wordmark: 'master-of-two-worlds',
    status: 'coming-soon',
    core: 'meaning',
    hitComparable: 'In the lane of Hardcore History',
    excerpt:
      'Joseph Campbell\'s Hero\'s Journey applied to real historical figures. Where the threshold was crossed, what was found, what got carried home.',
  },
  {
    slug: 'first-principles',
    title: 'First Principles',
    host: null,
    network: true,
    catalog: 'APX-NET-09',
    cover: '',
    wordmark: 'first-principles',
    status: 'coming-soon',
    core: 'discovery',
    hitComparable: 'In the lane of The Socratic Method, modernized',
    excerpt:
      'One idea, down to the root. The Socratic Hour for builders. Why is this the way it is, and what would happen if we stopped pretending it had to be.',
  },
  {
    slug: 'old-books',
    title: 'Old Books',
    host: null,
    network: true,
    catalog: 'APX-NET-10',
    cover: '',
    wordmark: 'old-books',
    status: 'coming-soon',
    core: 'meaning',
    hitComparable: 'In the lane of Philosophize This!',
    excerpt:
      'Classics in twenty minutes for operators. One ancient or pre-modern book per episode, walked for the move a busy operator can carry into a Tuesday meeting.',
  },
  {
    slug: 'the-55-plus-operator',
    title: 'The 55+ Operator',
    host: null,
    network: true,
    catalog: 'APX-NET-11',
    cover: '',
    wordmark: 'the-55-plus-operator',
    status: 'coming-soon',
    core: 'connection',
    hitComparable: 'In the lane of How I Built This, encore-career edition',
    excerpt:
      'The largest demographic shift in the data is the 55+ surge. A weekly profile of the operator in the long arc, the encore career, the multigenerational family, and the dignity of a long line.',
  },
  {
    slug: 'same-stars',
    title: 'Same Stars',
    host: null,
    network: true,
    catalog: 'APX-NET-12',
    cover: '',
    wordmark: 'same-stars',
    status: 'coming-soon',
    core: 'discovery',
    hitComparable: 'In the lane of StarTalk meets The Memory Palace',
    excerpt:
      'One star per episode. The science, the cross-cultural mythology, the literary canon, and the same star over the listener\'s head right now.',
  },
  {
    slug: 'hands-on',
    title: 'Hands On',
    host: null,
    network: true,
    catalog: 'APX-NET-13',
    cover: '',
    wordmark: 'hands-on',
    status: 'coming-soon',
    core: 'conviction',
    hitComparable: 'In the lane of Bear Grease',
    excerpt:
      'Trades and craft, in the operator\'s own voice. The cabinetmaker, the welder, the mason, the heli-mechanic. One trade per arc, the work behind the work.',
  },
  {
    slug: 'the-liner-notes',
    title: 'The Liner Notes',
    host: null,
    network: true,
    catalog: 'APX-NET-14',
    cover: '',
    wordmark: 'the-liner-notes',
    status: 'coming-soon',
    core: 'conviction',
    hitComparable: 'In the lane of Song Exploder for albums',
    excerpt:
      'The credits, walked. Personnel, studio, engineer, acknowledgements, hidden dedications, then back-out to the album from the liner notes outward.',
  },
  {
    slug: 'pure-reading',
    title: 'Pure Reading',
    host: null,
    network: true,
    catalog: 'APX-NET-15',
    cover: '',
    wordmark: 'pure-reading',
    status: 'coming-soon',
    core: 'connection',
    hitComparable: 'In the lane of nothing else, which is the point',
    excerpt:
      'Public-domain classics read slowly, soft ambient bed underneath. Yeats, Wharton, Emerson, Dickens. Twice a week. Apex\'s sleep series.',
  },
  {
    slug: 'hard-questions-for-the-faithful',
    title: 'Hard Questions for the Faithful',
    host: null,
    network: true,
    catalog: 'APX-NET-16',
    cover: '',
    wordmark: 'hard-questions-for-the-faithful',
    status: 'coming-soon',
    core: 'conviction',
    hitComparable: 'In the lane of the BibleProject\'s sharpest mode',
    excerpt:
      'One hard question per episode, walked through the best three historical answers and the best three modern objections. Companion to Perfect Love, taking the Skeptic\'s side seriously.',
  },
  {
    slug: 'the-lyricists',
    title: 'The Lyricists',
    host: null,
    network: true,
    catalog: 'APX-NET-17',
    cover: '',
    wordmark: 'the-lyricists',
    status: 'coming-soon',
    core: 'meaning',
    hitComparable: 'In the lane of Switched On Pop, lyric-only',
    excerpt:
      'Great lyricists decoded one line at a time. Dylan, Joni Mitchell, Kendrick, Bowie, Cohen. The page in front of you, the song in your ear, the move on the staff.',
  },
]

export const SHOWS: Show[] = [...FLAGSHIP_SHOWS, ...ESTABLISHED_SHOWS, ...COMING_SOON_SHOWS]

/** All shows for the dark Logo Scroller on the home page (27 total). */
export const SCROLLER_SHOWS: Show[] = SHOWS

/** Cover paths for legacy components that still scan SHOWS for raster art. */
export const SHOW_COVERS: string[] = SHOWS.map((s) => s.cover).filter(Boolean)

/** The Selected Work picks, in display order. */
export const CASE_STUDY_SHOWS: Show[] = FLAGSHIP_SHOWS

/** Network-page shows, in catalog order. */
export const NETWORK_SHOWS: Show[] = [...ESTABLISHED_SHOWS, ...COMING_SOON_SHOWS]

export function getShow(slug: string): Show | undefined {
  return SHOWS.find((s) => s.slug === slug)
}

export function hostLine(show: Show): string {
  if (show.network) return 'From the Apex Podcast Network'
  if (show.coHost) return `${show.host} & ${show.coHost}`
  return show.host ?? 'From the Apex Podcast Network'
}

// Legacy aliases kept for components that still reference the older names.
export const REAL_SHOWS: Show[] = FLAGSHIP_SHOWS
export type Category = 'Sports' | 'Music' | 'Business' | 'Communication' | 'Biohacking' | 'Relationships'
export const CATEGORIES: Category[] = [
  'Sports',
  'Music',
  'Business',
  'Communication',
  'Biohacking',
  'Relationships',
]
