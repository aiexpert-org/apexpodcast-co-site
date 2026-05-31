# Apex Site — Phase 2 Verification (case studies + services)

_Run 2026-05-30 against the Phase 2 build. Local only; no deploy. Same gates as Phase 1._
_Lighthouse 13, mobile (simulated slow-4G + 4x CPU), against a production build (`next build` + `next start`, port 3013)._

## Pages shipped

- `/work/` index (intro, three large cards, network roll-up strip, closing CTA)
- `/work/austin-cheviron/`, `/work/randy-highsmith/`, `/work/russ-laggan/` (shared SSG detail template)
- `/services/` overview (hero, 14-row two-tier comparison, credit window, founding-cohort note, exclusion line, closing CTA)
- `/services/launch/` (hero, includes, timeline, exclusions, upgrade path, FAQ, closing CTA)
- `/services/managed/` (hero, album frame, includes, capacity, founding cohort, 90/10 split, audit, exclusions, FAQ, closing CTA)

## Lighthouse (mobile lab)

| Page | Perf | A11y | Best Practices | SEO | LCP | CLS | TBT | Console |
|------|------|------|----------------|-----|-----|-----|-----|---------|
| `/work/` | 95 | 100 | 100 | 100 | 2.9s | 0 | 0ms | clean |
| `/work/randy-highsmith/` | 95 | 100 | 100 | 100 | 2.9s | 0 | 0ms | clean |
| `/services/` | 95 | 100 | 100 | 100 | 2.9s | 0 | 0ms | clean |
| `/services/managed/` | 95 | 100 | 100 | 100 | 3.0s | 0 | 0ms | clean |

LCP note is unchanged from Phase 1: Archivo Black display-font swap under throttled-mobile lab; Phase-4 perf item, Perf score already at target.

## Gate results

- **Acceptance (IMPLEMENTATION-PLAN Phase 2).** All three case-study URLs render with real content and signed quotes only (no quote shown until sign-off). `/work/` shows the three cards and a network roll-up strip with real Transistor-verified numbers (11 shows / 114 episodes / 14+ months, measurement/stat-ribbon-copy.md). `/services/` shows the full two-tier comparison. `/services/launch/` and `/services/managed/` are live with working FAQ accordions. The Managed founding-cohort counter shows an explicit placeholder visible for Brett + Randy sign-off (GHL wiring is Phase 3).
- **B/C. Render + mobile.** No horizontal overflow at 320 / 768 / 1280. The comparison table is a 3-column grid on desktop and stacks (label, Launch, Managed, each labeled) at 320; verified geometrically. 320px hero verified.
- **E. Links.** External links open in a new tab with rel=noopener. Internal links to not-yet-built routes (`/network/`, `/partners/`, `/contact/`) are prefetch-suppressed via SmartLink; new Phase 2 routes added to `liveRoutes`. Zero prefetch console 404s.
- **F. Schema.** The site-wide JSON-LD @graph is unchanged and still resolves. Per-page case-study schema (PodcastEpisode/CreativeWork) is deferred until real episode data lands.
- **H. Voice.** `rg` across the new files for em dashes, en-dash punctuation, banned vocabulary, and emoji: zero hits. (A decorative em-dash glyph initially used as a list marker was removed.)
- **L. Accessibility.** A11y 100 on all sampled pages. One `h1` per page; heading order sequential (case-study section labels are `h2`; `/work/` cards use `h2` as page-level sections, Home cards stay `h3` under the featured-work `h2`). FAQ accordion is Headless UI Disclosure (keyboard + ARIA handled; verified aria-expanded toggles and the panel reveals). Contrast AA: the card show line bumped from ink/55 to ink/65.
- **M. Build/lint.** `pnpm build` and `pnpm lint` clean.

## Deliberate deviation from the plan

- **Case-study content is typed data (`lib/case-studies.ts`), not MDX.** The plan suggested `next-mdx-remote-client`. Given the content is structured (catalog, host, premise, optional sign-off-gated quote, optional audit state) and currently sparse, a typed module with conditional rendering is cleaner, avoids a fragile MDX-in-Next-16 dependency, and makes the sign-off gating explicit. Logged here per the playbook (surface friction, do not silently work around).

## Carried / new placeholders

- See `PHASE2-CONTENT-NEEDED.md` for the per-client content unlock list (show names, producer assignment, Pentatype results, episode embeds, signed quotes).
- Discovery CTA still routes to `/contact/` (blocker 1.5, GHL calendar URL). `/network/`, `/partners/`, `/contact/`, `/legal/*` are Phase 3.
