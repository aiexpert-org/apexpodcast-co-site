import { siteConfig } from '@/lib/site-config'
import { NETWORK_SHOWS } from '@/lib/shows'

/**
 * schema.org @graph for Apex Podcast Co.
 *
 * 2026-06-18 rebuild: the v3 faceless lock is superseded. Brett K Moore and
 * Randy Highsmith are public as the company's co-founders and producers on
 * the new /producers/ page. The graph carries the Organization + WebSite +
 * Person nodes for both founders, plus PodcastSeries entries for each live
 * Network show. Coming-soon productions are not listed under PodcastSeries
 * because the feed does not exist yet.
 */

const base = siteConfig.url
const ORG = `${base}/#organization`
const WEBSITE = `${base}/#website`
const BRETT = `${base}/producers/#brett-k-moore`
const RANDY = `${base}/producers/#randy-highsmith`

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
            email: siteConfig.email.brett,
            contactType: 'customer support',
            availableLanguage: 'English',
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
