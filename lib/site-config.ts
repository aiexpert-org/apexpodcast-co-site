/**
 * Apex Podcast Co site configuration.
 *
 * Single source for navigation, footer, metadata, and CTA targets. Copy strings
 * live here or in COPY-SPEC-sourced section components, never hardcoded inline
 * beyond non-user-facing labels.
 *
 * PHASE 3 PLACEHOLDER URLS (see PHASE3-PLACEHOLDERS.md). These are documented
 * stand-ins that the Phase 5 GHL sweep swaps for real endpoints. Each is also
 * flagged with a `// TODO: swap to GHL` comment at its use site.
 */

export const siteConfig = {
  name: 'Apex Podcast Co',
  url: 'https://apexpodcast.co',
  defaultTitle: 'Apex Podcast Co. A producer in the room. A network around your show.',
  defaultDescription:
    'Apex Podcast Co is a producer and a network. We tune a show to its host, produce live in every session, and publish into a feed where every Apex show carries the others.',

  // Primary CTA target across the site. TODO: swap to GHL discovery calendar URL
  // (master sub-account QRzW1cp8gNa31VJDILvJ). Placeholder per Phase 3 strategy.
  discoveryUrl: 'https://apexpodcast.co/discovery-call',

  // Partner program. TODO: swap to GHL affiliate signup / portal URLs.
  partnerEnrollUrl: 'https://apexpodcast.co/partner-portal',

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

  // "The Apex Podcast" listen targets. TODO: swap to real show URLs (Spotify,
  // Apple Podcasts, Transistor all-platforms page). Placeholders per Phase 3 strategy.
  listen: {
    spotify: 'https://apexpodcast.co/listen', // TODO: real Spotify show URL
    apple: 'https://apexpodcast.co/listen', // TODO: real Apple Podcasts URL
    anywhere: 'https://apexpodcast.co/listen', // TODO: real all-platforms / RSS page
  },
} as const

/**
 * Routes that actually exist in the current build. Next.js prefetches in-viewport
 * links by default; prefetching a route that is not built yet returns a 404 and
 * shows up as a console error. SmartLink consults this set and only prefetches
 * live routes. As each phase lands, add its routes here (one place to maintain).
 */
export const liveRoutes: ReadonlySet<string> = new Set([
  '/',
  '/about/',
  // Phase 2
  '/work/',
  '/work/austin-cheviron/',
  '/work/randy-highsmith/',
  '/work/russ-laggan/',
  '/services/',
  '/services/launch/',
  '/services/managed/',
  // Phase 3
  '/network/',
  '/partners/',
  '/contact/',
  '/legal/privacy/',
  '/legal/terms/',
  // Phase 3.5 host press-kit pages
  '/russ-laggan/',
  '/austin-cheviron/',
  '/randy-highsmith/',
])

export function isLiveRoute(href: string): boolean {
  return liveRoutes.has(href)
}

/** Primary navigation, left to right, per SITE-ARCHITECTURE §3. */
export const primaryNav: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: 'Work', href: '/work/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Launch', href: '/services/launch/' },
      { label: 'Managed', href: '/services/managed/' },
    ],
  },
  { label: 'Network', href: '/network/' },
  { label: 'About', href: '/about/' },
  { label: 'Partners', href: '/partners/' },
]

/** Footer link columns, per SITE-ARCHITECTURE §4 / COPY-SPEC §0. */
export const footerSiteLinks = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'Network', href: '/network/' },
  { label: 'About', href: '/about/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'Contact', href: '/contact/' },
]
