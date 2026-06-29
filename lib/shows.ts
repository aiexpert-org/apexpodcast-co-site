/**
 * The Apex catalog.
 *
 * Public-facing posture (2026-06-28 honesty pass): the catalog IS the three
 * Flagship shows. ESTABLISHED + COMING SOON entries are retained in source
 * for internal/admin use but the public derived exports (SCROLLER_SHOWS,
 * NETWORK_SHOWS, CASE_STUDY_SHOWS) all resolve to the three real shows so
 * the site never overstates the catalog.
 *
 * The three real shows: The Russ Laggan Podcast, Winning Twice with Austin
 * Cheviron, Sweeter After Difficulty.
 */

import type { Core } from '@/lib/pentatype'

export type Show = {
  slug: string
  title: string
  /** Short one-sentence tagline (v4.3 strings). */
  tagline?: string
  /** Human host name, or null for Apex Network productions. */
  host: string | null
  coHost?: string
  /** Apex Podcast Network production vs human-hosted. */
  network: boolean
  catalog: string
  /** Raster cover for FLAGSHIP + ESTABLISHED. Empty for COMING SOON. */
  cover: string
  /** Wordmark folder slug under /wordmarks/<slug>/. Set for COMING SOON shows
   *  that have brand-cut SVG art at the v4.3 name. */
  wordmark?: string
  status: 'live' | 'coming-soon'
  /** Selected Work pinned to the home page. */
  flagship?: boolean
  /** Has a legacy /case-studies/[slug]/ page. */
  caseStudy?: boolean
  /** Network card body copy. */
  excerpt: string
  /** Pentatype Core that anchors the producer-craft frame for this show. */
  core: Core
  /** Network-page badge: the hit-comparable lane (legacy v4 field). */
  hitComparable?: string
  /** Transistor slug if the show is on Transistor. Otherwise matched by title. */
  transistorSlug?: string
  /** Direct Listen URL (Transistor public page). */
  listenUrl?: string
  /** Legacy v3 field, kept optional so old /portfolio/ and /work/ compile. */
  category?: 'Sports' | 'Music' | 'Business' | 'Communication' | 'Biohacking' | 'Relationships'
  /** Legacy v4.1 field on the show-grid component (Provisional badge). */
  provisional?: boolean
}

/** The three Selected Work shows on the home page. Human-hosted. */
export const FLAGSHIP_SHOWS: Show[] = [
  {
    slug: 'sweeter-after-difficulty',
    title: 'Sweeter After Difficulty',
    tagline: 'Beauty that emerges through struggle.',
    host: 'Randy Highsmith',
    network: false,
    catalog: 'APX-002',
    cover: '/covers/show-sweeter-after-difficulty.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'meaning',
    excerpt:
      'Randy Highsmith sits down with people who faced fear, endured pain, and found peace not despite their challenges but through them. You will hear honest conversations about loss, recovery, faith, and resilience that remind you what is still possible on the other side of the hardest seasons.',
    listenUrl: 'https://sweeterafterdifficulty.transistor.fm',
  },
  {
    slug: 'winning-twice',
    title: 'Winning Twice With Austin Cheviron',
    tagline: 'How to win twice in work and in life.',
    host: 'Austin Cheviron',
    network: false,
    catalog: 'APX-004',
    cover: '/covers/show-winning-twice.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'connection',
    excerpt:
      'Austin Cheviron walks through the conversations about money, family, and legacy that decide whether you build a career or build a life that lasts. You will learn what the most important conversations of your lifetime sound like, so you can start having them with the people who matter most.',
    listenUrl: 'https://winningtwice.transistor.fm',
  },
  {
    slug: 'the-russ-laggan-podcast',
    title: 'The Russ Laggan Podcast',
    tagline: 'Explore the human side of leadership.',
    host: 'Russ Laggan',
    network: false,
    catalog: 'APX-003',
    cover: '/covers/show-the-russ-laggan-podcast.webp',
    status: 'live',
    flagship: true,
    caseStudy: true,
    core: 'conviction',
    excerpt:
      'Russ Laggan, author of Be Followable and VP of Training at eXp Realty, sits down with people he finds interesting to celebrate what makes them uniquely themselves. You will hear the stories and real passions that shaped how each of his guests sees the world, and discover what makes someone worth following.',
    listenUrl: 'https://russlaggan.transistor.fm',
  },
]

