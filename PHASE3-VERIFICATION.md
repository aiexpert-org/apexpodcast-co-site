# Apex Site — Phase 3 Verification (network + partners + contact + legal)

_Run 2026-05-30 against the Phase 3 build. Local only; no deploy. Same gates as Phases 1–2._
_Lighthouse 13, mobile (simulated slow-4G + 4x CPU), against a production build (`next build` + `next start`, port 3013)._

## Pages shipped

- `/network/` (hero, The Debrief + signup, Greenroom Experience, the cohort grid, one-observation-three-deliverables, the 90/10 ad math + partners cross-link, closing CTA)
- `/partners/` (hero with enroll + email CTAs, how it works, two payout cards, where the 10% comes from, Buddy Buck pact, eligibility + enroll, FAQ accordion)
- `/contact/` (hero, discovery calendar placeholder, the split rule, two direct lines, case-study seat, press)
- `/legal/privacy/` and `/legal/terms/` (plain-language placeholder summaries, marked draft pending legal review)

That completes all ten public routes from SITE-ARCHITECTURE §1.

## Lighthouse (mobile lab)

| Page | Perf | A11y | Best Practices | SEO | LCP | CLS | TBT | Console |
|------|------|------|----------------|-----|-----|-----|-----|---------|
| `/network/` | 94 | 100 | 100 | 100 | 3.1s | 0 | 0ms | clean |
| `/partners/` | 94 | 100 | 100 | 100 | 3.1s | 0 | 0ms | clean |
| `/contact/` | 92 | 100 | 100 | 100 | 3.4s | 0 | 0ms | clean |

A11y / Best Practices / SEO 100 across the board, CLS 0, zero console errors. Perf 92–94 (exceeds the Phase-1 target of 85+). LCP 3.1–3.4s is the same Archivo Black display-font swap under throttled-mobile lab that Phases 1–2 carry; it is the Phase-4 perf-tuning item, not a regression.

## Gate results

- **Acceptance (IMPLEMENTATION-PLAN Phase 3).** All ten public URLs render and link cleanly. Discovery booking, partner enrollment, the newsletter form, and analytics run on documented placeholders (Brett is wiring real GHL artifacts; swap list in `PHASE3-PLACEHOLDERS.md`). The two GHL end-to-end test bookings (steps 5–6) and analytics emission (step 7) are gated on those real URLs and happen in the Phase 5 sweep.
- **B/C. Render + mobile.** Full-page captures at desktop 1280 and mobile 360 for all three new pages; no layout breakage. Sections alternate dark/bone full-bleed, no side gutters.
- **E. Links.** Footer links to `/legal/privacy/`, `/legal/terms/`, `/contact/`, `/network/`, `/partners/` now all resolve (previously 404). External/placeholder CTAs (`discovery-call`, `partner-portal`, Transistor, mailto) are real anchors, not prefetched, so no console 404s. New routes added to `liveRoutes` and the sitemap.
- **H. Voice.** `rg` across the Phase 3 files for em dashes, en-dash punctuation, banned vocabulary, emoji: zero hits. **One flag:** the locked COPY-SPEC §7 headline "A real network. Not a roster." is an "X, not Y"-adjacent construction (also already live on the home network bar). Kept for consistency with the locked copy; surfaced for Brett's call.
- **L. Accessibility.** A11y 100 on all three. One `h1` per page; section headings are `h2`, card titles `h3`. FAQ accordion (Partners) is Headless UI Disclosure. Direct-line and email links are real anchors with visible focus rings. Forms keep their sr-only labels.
- **M. Build/lint.** `pnpm build` and `pnpm lint` clean. All 12 routes generated.

## Placeholders

Fully documented in `PHASE3-PLACEHOLDERS.md` with placeholder URL, target GHL/Transistor artifact, and file:line. All route through `lib/site-config.ts` constants (lines 22, 25, 35) plus the form handler and calendar embed, so the Phase 5 swap is close to a one-file edit. Analytics is deferred to Phase 5 (no provider configured yet).

## Not in this phase

Deploy (local only until Brett reviews all three phases). Phase 4 polish (Lenis choreography, Motion/GSAP hero moment, View Transitions, sub-2.0 LCP tune) follows the review.
