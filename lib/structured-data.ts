import { siteConfig } from '@/lib/site-config'
import { NETWORK_SHOWS } from '@/lib/shows'

/**
 * schema.org @graph for Apex Podcast Co.
 *
 * 2026-06-26 PREP framework lock: PREP layers underneath Your Weekly Show as
 * the explanatory architecture (Prepare, Record + Edit + Publish, Promote).
 * "Your First Episode" renamed to "The Prepisode". Apex Podcast Network added
 * as a productized standalone Promote-only SKU. SKU map below carries the four
 * locked offers as Service nodes:
 *   - The Prepisode: $997 one-time (HOLD through 2026-09-30)
 *   - Your Weekly Show: $2,997 per 28-day cycle (HOLD through 2026-09-30)
 *   - Apex Podcast Network: $997 per 28-day cycle (standalone Promote)
 *   - Multi-Tenant Pipeline License: $2,997/mo or $29,970/yr
 *
 * 2026-06-26 faceless reversal: Brett K Moore and Randy Highsmith are public
 * as the company's co-founders and producers on the /producers/ page. The
 * graph carries Person nodes for both founders, plus PodcastSeries entries
 * for each live Network show.
 */

const base = siteConfig.url
const ORG = `${base}/#organization`
const WEBSITE = `${base}/#website`
const BRETT = `${base}/producers/#brett-k-moore`
const RANDY = `${base}/producers/#randy-highsmith`
const SVC_PREPISODE = `${base}/the-prepisode/#service`
const SVC_WEEKLY = `${base}/your-weekly-show/#service`
const SVC_NETWORK = `${base}/apex-podcast-network/#service`
const SVC_LICENSE = `${base}/multi-tenant-pipeline-license/#service`

export function buildGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG,
        name: 'Apex Podcast Co',
        url: `${base}/`,
        description: siteConfig.defaultDescription,
        logo: `${base}/opengraph-image`,
        image: `${base}/opengraph-image`,
        foundingDate: '2026',
        founder: [{ '@id': BRETT }, { '@id': RANDY }],
        sameAs: [siteConfig.podcastNetworkUrl, siteConfig.pentatypeUrl],
        knowsAbout: [
          'Podcast production',
          'Podcast networks',
          'Audio production',
          'Communication methodology',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: siteConfig.email.brett,
            url: `${base}/contact/`,
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'press',
            email: siteConfig.email.press,
            url: `${base}/contact/`,
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE,
        name: 'Apex Podcast Co',
        url: `${base}/`,
        inLanguage: 'en',
        publisher: { '@id': ORG },
        about: { '@id': ORG },
      },
      {
        '@type': 'Person',
        '@id': BRETT,
        name: 'Brett K Moore',
        jobTitle: 'Co-founder. Architect of the Pentatype.',
        worksFor: { '@id': ORG },
        url: `${base}/producers/#brett-k-moore`,
      },
      {
        '@type': 'Person',
        '@id': RANDY,
        name: 'Randy Highsmith',
        jobTitle:
          'Co-founder. Former Director of Podcast Production at eXp Realty.',
        worksFor: { '@id': ORG },
        url: `${base}/producers/#randy-highsmith`,
      },
      {
        '@type': 'Service',
        '@id': SVC_PREPISODE,
        name: 'The Prepisode',
        url: `${base}/the-prepisode/`,
        serviceType: 'Podcast production',
        provider: { '@id': ORG },
        areaServed: 'Worldwide',
        description:
          'One produced episode that runs through the full PREP system (Prepare, Record + Edit + Publish, Promote) with the Pentatype assessment, a 90-minute strategy session, branded cover art, distribution under the Apex Podcast Network feed, and twelve months of network membership. The honest entry point.',
        offers: {
          '@type': 'Offer',
          price: '997',
          priceCurrency: 'USD',
          category: 'one-time',
          url: `${base}/the-prepisode/`,
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        '@id': SVC_WEEKLY,
        name: 'Your Weekly Show',
        url: `${base}/your-weekly-show/`,
        serviceType: 'Podcast production',
        provider: { '@id': ORG },
        areaServed: 'Worldwide',
        description:
          'The full PREP system (Prepare, Record + Edit + Publish, Promote) run every cycle. A producer in the room every session, full distribution under the Apex Podcast Network feed, a per-episode producer debrief, and the block-analysis audit every eight episodes. One to four episodes per 28-day cycle, same price.',
        offers: {
          '@type': 'Offer',
          price: '2997',
          priceCurrency: 'USD',
          category: '28-day cycle',
          url: `${base}/your-weekly-show/`,
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        '@id': SVC_NETWORK,
        name: 'Apex Podcast Network',
        url: `${base}/apex-podcast-network/`,
        serviceType: 'Podcast promotion and network distribution',
        provider: { '@id': ORG },
        areaServed: 'Worldwide',
        description:
          'The Promote phase of the PREP system as a standalone offer for podcast owners who already handle their own production. Socials repurposing from your published episode, bidirectional guest booking, and a place inside the Apex Podcast Network feed.',
        offers: {
          '@type': 'Offer',
          price: '997',
          priceCurrency: 'USD',
          category: '28-day cycle',
          url: `${base}/apex-podcast-network/`,
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        '@id': SVC_LICENSE,
        name: 'Multi-Tenant Pipeline License',
        url: `${base}/multi-tenant-pipeline-license/`,
        serviceType: 'Podcast production pipeline license',
        provider: { '@id': ORG },
        areaServed: 'Worldwide',
        description:
          'A licensed Apex production and distribution pipeline, run inside your own brand and on your own roster. The real-estate and eXp ICP is excluded, and an NDA is required before terms.',
        offers: [
          {
            '@type': 'Offer',
            price: '2997',
            priceCurrency: 'USD',
            category: 'monthly',
            url: `${base}/multi-tenant-pipeline-license/`,
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            price: '29970',
            priceCurrency: 'USD',
            category: 'annual',
            url: `${base}/multi-tenant-pipeline-license/`,
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      ...NETWORK_SHOWS.filter((s) => s.status === 'live').map((show) => ({
        '@type': 'PodcastSeries',
        '@id': `${base}/network/#${show.slug}`,
        name: show.title,
        description: show.excerpt,
        url: show.listenUrl ?? `${base}/network/`,
        publisher: { '@id': ORG },
      })),
    ],
  }
}
