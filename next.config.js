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
      // Faceless rule (2026-05-18/19): the founder is not a public case study.
      // Retire the host press-kit + case-study pages; send any inbound link to /work.
      { source: '/randy-highsmith', destination: '/work', permanent: true },
      { source: '/work/randy-highsmith', destination: '/work', permanent: true },
      // 2026-06-18 redesign: old /how-it-works page is replaced by the shorter
      // /how-we-work page. Inbound traffic redirects so indexed links survive.
      { source: '/how-it-works', destination: '/how-we-work', permanent: true },
    ]
  },
}

module.exports = nextConfig