/**
 * The 7 Established shows on Transistor (besides the 3 Flagship). The Apex
 * Podcast anchors the network.
 */
export const ESTABLISHED_SHOWS: Show[] = [
  {
    slug: 'the-apex-podcast',
    title: 'The Apex Podcast',
    tagline: 'Authentic production tips for Apex hosts, guests, and audiences.',
    host: 'Brett K Moore',
    coHost: 'Randy Highsmith',
    network: false,
    catalog: 'APX-001',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'structure',
    excerpt:
      'Brett K Moore and Randy Highsmith open the doors of Apex Podcast Co so you can hear what really happens when producers shape a show. You will learn how great conversations get built, why some episodes land and others do not, and what the operators we work with are actually thinking on the other side of the microphone. Season 1 walks you through the Pentatype communication framework one episode at a time.',
    listenUrl: 'https://theapexpodcast.transistor.fm',
  },
  {
    slug: 'buddy-buck',
    title: 'Buddy Buck Show',
    tagline: 'Create community one conversation at a time.',
    host: 'Buddy Buck',
    network: false,
    catalog: 'APX-005',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'Buddy Buck sits down with community leaders, builders, and the people shaping the world around them. You will hear how real community gets made one conversation at a time, and leave each episode with ideas you can use to strengthen the communities you belong to.',
  },
  {
    slug: 'youre-allowed',
    title: 'You’re Allowed*',
    tagline: 'Permission to want more than they told you was possible.',
    host: 'Rachael Barclay',
    network: false,
    catalog: 'APX-006',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'Rachael Barclay invites women to reclaim the dreams they were told to set aside. You will hear conversations that uncomplicate access to the life you actually want, and leave each episode with a clearer picture of what you are already allowed to pursue.',
  },
  {
    slug: 'in-a-moment',
    title: 'In a Moment',
    tagline: 'Discover God’s love in moments that break us open.',
    host: 'Michele Okimura',
    coHost: 'Brett K Moore',
    network: false,
    catalog: 'APX-007',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'meaning',
    excerpt:
      'Michele Okimura and Brett K Moore trace how God meets us in life’s most defining moments, from joy to pain, from the everyday to the unforgettable. You will hear how kairos moments, the appointed sacred ones, weave through chronos time, the everyday sequential kind, so you can recognize the sacred fingerprints in your own life.',
  },
  {
    slug: 'the-next-episode',
    title: 'The Next Episode',
    tagline: 'Stories about brave choices and braver people.',
    host: 'Terry Hollimon',
    network: false,
    catalog: 'APX-008',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'connection',
    excerpt:
      'Terry Hollimon hosts conversations with people in the middle of life’s biggest transitions. You will hear honest reflections on the moments that change everything, and the work of becoming someone new on the other side of them.',
  },
  {
    slug: 'martin-ruof',
    title: 'The Martin Ruof Podcast',
    tagline: 'You’re not broken; you’re buried. Let’s set you free.',
    host: 'Martin Ruof',
    network: false,
    catalog: 'APX-009',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'discovery',
    excerpt:
      'Martin Ruof guides listeners through what he calls the craftsmanship of self, the deliberate practice of building who you are meant to become. You will leave each episode with concrete ways to think about your own development, and the discipline it takes to keep growing.',
  },
  {
    slug: 'how-to-host-a-podcast',
    title: 'How To Host a Podcast',
    tagline: 'Explore the communication styles of the world’s best podcasters.',
    host: 'Brett K Moore',
    network: false,
    catalog: 'APX-010',
    cover: '/covers/show-the-apex-podcast.webp',
    status: 'live',
    core: 'structure',
    excerpt:
      'We explore the communication styles behind the world’s best podcasts. You will learn the host and guest techniques that consistently produce great episodes, so you can apply them whether you are recording your first episode or your hundredth.',
  },
]

/**
 * The 16 AI-narrated v4.3 slate. Each shows up on the dark Logo Scroller and
 * the Network catalog page. Wordmark SVGs at `public/wordmarks/<slug>/` are
 * referenced where the v4.3 name matches the existing brand-task slug;
 * renamed shows fall back to typeset until brand cuts new wordmark assets.
 */
