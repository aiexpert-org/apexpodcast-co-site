import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

/** Every live public route ships in the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${siteConfig.url}/`, lastModified: now, priority: 1 },
    // Primary nav
    { url: `${siteConfig.url}/how-we-work/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/network/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/producers/`, lastModified: now, priority: 0.9 },
    // Locked offers (PREP framework lock 2026-06-26)
    { url: `${siteConfig.url}/services/`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/the-prepisode/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/your-weekly-show/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/apex-podcast-network/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/multi-tenant-pipeline-license/`, lastModified: now, priority: 0.8 },
    // Work / case studies
    { url: `${siteConfig.url}/work/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/work/austin-cheviron/`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/work/russ-laggan/`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/case-studies/`, lastModified: now, priority: 0.7 },
    // Other surfaces
    { url: `${siteConfig.url}/about/`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/contact/`, lastModified: now, priority: 0.6 },
    { url: `${siteConfig.url}/discovery-call/`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/listen/`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/partners/`, lastModified: now, priority: 0.6 },
    { url: `${siteConfig.url}/affiliate/`, lastModified: now, priority: 0.6 },
    { url: `${siteConfig.url}/resources/`, lastModified: now, priority: 0.5 },
    { url: `${siteConfig.url}/subscription/`, lastModified: now, priority: 0.5 },
    // Host press-kit pages (named producers, faceless rule reversed)
    { url: `${siteConfig.url}/austin-cheviron/`, lastModified: now, priority: 0.5 },
    { url: `${siteConfig.url}/russ-laggan/`, lastModified: now, priority: 0.5 },
    // Legal
    { url: `${siteConfig.url}/legal/privacy/`, lastModified: now, priority: 0.3 },
    { url: `${siteConfig.url}/legal/terms/`, lastModified: now, priority: 0.3 },
  ]
}
