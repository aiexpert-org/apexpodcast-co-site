import { siteConfig } from '@/lib/site-config'
import { NETWORK_SHOWS } from '@/lib/shows'

/**
 * schema.org @graph for Apex Podcast Co.
 *
 * 2026-06-29 PREPP scope correction: Apex owns the first four phases of the
 * PREPP methodology (Prepare, Record, Edit, Publish). The fifth phase (Promote)
 * is delivered by partner PodcastNetwork.org. The "Apex Podcast Network" SKU
 * was retired in this pass because the name now overlaps with the partner brand.
 * SKU map carries the remaining locked offers as Service nodes:
 *   - The Prepisode: $997 one-time
 *   - Your Weekly Show: $2,997 per 28-day cycle
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
          'One produced episode that runs through the first four phases of the PREPP methodology (Prepare, Record, Edit, Publish) with the Pentatype Communication Assessment, a 90-minute strategy session, branded cover art, and distribution inside the Apex catalog. The honest entry point. Promote is delivered by PodcastNetwork.org as a separate engagement.',
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
          'The first four phases of the PREPP methodology (Prepare, Record, Edit, Publish) run every cycle. A producer in the room every session, full distribution inside the Apex catalog, a per-episode producer debrief, and the block-analysis audit every eight episodes. One to four episodes per 28-day cycle, same price. Promote sits with our partner PodcastNetwork.org.',
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
