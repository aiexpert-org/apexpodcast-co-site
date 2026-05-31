# Apex Site — Phase 3.5 Verification

_Run 2026-05-31 against the build. Local only; no deploy. Phase 3.5 = surface-level additions on top of Phases 1–3, not the premium polish layer (that is Phase 4, still on hold)._
_Lighthouse 13, mobile (simulated slow-4G + 4x CPU), production build (`next build` + `next start`, port 3013)._

## What shipped

1. **Voice fix.** "A real network. Not a roster." reworded to **"The roster is the network."** in both places it lived (home network bar `components/sections/network-proof-bar.tsx`, and the `/network/` hero). No "Not a roster" string remains in the repo.
2. **Contact form.** Real lead-capture form on `/contact/` (name, email, phone optional, "I'm interested in" dropdown with the five options, message textarea, submit). Local-only: validates (zod), queues to `localStorage` (`apex_leads`), shows success with mailto fallback. Verified end to end (submit → success state → lead object in localStorage). GHL field mapping documented in `PHASE3-PLACEHOLDERS.md` §8. Case-study section stays on; both Brett + Randy direct lines stay visible.
3. **Host press-kit pages.** `/russ-laggan/`, `/austin-cheviron/`, `/randy-highsmith/`. Structure: hero (photo placeholder + name + show + tagline), about the host, about the show (cadence/audience + case-study cross-link), notable guests, why be a guest (3 reasons), apply-to-be-a-guest form (tagged `Guest Applicant — {host}`), recent episodes (placeholder, Transistor feed deferred), subscribe links. Scaffold content uses explicit pending markers; real content fills from the dossiers (`PHASE3-PLACEHOLDERS.md` §10).
4. **Quiz architecture doc.** `QUIZ-ARCHITECTURE.md` (planning; build deferred to Phase 5). Flags the Pentatype.com ownership conflict.

## Lighthouse (mobile lab)

| Page | Perf | A11y | Best Practices | SEO | LCP | CLS | Console |
|------|------|------|----------------|-----|-----|-----|---------|
| `/contact/` | 92 | 100 | 100 | 100 | 3.4s | 0 | clean |
| `/russ-laggan/` | 94 | 100 | 100 | 100 | 3.1s | 0 | clean |
| `/austin-cheviron/` | 94 | 100 | 100 | 100 | 3.1s | 0 | clean |
| `/randy-highsmith/` | 94 | 100 | 100 | 100 | 3.1s | 0 | clean |

Perf > 90, A11y / Best Practices / SEO 100 on every new route, CLS 0, zero console errors. (Host pages first scored A11y 96 on the `/45`-opacity pending-marker text; bumped to AA-safe `/65` and `/55`, re-verified 100.) LCP is the same Archivo Black display-font swap that every page carries — Phase 4 tuning item.

## Gate results

- **Voice.** `rg` across all Phase 3.5 files for em dashes, en-dash punctuation, banned vocabulary, emoji: zero hits. The X-not-Y headline is gone.
- **Render / mobile.** Full-page captures at desktop 1280 + mobile 360 for contact, network (reworded), and all three host pages. No overflow; sections alternate dark/bone full-bleed.
- **Forms.** Contact form submit verified (localStorage queue + success). Both forms keep associated labels and AA-contrast fields; the global acid focus-visible ring applies. No `focus:outline-none` without replacement.
- **A11y structure.** One `h1` per host page; section labels `h2`, the why-guest and episode items `h3`/list. Pending markers are real text (not images), AA-contrast.
- **Links.** New host routes added to `liveRoutes` and the sitemap (now 18 URLs). Subscribe links and the Transistor CTA use the documented `transistorUrl` placeholder. Case-study cross-links resolve.
- **Build/lint.** `pnpm build` + `pnpm lint` clean. 20 routes generated.

## Screenshots

`site/build/screenshots/` (10 new, 28 total): `phase3.5-contact-{desktop-1280,mobile-360}.png`, `phase3.5-network-*`, `phase3.5-russ-laggan-*`, `phase3.5-austin-cheviron-*`, `phase3.5-randy-highsmith-*`.

## Open items for Brett

- **Pentatype ownership conflict** (quiz doc): brief says Russ owns Pentatype.com; live site copy says "Brett's IP." Resolve before the quiz, and decide whether the existing Services/case-study copy needs correcting.
- Dossiers fill the host-page bios/premises/guests/photos (`02-Network/<Person>/PUBLIC-DOSSIER-2026-05-30.md`).
- Phase 4 (premium polish + sub-2.0 LCP) still on hold pending Brett's walk of Phases 1–3.
