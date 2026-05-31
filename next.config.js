/** @type {import('next').NextConfig} */
const nextConfig = {
  // SITE-ARCHITECTURE §1 specifies trailing-slash URLs (/work/, /about/, ...).
  // Make them canonical so internal links and the sitemap resolve without a 308.
  trailingSlash: true,
  // MDX content pipeline (case studies, legal pages) is wired in Phase 2 with a
  // Next 16-compatible @next/mdx. Kept out of the config until then.
}

module.exports = nextConfig
