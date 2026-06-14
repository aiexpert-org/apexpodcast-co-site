import { siteConfig } from '@/lib/site-config'

/**
 * schema.org @graph for Apex Podcast Co.
 *
 * FACELESS RULE (locked 2026-05-18/19): no founder names, no personal identity
 * linkage. The graph carries the company and the website only. No Person nodes,
 * no founder array, no external identity (Wikidata) cross-links. Apex is a
 * company; its credentials travel as company experience, never as a résumé line.
 */

const base = siteConfig.url
const ORG = `${base}/#organization`
const WEBSITE = `${base}/#website`

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
    ],
  }
}
