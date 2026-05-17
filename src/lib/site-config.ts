/**
 * Per-deployment site configuration for Apex Podcast Co.
 *
 * Single source of truth for:
 *   - metadataBase (resolves absolute URLs for og:image, canonical, etc.)
 *   - openGraph and twitter card metadata
 *   - sitemap.xml generation
 *   - robots.txt generation
 *   - structured data (JSON-LD)
 *
 * Production URL is set via NEXT_PUBLIC_SITE_URL in Vercel.
 */

export const siteConfig = {
  name: "Apex Podcast Co",

  description:
    "Your podcast should pay for itself in pipeline, not just feel good. We build relationship-driven podcasts for leaders at eXp Realty and beyond.",

  tagline: "Your podcast should pay for itself in pipeline, not just feel good.",

  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexpodcast.co").replace(
    /\/$/,
    "",
  ),

  ogImage: "/og-default.png",

  author: "Brett Moore & Randy Highsmith",

  contact: {
    email: "brett@apexpodcast.co",
  },

  founders: [
    { name: "Brett Moore", role: "Head of Business Development" },
    { name: "Randy Highsmith", role: "Head of Production" },
  ],

  links: {
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    skool: "https://www.skool.com/apex-podcast-network-4574",
  },

  // PREPP framework — the spine of every page that mentions methodology.
  prepp: [
    {
      letter: "P",
      name: "Plan",
      tagline: "We map your first 20 guests from your own network.",
    },
    {
      letter: "R",
      name: "Record",
      tagline: "We run the conversation so you can run the room.",
    },
    {
      letter: "E",
      name: "Edit",
      tagline: "We turn one hour into 30 pieces of distribution.",
    },
    {
      letter: "P",
      name: "Publish",
      tagline: "We put your show everywhere it needs to be.",
    },
    {
      letter: "P",
      name: "Promote",
      tagline: "We turn each episode into measurable reach and replies.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
