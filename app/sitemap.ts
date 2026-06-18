import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

/** Every live public route ships in the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${siteConfig.url}/`, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/how-we-work/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/network/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/producers/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/legal/privacy/`, lastModified: now, priority: 0.3 },
    { url: `${siteConfig.url}/legal/terms/`, lastModified: now, priority: 0.3 },
  ]
}
