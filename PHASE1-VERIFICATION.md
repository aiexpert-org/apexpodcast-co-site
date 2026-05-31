# Apex Site — Phase 1 Verification (CHECKLIST-PRE-DEPLOY A–M)

_Run 2026-05-30 against the Phase 1 build (Home + About). Local only; no deploy._
_Lab numbers from Lighthouse 13 mobile (simulated slow-4G + 4x CPU throttle) against a production build (`next build` + `next start`, port 3013)._

Scope note: the pre-deploy checklist is written for the personalbrand-template (multi-tenant, Sanity, Wikidata-per-tenant) and for a full-site deploy. Items that are tenant-chassis-specific or depend on later-phase pages are marked **N/A** or **Deferred (phase)** with a reason, per the checklist's own "deliberately skip with a note" rule.

## Lighthouse (mobile, lab)

| Page | Perf | A11y | Best Practices | SEO | LCP | FCP | CLS | TBT | SI | Console errors |
|------|------|------|----------------|-----|-----|-----|-----|-----|----|----------------|
| `/` | 95 | 100 | 100 | 100 | 2.9s | 0.8s | 0 | 10ms | 0.8s | none |
| `/about/` | 95 | 100 | 100 | 100 | 2.9s | 0.8s | 0 | 0ms | 0.8s | none |

Phase 1 acceptance target (IMPLEMENTATION-PLAN) is Performance 85+, others 95+ — exceeded. LCP 2.9s is above the 2.0s floor: it is dominated by the Archivo Black display-font swap repaint under heavy mobile throttling (FCP is 0.8s, CLS 0). Per IMPLEMENTATION-PLAN, sub-2.0 LCP and field-data validation are Phase 4 / pre-deploy gates; the Phase 4 hero moment will be built LCP-safe and font preload tuned. Real-network field data (Vercel Speed Insights) is the binding gate and lands post-deploy.

## A. Identity / config
- Apex is a single site, not a multi-tenant chassis. Tenant-config / persona-variant / COHORT-ROSTER items are **N/A**. Equivalent config lives in `lib/site-config.ts` (name, url, nav, footer, CTA target, emails). Metadata title template + description set in `app/layout.tsx`.

## B. Above-fold render (320/360/640/768/1024/1280/1536)
- **Pass.** No horizontal overflow at any width on `/` or `/about/` (measured `scrollWidth === innerWidth`). Headline wraps cleanly at 320px, no orphan clipping. Primary CTA visible above the fold at every width. Wordmark top-left, discovery CTA top-right; no theme toggle in header. No black side gutters (full-bleed ink/bone sections). 320px screenshot captured.

## C. Mobile viewport sanity
- **Pass.** No horizontal scroll at 320 or 360. Primary CTA and hamburger/close controls are 44px hit targets (`h-11 w-11` / `btn` padding). Lenis `syncTouch: false` (touch stays native). Mobile menu overlay verified (full-screen, nav + Launch/Managed sub-items, pinned discovery CTA).

## D. Reduced motion
- **Pass (code-verified).** `SmoothScroll` returns early (no Lenis) under `prefers-reduced-motion`. `Reveal`/`RevealStagger`/`RevealItem` use `useReducedMotion` and render plain (no transform/opacity animation). Hero is static (no entrance animation). Only `transform`/`opacity` are ever animated. Recommend an OS-toggle spot check before deploy.

## E. Links
- External footer links (Transistor, PodcastNetwork.org) open in a new tab with `rel="noopener noreferrer"`. Internal links to later-phase routes (`/work/`, `/services/*`, `/network/`, `/partners/`, `/contact/`, `/legal/*`) **intentionally 404 until those phases build them** — expected in a phased build. `SmartLink` disables prefetch for not-yet-live routes (see `lib/site-config.ts` `liveRoutes`), so there are zero RSC-prefetch console 404s. Booking link routes to `/contact/` pending the GHL calendar URL (blocker 1.5).

## F. JSON-LD / schema
- **Pass (structure).** Cross-linked `@graph`: Organization (Apex) + Person (Brett) + Person (Randy) + WebSite, all wired by `@id` (no unresolved refs). `jobTitle` is `string[]`, `worksFor` is an Organization `@id` ref. Brett's Wikidata QID `Q139970634` is first in `sameAs`. Full validator.schema.org pass is a pre-deploy gate (Phase 2/3); recommend wiring an Apex `schema:validate` script then.

## G. OG / favicon / branding
- **Pass.** Default OG image (1200x630, `apex.` wordmark + tagline + register line) generated with real Archivo Black via `ImageResponse` (`app/opengraph-image.tsx`). Favicon set per BRAND-GUIDE §6: `a.` monogram at 32 + 192 (`app/icon.tsx`), Apple touch 180 (`app/apple-icon.tsx`), and a real `app/favicon.ico` (32px, no auto-probe 404). Wordmark consistent in header, footer, OG. Per-page OG images are Phase 2.

## H. Voice
- **Pass.** `rg` across `app/`, `components/`, `lib/` for em dashes and the banned vocabulary (essentially, leverage, robust, seamless, empower, elevate, unlock, supercharge, tapestry, multifaceted, delve) returns zero hits in copy. No "X, not Y" patterns. No emoji.

## I. Performance
- Perf 95 both pages, CLS 0, TBT ≤10ms, FCP 0.8s, SI 0.8s. LCP 2.9s (see note above — Phase 4). First-load JS budget and field data confirmed in Phase 4 / post-deploy.

## J. Polish layer
- Phase 1 ships the base: Lenis smooth scroll (`lerp: 0.1`, `smoothWheel: true`, `syncTouch: false`, reduced-motion off), motion `Reveal` on below-fold sections (ease `[0.22,1,0.36,1]`, y 20px, stagger 0.09, `once`). Hero rendered statically for LCP. **Deferred to Phase 4 (by plan):** GSAP hero moment, View Transitions, magnetic CTA, card hover-lift, parallax. `gsap` is version-locked in deps, not yet wired.

## K. Integrations
- **Deferred to Phase 3 (by plan).** Debrief signup form validates (react-hook-form + zod) and logs; GHL endpoint wiring, discovery calendar, analytics events are Phase 3 blockers (1.5, 3.1, 3.7).

## L. Accessibility
- **Pass.** WCAG 2.2 AA contrast: muted labels/body bumped to AA-safe (eyebrows ink/65, footer/dark muted ≥/55); acid-on-bone removed from the pillar index numbers (brand-guide compliant). One `h1` per page; heading order sequential (section eyebrows promoted to `h2` where they head a group; producer cards `h2`). Visible keyboard focus ring (acid, `:focus-visible`) on all interactive elements. No `<img>` without intent (decorative marks are `aria-hidden`). Form labels associated (sr-only). Lighthouse A11y 100 on both pages.

## M. Final sanity
- Build (`pnpm build`) and lint (`pnpm lint`) clean. Source mirrored to Drive `site/build/`. `LIVING-NOTES.md` updated. Deploy/DNS deliberately not done (Phase 1 ships locally first; repo-history decision is blocker 1.2).
