# Stash: the services-first home copy (stage for /services later)

Saved 2026-05-31 when the home page was rebuilt podcast-first. Brett wants this
copy preserved and eventually staged onto `/services` (NOT shipped to /services
this pass). Most of it is still live as untouched section components; only the
old hero was overwritten, so its copy is captured verbatim below.

## Old home composition (app/(default)/page.tsx)

```
HomeHero (services-first)   <- overwritten; copy preserved below
ThreePillars                <- still in components/sections/three-pillars.tsx
NetworkProofBar             <- still in components/sections/network-proof-bar.tsx
FeaturedWork                <- still in components/sections/featured-work.tsx
TierTeaser                  <- still in components/sections/tier-teaser.tsx
ProducerFrame               <- still in components/sections/producer-frame.tsx
ClosingCta (discovery)      <- still in components/sections/closing-cta.tsx
```

All six non-hero components are unchanged and reusable. To reassemble this on
`/services` later, compose them there (and use the old hero copy below as a
services hero).

## Old hero copy (verbatim, from the overwritten home-hero.tsx)

- Eyebrow: `Producer. Network. Cycle. Release.`
- Headline: `A producer in the room. A network around your show.`
- Lead: `Apex Podcast Co is a producer and a network. We tune a show to its host with the Pentatype methodology, we produce live during recording, and we publish into a feed where every Apex show carries the others. The work is the show. The network is the multiplier.`
- Primary CTA: `Book a discovery call` -> discovery
- Secondary CTA: `See the work` -> /work/
- Supporting line: `20 minutes. With Brett or Randy. No pitch deck.`
- Visual: the 2x2 acid letter grid (a p / e x)

## Old home metadata (for /services reuse if wanted)

- Title: `A producer in the room. A network around your show`
- Description: `Apex Podcast Co is a producer and a network. A producer in the room every session, the Apex Podcast Network around every release, and the Pentatype methodology tuning each show to its host.`