export const COMING_SOON_SHOWS: Show[] = [
  {
    slug: 'etymon',
    title: 'Etymon',
    tagline: 'Hidden stories from words we use every day.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-01',
    cover: '',
    wordmark: 'etymon',
    status: 'coming-soon',
    core: 'discovery',
    excerpt:
      'We reveal the etymology and deeper meaning hiding inside common words. You will learn where everyday language actually comes from, so you can use words with more intention and discover the layers most people walk past.',
  },
  {
    slug: 'read-the-room',
    title: 'Read the Room',
    tagline: 'Communication tools that shape human connection.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-02',
    cover: '',
    wordmark: 'read-the-room',
    status: 'coming-soon',
    core: 'structure',
    excerpt:
      'We explore the nature of communication through the lens of the assessment tools shaping how people understand each other. From Myers-Briggs to the Enneagram to the Big Five OCEAN model to the Pentatype framework, you will learn how to recognize the patterns in yourself and others, so you can connect with anyone in any context.',
  },
  {
    slug: 'ai-native',
    title: 'AI Native',
    tagline: 'How to build an AI native organization.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-03',
    cover: '',
    wordmark: 'ai-native',
    status: 'coming-soon',
    core: 'structure',
    excerpt:
      'We study organizations of every kind, including businesses, non-profits, and creative ventures, that treat AI as the substrate of their work rather than a feature added on top. You will hear case studies of the decisions these organizations made differently, so you can apply the same thinking to whatever you are building.',
  },
  {
    slug: 'the-method',
    title: 'The Method',
    tagline: 'Methods top guides live by.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-04',
    cover: '',
    status: 'coming-soon',
    core: 'structure',
    excerpt:
      'We go behind the scenes with the world’s top guides. You will discover the methods they teach and how they actually live them in their own work, so you can recognize the frameworks worth bringing into your own life.',
  },
  {
    slug: 'perfect-love',
    title: 'Perfect Love',
    tagline: 'Embody the four loves that shape every life ever lived.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-05',
    cover: '',
    wordmark: 'perfect-love',
    status: 'coming-soon',
    core: 'meaning',
    excerpt:
      'We explore C.S. Lewis’s framework of the four loves, storge, philia, eros, and agape, through the writings of Lewis, Augustine, Aquinas, Kierkegaard, Marilynne Robinson, Bonhoeffer, and more. You will learn how to recognize these four loves in your own relationships, and understand why the deepest faith traditions have always pointed back to them.',
  },
  {
    slug: 'outlast',
    title: 'Outlast',
    tagline: 'Create a legacy that outlasts you.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-06',
    cover: '',
    status: 'coming-soon',
    core: 'meaning',
    excerpt:
      'We profile people who breathed life into the legacies they wanted to leave, and walk through the frameworks they used to do it. You will learn how to think about legacy as something you create deliberately, so the work of your hands continues to matter long after you are gone.',
  },
  {
    slug: 'master-of-two-worlds',
    title: 'Master of Two Worlds',
    tagline: 'Stories of people who brave the Hero’s Journey.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-07',
    cover: '',
    wordmark: 'master-of-two-worlds',
    status: 'coming-soon',
    core: 'meaning',
    excerpt:
      'We tell the stories of people both historical and literary whose lives followed Joseph Campbell’s monomyth, from Lincoln, MLK, and Bonhoeffer to Frodo Baggins, Luke Skywalker, and Atticus Finch. You will recognize the same stages of the journey in your own life, so you can navigate transition with the wisdom of those who walked the path before you.',
  },
  {
    slug: 'square-one',
    title: 'Square One',
    tagline: 'How first principles thinking can solve your biggest problems.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-08',
    cover: '',
    status: 'coming-soon',
    core: 'discovery',
    excerpt:
      'We take everyday concepts like money, trust, and time back to first principles using the kind of Socratic questioning people use to break through stuck thinking. You will leave each episode able to solve problems from the ground up rather than from borrowed assumptions.',
  },
  {
    slug: 'the-other-half',
    title: 'The Other Half',
    tagline: 'The other half of the sayings you thought you knew.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-09',
    cover: '',
    status: 'coming-soon',
    core: 'discovery',
    excerpt:
      'Many famous quotes and proverbs are only a piece of the puzzle, and when you hear the full saying the meaning often changes completely. We restore the missing half of the sayings and passages you thought you knew, so you can use them the way they were actually meant.',
  },
  {
    slug: 'carried-over',
    title: 'Carried Over',
    tagline: 'Stories of the brave decisions that transformed lives.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-10',
    cover: '',
    status: 'coming-soon',
    core: 'connection',
    excerpt:
      'We tell the stories of people who made the biggest decisions of their lives and would make them again. You will hear how identity, skill, and conviction translate across the chapters of a life, so you can think about your own biggest decisions with more confidence.',
  },
  {
    slug: 'same-stars',
    title: 'Same Stars',
    tagline: 'Stories about the stars that guide you.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-11',
    cover: '',
    wordmark: 'same-stars',
    status: 'coming-soon',
    core: 'discovery',
    excerpt:
      'We walk through the astronomy of one star or constellation and the multi-cultural mythology built around it. You will learn what the night sky has been telling humans for thousands of years, and discover the hidden meaning behind the constellations you have always known by name.',
  },
  {
    slug: 'hands-on',
    title: 'Hands On',
    tagline: 'Meet the hands behind the instruments that shape music.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-12',
    cover: '',
    wordmark: 'hands-on',
    status: 'coming-soon',
    core: 'conviction',
    excerpt:
      'We profile the master craftspeople who build the instruments musicians depend on, from luthiers to guitar company founders to woodworkers shaping the next generation of sound. You will hear how the people who make music possible think about their craft, and you will see music differently because of it.',
  },
  {
    slug: 'play-it-forward',
    title: 'Play It Forward',
    tagline: 'Explore songs that helped shape cultural movements.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-13',
    cover: '',
    status: 'coming-soon',
    core: 'meaning',
    excerpt:
      'We explore how music has shaped cultural movements throughout history, from the Hawaiian renaissance with Eddie Kamae to Civil Rights with Sam Cooke. Each episode pairs a movement with a curated Spotify playlist you can listen alongside, so you can feel how the songs themselves became part of the change.',
  },
  {
    slug: 'the-rest-of-the-classics',
    title: 'The Rest of the Classics',
    tagline: 'Classics read aloud to help you fall asleep.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-14',
    cover: '',
    status: 'coming-soon',
    core: 'connection',
    excerpt:
      'We read excerpts from public-domain classic books in a calm, paced voice with ambient music underneath. You will sleep more deeply and absorb great literature at the same time, because your mind retains more when it relaxes into a story.',
  },
  {
    slug: 'the-rest-of-scripture',
    title: 'The Rest of Scripture',
    tagline: 'Scripture to help you fall asleep.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-15',
    cover: '',
    status: 'coming-soon',
    core: 'connection',
    excerpt:
      'We read Psalms, Proverbs, Gospels, and Letters in a calm, paced voice with solfeggio frequencies underneath. You can fall asleep to it or leave it playing quietly all night, so the words that have steadied believers for thousands of years become the soundtrack of your rest.',
  },
  {
    slug: 'within-reason',
    title: 'Within Reason',
    tagline: 'How logic and first principles shape the world we know.',
    host: 'Brett K Moore',
    network: true,
    catalog: 'APX-NET-16',
    cover: '',
    status: 'coming-soon',
    core: 'conviction',
    excerpt:
      'We teach the classical forms of logical argument, from sentential logic to modus ponens to modus tollens to De Morgan’s laws, using real case studies drawn from history, philosophy, faith traditions, and the modern arguments shaping pop culture today. You will learn how to recognize sound and unsound reasoning, so you can think clearly through any question in life rather than rely on someone else’s answers.',
  },
]

export const SHOWS: Show[] = [...FLAGSHIP_SHOWS, ...ESTABLISHED_SHOWS, ...COMING_SOON_SHOWS]

/** Public-facing catalog: only the three real shows. */
export const PUBLIC_SHOWS: Show[] = FLAGSHIP_SHOWS

/** All shows for the dark Logo Scroller on the home page (26 total). */
export const SCROLLER_SHOWS: Show[] = PUBLIC_SHOWS

/** Cover paths for legacy components that still scan SHOWS for raster art. */
export const SHOW_COVERS: string[] = SHOWS.map((s) => s.cover).filter(Boolean)

/** The Selected Work picks, in display order. */
export const CASE_STUDY_SHOWS: Show[] = FLAGSHIP_SHOWS

/** Network-page shows, in catalog order. */
export const NETWORK_SHOWS: Show[] = PUBLIC_SHOWS

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
