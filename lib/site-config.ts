/**
 * Apex Podcast Co site configuration.
 *
 * Single source for navigation, footer, metadata, and CTA targets. Copy strings
 * live here or in COPY-SPEC-sourced section components, never hardcoded inline
 * beyond non-user-facing labels.
 *
 * PLACEHOLDER URLS (see PHASE3-PLACEHOLDERS.md). These are documented stand-ins
 * that the Phase 5 GHL sweep + Transistor approval pass swap for real endpoints.
 * Each is flagged with a dated TODO(2026-06-26) comment naming the owner task
 * that resolves it.
 */

export const siteConfig = {
  name: 'Apex Podcast Co',
  url: 'https://apexpodcast.co',
  defaultTitle: 'Apex Podcast Co. A producer in the room. A network around your show.',
  defaultDescription:
    'Apex Podcast Co is a producer and a network. We tune a show to its host, produce live in every session, and publish into a feed where every Apex show carries the others.',

  // Primary CTA target across the site. Resolves to the on-site /discovery-call/
  // landing page (which holds the GCal appointment-schedule embed slot). Once
  // Brett wires the live Google Calendar scheduler URL through the GHL product
  // load, this can swap to a direct https://calendar.app.google/... link and
  // the on-site page becomes redundant. Until then the page is the booking surface.
  // TODO(2026-06-26): swap to live GCal scheduler URL per CTO/CIO GHL setup task
  // local_911dafd7 (runbook: operations/ghl-product-load-2026-06-13.md).
  discoveryUrl: '/discovery-call/',

  // Partner program. TODO(2026-06-26): swap to GHL affiliate signup / portal URL
  // per CTO/CIO GHL setup task local_911dafd7.
  partnerEnrollUrl: 'https://apexpodcast.co/partner-portal',

  // Affiliate program. 20% on the two recurring SKUs (Your Weekly Show, Multi-Tenant
  // Pipeline License), 60-day cookie window. $997 Your First Episode carries no
  // affiliate commission (Brett's 2026-06-26 lock; gateway-product margin protection).
  // TODO(2026-06-26): swap to live GHL Affiliate Manager signup URL per CTO/CIO GHL
  // setup task local_911dafd7 (campaigns affil_apex_weeklyshow / _mtl).
  affiliateSignupUrl: 'https://apexpodcast.co/affiliate',

  // GHL checkout links (Stripe lives inside GHL Payments). These are documented
  // placeholders. Real GHL checkout URLs are generated when Brett executes the
  // 2026-06-13 product-load runbook; once live, append ?am_id=<affiliateId> for
  // affiliate attribution.
  // TODO(2026-06-26): swap to real GHL checkout URLs per CTO/CIO GHL setup task
  // local_911dafd7 (runbook: operations/ghl-product-load-2026-06-13.md). License
  // checkout is tokenized per licensee after NDA signature.
  checkout: {
    firstEpisode: 'https://apexpodcast.co/checkout/your-first-episode',
    weeklyShow: 'https://apexpodcast.co/checkout/your-weekly-show',
    license: 'https://apexpodcast.co/checkout/multi-tenant-pipeline-license',
  },

  email: {
    brett: 'brett@apexpodcast.co',
    randy: 'randy@apexpodcast.co',
    partners: 'partners@apexpodcast.co',
    press: 'press@apexpodcast.co',
  },

  // External properties. The Apex Podcast show exists at
  // dashboard.transistor.fm/shows/the-apex-podcast (Transistor admin).
  // TODO(2026-06-26): swap to the real Transistor Apex Podcast Network feed URL
  // per the Transistor setup task once the public feed slug is confirmed.
  transistorUrl: 'https://apexpodcast.co/listen',
  pentatypeUrl: 'https://pentatype.com',
  podcastNetworkUrl: 'https://podcastnetwork.org',

  // "The Apex Podcast" listen targets. Placeholders route to the on-site /listen
  // page (which carries the contact-form fallback so no CTA 404s). Spotify and
  // Apple Podcasts approval is in flight pending the show feed rename.
  // TODO(2026-06-26): swap to real per-platform show URLs per the Transistor
  // setup task (Spotify show URL, Apple Podcasts URL, Transistor all-platforms page).
  listen: {
    spotify: 'https://apexpodcast.co/listen',
    apple: 'https://apexpodcast.co/listen',
    anywhere: 'https://apexpodcast.co/listen',
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
  '/work/russ-laggan/',
  '/services/',
  '/your-first-episode/',
  '/your-weekly-show/',
  '/multi-tenant-pipeline-license/',
  // Phase 3
  '/network/',
  '/partners/',
  '/affiliate/',
  '/contact/',
  '/discovery-call/',
  '/listen/',
  '/legal/privacy/',
  '/legal/terms/',
  // Phase 3.5 host press-kit pages (cleared named clients only)
  '/russ-laggan/',
  '/austin-cheviron/',
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
      { label: 'Your First Episode', href: '/your-first-episode/' },
      { label: 'Your Weekly Show', href: '/your-weekly-show/' },
      { label: 'Multi-Tenant Pipeline License', href: '/multi-tenant-pipeline-license/' },
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
  { label: 'Affiliates', href: '/affiliate/' },
  { label: 'Contact', href: '/contact/' },
]
