# Apex Podcast Co Site: Build Notes

_Phase 1 (scaffold + Home + About), 2026-05-30. Read alongside `../IMPLEMENTATION-PLAN.md` and `PHASE1-VERIFICATION.md`._

## Where the code lives

- **The live working tree is local at `~/Developer/apexpodcast-co-site`.** That is where `pnpm install` / `pnpm dev` / `pnpm build` run, and where git history lives. Node projects do not belong inside Google Drive (Drive tries to sync tens of thousands of `node_modules` files and Turbopack's constant `.next` churn).
- **This folder (Drive `site/build/`) is the canonical source snapshot**, mirrored from the local tree (no `node_modules` / `.next` / `.git`).

For later phases: copy this folder to a local path (or keep using `~/Developer/apexpodcast-co-site`), `pnpm install`, then `pnpm dev`. Mirror source changes back here with `rsync -a --delete --exclude node_modules --exclude .next --exclude .git --exclude screenshots`. (Keep new docs in the local tree before mirroring, or `--delete` will drop them. `screenshots/` lives only in Drive `site/build/screenshots/`, not in the repo — always exclude it from the mirror or `--delete` will wipe it.)

Source of truth is the GitHub repo **`brettkmoore-sites/apex-site`** (public, created fresh 2026-05-30, blocker 1.2 resolved as Option B). The legacy repos `givewebdesign/apexpodcast-co-site` and `brettkmoore-sites/apexpodcast-co-site` (old May-17 blueprint) are left untouched. Vercel is wired at deploy time, not yet.

## Run

```
pnpm install
pnpm dev        # http://localhost:3012  (next dev --turbopack)
pnpm build      # production build + TypeScript check
pnpm start -p 3013   # serve the production build (used for Lighthouse)
pnpm lint       # eslint flat config (eslint-config-next 16)
```

Do not run `pnpm build` while `pnpm dev` is running in the same tree; they share `.next`.

## Stack as built

- Next.js 16 (App Router, Turbopack, `trailingSlash: true`), React 19, TypeScript strict, Tailwind v4.
- Brand tokens (acid / ink / bone / stone) in `app/css/style.css` `@theme`. No hardcoded hex outside that file and the OG/icon generators.
- Fonts via `next/font/google`, self-hosted at build: Archivo Black (display), Inter (body), Space Mono (mono).
- `lenis` smooth scroll (`lerp: 0.1`, `syncTouch: false`, reduced-motion off) + `motion` `Reveal` (reduced-motion aware). `gsap` version-locked, wired in Phase 4.
- Cross-linked JSON-LD `@graph` (Organization + Brett + Randy + WebSite) via `lib/structured-data.ts` + `components/seo/json-ld.tsx`.
- `SmartLink` (`components/ui/smart-link.tsx`) disables prefetch for routes not in `liveRoutes` (`lib/site-config.ts`) so unbuilt later-phase routes do not throw prefetch 404s. **Add routes to `liveRoutes` as each phase ships.**
- Retired from the Cruip chassis: `aos`, `swiper`, the subscribe route, the sample API, blog content, the Permanent Marker accent, HK Grotesk, the blue SaaS palette.

## What is live

Phase 1:
- `/` Home: hero, three pillars, network proof bar, featured work (3 case studies), tier teaser, producer-as-artist frame, closing CTA.
- `/about/` About: partnership, Brett + Randy, how we work, producer-as-artist frame, wider HQ, closing CTA.
- Generated `/icon/{sm,lg}`, `/apple-icon`, `app/favicon.ico`, `/opengraph-image` (real Archivo Black). `robots.txt` + `sitemap.xml`.

Phase 2 (case studies + services):
- `/work/` index + `/work/austin-cheviron/`, `/work/randy-highsmith/`, `/work/russ-laggan/` (shared SSG detail template). Content model: `lib/case-studies.ts` (typed, not MDX — see PHASE2-VERIFICATION.md). Sparse per-client fields render honest placeholders; unlock list in `PHASE2-CONTENT-NEEDED.md`.
- `/services/` (two-tier comparison), `/services/launch/`, `/services/managed/`. Content model: `lib/services.ts`. FAQ via Headless UI Disclosure (`components/ui/faq-accordion.tsx`).
- New shared components: `tier-compare-table`, `network-rollup-strip`, `numbered-list`, `exclusion-list`, `transistor-embed`.

Phase 3 (network + partners + contact + legal):
- `/network/`, `/partners/`, `/contact/`, `/legal/privacy/`, `/legal/terms/`. All ten public routes now live.
- New component: `discovery-calendar-embed` (placeholder for the GHL calendar).
- Every external integration runs on a documented placeholder URL through `lib/site-config.ts` constants (`discoveryUrl`, `partnerEnrollUrl`, `transistorUrl`) with `// TODO: swap to GHL` at each use site. Phase 5 swap list: `PHASE3-PLACEHOLDERS.md`. Gates: `PHASE3-VERIFICATION.md`.
- Legal pages are plain-language placeholders marked "Draft, pending legal review."

Phase 3.5 (surface additions, not polish):
- Voice fix: "A real network. Not a roster." -> "The roster is the network." (home + /network/).
- Real contact form (`components/forms/contact-form.tsx`): local-only, localStorage queue (`apex_leads`) + success. GHL mapping in PHASE3-PLACEHOLDERS.md §8.
- Host press-kit pages `/russ-laggan/`, `/austin-cheviron/`, `/randy-highsmith/` (shared `components/sections/host-page.tsx`, data in `lib/hosts.ts`). Guest form (`components/forms/guest-application-form.tsx`) tags `Guest Applicant — {host}`, localStorage `apex_guest_applications`. Scaffold content uses explicit pending markers; real copy from the dossiers.
- `QUIZ-ARCHITECTURE.md` (plan; build deferred to Phase 5). Gates: `PHASE3.5-VERIFICATION.md`.

## Quality gates

Full A–M results in `PHASE1-VERIFICATION.md`. Headline: Lighthouse mobile **95 / 100 / 100 / 100** (Perf / A11y / Best Practices / SEO) on both pages, CLS 0, TBT ≤10ms, FCP 0.8s, zero console errors. Build + lint clean. Voice sweep clean. No horizontal overflow 320→1536. LCP 2.9s (font-swap under throttled lab) is the one item above its floor and is owned by Phase 4 perf tuning + post-deploy field data.

## Phase 1 placeholders / carried blockers

- Primary CTA (`discoveryUrl` in `lib/site-config.ts`) points to `/contact/` until the GHL discovery calendar URL lands (blocker 1.5). `/contact/` and the other later-phase nav routes 404 until built — expected, and prefetch is suppressed via `SmartLink`.
- Debrief signup form validates and logs; GHL endpoint is Phase 3.
- Brett + Randy headshots are initial-monogram placeholders (blocker 1.4).
- Austin and Russ show names intentionally omitted (TBD). No fabricated quotes or numbers.
