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
 * Pricing/naming/positioning anchored to /pricing/locked-pricing-2026-05-18.md.
 */

export const siteConfig = {
  name: "Apex Podcast Co",

  description:
    "We produce your podcast end-to-end. PodcastNetwork.org's relationship-engine system is included free for Apex clients. One Episode + Guest Map at $997 one-time, or Your Weekly Show at $2,997 per 28-day cycle.",

  tagline:
    "We produce your podcast end-to-end. The relationship-engine system, included free.",

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
    { name: "Brett Moore", role: "Co-founder" },
    { name: "Randy Highsmith", role: "Co-founder" },
  ],

  // Sister company — relationship-engine system IP owner.
  // Included free for Apex clients; sold separately to non-Apex clients.
  // Brett co-owns both companies; the partnership with Randy on Apex
  // is scoped to the production-service IP only.
  sisterSite: {
    name: "PodcastNetwork.org",
    url: "https://podcastnetwork.org",
  },

  links: {
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    skool: "https://www.skool.com/apex-podcast-network-4574",
  },

  // PREPP framework — the spine of every page that mentions methodology.
  // Apex executes PREPP as production. The relationship-engine *system* on
  // top of PREPP (guest mapping, outreach choreography, network) is
  // PodcastNetwork.org's IP and included free for Apex clients.
  prepp: [
    {
      letter: "P",
      name: "Plan",
      tagline: "Show strategy, guest research briefs, episode planning.",
    },
    {
      letter: "R",
      name: "Record",
      tagline: "Producer-led Riverside session, multi-cam 4K.",
    },
    {
      letter: "E",
      name: "Edit",
      tagline: "AI-leveraged audio + video, 3-tier show notes, custom art.",
    },
    {
      letter: "P",
      name: "Publish",
      tagline: "Transistor hosting + global distribution + YouTube.",
    },
    {
      letter: "P",
      name: "Promote",
      tagline: "10 clips/ep, blog post, LinkedIn drafts, Metricool rollout.",
    },
  ],

  // Public SKUs locked 2026-05-18.
  skus: {
    oneEpisode: {
      name: "One Episode + Guest Map",
      price: 997,
      priceLabel: "$997",
      cadence: "one-time",
      route: "/pilot",
      summary:
        "One episode produced end-to-end through full PREPP + Guest Strategy Session mapping your first 10 ideal guests from your own network. $997 credits toward Your Weekly Show within 60 days.",
      capacity: "5 spots per month at launch",
    },
    weeklyShow: {
      name: "Your Weekly Show",
      price: 2997,
      priceLabel: "$2,997",
      cadence: "per 28-day cycle",
      route: "/flagship",
      summary:
        "Full PREPP stack, weekly. 22 deliverables per cycle. PodcastNetwork.org system access included free. 13 cycles per year via per-client floating billing.",
      annualPrepay: {
        amount: 35964,
        label: "$35,964/yr",
        mechanic: "13 cycles for the price of 12",
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
