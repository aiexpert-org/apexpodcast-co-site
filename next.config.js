/** @type {import('next').NextConfig} */
const nextConfig = {
  // SITE-ARCHITECTURE §1 specifies trailing-slash URLs (/work/, /about/, ...).
  // Make them canonical so internal links and the sitemap resolve without a 308.
  trailingSlash: true,
  // MDX content pipeline (case studies, legal pages) is wired in Phase 2 with a
  // Next 16-compatible @next/mdx. Kept out of the config until then.
  async redirects() {
    return [
      // The two services were renamed to their locked customer-facing names on
      // 2026-06-14. Old links and anything indexed under /services/* keep working.
      { source: '/services/launch', destination: '/your-first-episode', permanent: true },
      { source: '/services/managed', destination: '/your-weekly-show', permanent: true },
    ]
  },
}

module.exports = nextConfig
