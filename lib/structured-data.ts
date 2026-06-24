import { siteConfig } from '@/lib/site-config'

/**
 * schema.org @graph for Apex Podcast Co.
 *
 * FACELESS RULE (locked 2026-05-18/19): no founder names, no personal identity
 * linkage. The graph carries the company, the website, and the three locked
 * services. No Person nodes, no founder array, no external identity
 * (Wikidata) cross-links. Apex is a company; its credentials travel as
 * company experience, never as a résumé line.
 *
 * Pricing nodes (2026-06-13 FULL LAUNCH lock, refined 2026-06-14):
 *   - Your First Episode: $997 one-time (HOLD through 2026-09-30)
 *   - Your Weekly Show: $2,997 per 28-day cycle (HOLD through 2026-09-30)
 *   - Multi-Tenant Pipeline License: $2,997/mo or $29,970/yr
 */

const base = siteConfig.url
const ORG = `${base}/#organization`
const WEBSITE = `${base}/#website`
const SVC_FIRST = `${base}/your-first-episode/#service`
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
        description:
          'A boutique podcast production company. A producer in the room every session, the Apex Podcast Network around every release, and the Pentatype methodology tuning each show to its host.',
        logo: `${base}/opengraph-image`,
        image: `${base}/opengraph-image`,
        slogan: 'A producer in the room. A network around your show.',
        foundingDate: '2026',
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
        sameAs: [siteConfig.podcastNetworkUrl],
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
        '@type': 'Service',
        '@id': SVC_FIRST,
        name: 'Your First Episode',
        url: `${base}/your-first-episode/`,
        serviceType: 'Podcast production',
        provider: { '@id': ORG },
        areaServed: 'Worldwide',
        description:
          'One produced episode with the Pentatype assessment, a 90-minute strategy session, branded cover art, distribution under the Apex Podcast Network feed, and twelve months of network membership. The honest entry point.',
        offers: {
          '@type': 'Offer',
          price: '997',
          priceCurrency: 'USD',
          category: 'one-time',
          url: `${base}/your-first-episode/`,
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
          'A show produced cycle by cycle, with a producer in the room every session, full distribution under the Apex Podcast Network feed, a per-episode producer debrief, and the block-analysis audit every eight episodes. One to four episodes per 28-day cycle, same price.',
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
    ],
  }
}
