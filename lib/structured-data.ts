import { siteConfig } from '@/lib/site-config'

/**
 * Cross-linked schema.org @graph for Apex Podcast Co.
 *
 * Organization (Apex) + Person (Brett) + Person (Randy) + WebSite, all wired via
 * `@id`. Brett's node carries his Wikidata QID (Q139970634) first in `sameAs` so
 * the entity consolidates with his canonical node on brettkmoore.com. Randy has
 * no QID yet. Per DECISIONS-LIBRARY: `jobTitle` is string[], `worksFor` is
 * Organization[] (here expressed via @id reference to the Organization node).
 */

const base = siteConfig.url
const ORG = `${base}/#organization`
const BRETT = `${base}/#brett`
const RANDY = `${base}/#randy`
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
          'A producer-and-network business. A producer in the room every session, the Apex Podcast Network around every release, and the Pentatype methodology tuning each show to its host.',
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
        founder: [{ '@id': BRETT }, { '@id': RANDY }],
        sameAs: [siteConfig.podcastNetworkUrl],
      },
      {
        '@type': 'Person',
        '@id': BRETT,
        name: 'Brett K. Moore',
        alternateName: ['Brett Moore', 'Brett K Moore'],
        jobTitle: ['Producer', 'Author', 'Business Coach'],
        worksFor: [{ '@id': ORG }],
        url: 'https://www.brettkmoore.com/',
        sameAs: [
          'https://www.wikidata.org/wiki/Q139970634',
          'https://www.brettkmoore.com/',
          siteConfig.pentatypeUrl,
        ],
      },
      {
        '@type': 'Person',
        '@id': RANDY,
        name: 'Randy Highsmith',
        jobTitle: ['Producer'],
        worksFor: [{ '@id': ORG }],
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
