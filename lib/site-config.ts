/**
 * Apex Podcast Co site configuration.
 *
 * Single source for navigation, footer, metadata, and CTA targets. Copy
 * strings live here or in COPY-SPEC-sourced section components, never
 * hardcoded inline beyond non-user-facing labels.
 *
 * Phase 5 GHL sweep swaps the placeholder URLs for real endpoints; each is
 * flagged with a `// TODO: swap to GHL` comment at its use site.
 */

export const siteConfig = {
  name: 'Apex Podcast Co',
  url: 'https://apexpodcast.co',
  defaultTitle:
    'Apex Podcast Co. Producers for serious artists, founders, and operators.',
  defaultDescription:
    'A boutique production company. A producer in the room on every session. A network around your show. The sound you would expect from a record label, applied to the long-form conversation.',

  email: {
    brett: 'brett@apexpodcast.co',
    randy: 'randy@apexpodcast.co',
    partners: 'partners@apexpodcast.co',
    press: 'press@apexpodcast.co',
  },

  // External properties
  transistorUrl: 'https://apexpodcast.co/listen', // TODO: swap to real Transistor Apex Podcast Network feed URL
  pentatypeUrl: 'https://pentatype.com',
  podcastNetworkUrl: 'https://podcastnetwork.org',

  // "The Apex Podcast" listen targets. TODO: swap to real show URLs.
  listen: {
    spotify: 'https://apexpodcast.co/listen', // TODO: real Spotify show URL
    apple: 'https://apexpodcast.co/listen', // TODO: real Apple Podcasts URL
    anywhere: 'https://apexpodcast.co/listen', // TODO: real all-platforms / RSS page
  },

  // Legacy CTA target placeholders. Some legacy pages still reference these
  // until the v4.2 sweep clears the unused routes.
  discoveryUrl: 'https://apexpodcast.co/discovery-call',
  partnerEnrollUrl: 'https://apexpodcast.co/partner-portal',
  affiliateSignupUrl: 'https://apexpodcast.co/affiliate',
  checkout: {
    firstEpisode: 'https://apexpodcast.co/checkout/your-first-episode',
    weeklyShow: 'https://apexpodcast.co/checkout/your-weekly-show',
    license: 'https://apexpodcast.co/checkout/multi-tenant-pipeline-license',
  },
} as const

/**
 * Routes that actually exist in the current build. Next.js prefetches in-viewport
 * links by default; prefetching a route that is not built yet returns a 404 and
 * shows up as a console error. SmartLink consults this set and only prefetches
 * live routes.
 */
export const liveRoutes: ReadonlySet<string> = new Set([
  '/',
  // 2026-06-18 redesign
  '/how-we-work/',
  '/network/',
  '/producers/',
  '/legal/privacy/',
  '/legal/terms/',
  // Legacy routes still in the tree (kept live so existing links resolve).
  '/work/',
  '/work/austin-cheviron/',
  '/work/russ-laggan/',
  '/services/',
  '/your-first-episode/',
  '/your-weekly-show/',
  '/multi-tenant-pipeline-license/',
  '/subscription/',
  '/portfolio/',
  '/case-studies/',
  '/case-studies/the-apex-podcast/',
  '/case-studies/sweeter-after-difficulty/',
  '/case-studies/the-russ-laggan-podcast/',
  '/case-studies/winning-twice/',
  '/resources/',
  '/about/',
  '/contact/',
  '/partners/',
  '/affiliate/',
  '/russ-laggan/',
  '/austin-cheviron/',
])

export function isLiveRoute(href: string): boolean {
  return liveRoutes.has(href)
}

/** Primary navigation. */
export const primaryNav: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: 'How We Work', href: '/how-we-work/' },
  { label: 'Network', href: '/network/' },
  { label: 'Producers', href: '/producers/' },
]

/** Footer link columns. */
export const footerSiteLinks = [
  { label: 'How We Work', href: '/how-we-work/' },
  { label: 'Network', href: '/network/' },
  { label: 'Producers', href: '/producers/' },
]
