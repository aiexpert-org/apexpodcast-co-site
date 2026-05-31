import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { caseStudies } from '@/lib/case-studies'
import { hosts } from '@/lib/hosts'

/** Every live public route ships in the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${siteConfig.url}/`, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/work/`, lastModified: now, priority: 0.9 },
    ...caseStudies.map((c) => ({
      url: `${siteConfig.url}/work/${c.slug}/`,
      lastModified: now,
      priority: 0.7,
    })),
    { url: `${siteConfig.url}/services/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/services/launch/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/services/managed/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/network/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/partners/`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/about/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/contact/`, lastModified: now, priority: 0.7 },
    ...hosts.map((h) => ({
      url: `${siteConfig.url}/${h.slug}/`,
      lastModified: now,
      priority: 0.6,
    })),
    { url: `${siteConfig.url}/legal/privacy/`, lastModified: now, priority: 0.3 },
    { url: `${siteConfig.url}/legal/terms/`, lastModified: now, priority: 0.3 },
  ]
}
