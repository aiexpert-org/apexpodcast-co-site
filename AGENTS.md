# AGENTS.md — Apex Podcast Co Website

> Child repo built from `brettkmoore-sites/nextjs-site-template`. The Apex-specific brand layer overrides the template's "Who this site is for" section. Most other conventions inherit from the template's AGENTS.md.

You are a Claude agent contributing to the Apex Podcast Co website.

## Repo-org note (read this first)

This repo lives under **`brettkmoore-sites/`** as of launch, even though Apex Podcast Co is a 50/50 joint venture between **Brett Moore** and **Randy Highsmith**. The repo is here for speed-of-launch reasons — Brett's existing site template, CI access, and Vercel project are all already wired up in this org.

**Open question to revisit post-launch:** transfer this repo into a dedicated `apex-podcast-co` GitHub org so Randy has equal admin standing. Until then, treat this as Apex's repo, owned 50/50 by the partnership.

## Who this site is for

Apex Podcast Co's clients are **senior eXp Realty leaders and adjacent operator-coaches** who already have networks most agencies would kill for and need a production team that turns those relationships into pipeline.

Anchor personas:
- **Austin Cheviron** — eXp Instructor of the Year, author of *The Money Puzzle*, runs Cheviron Coaching
- **Russ Laggan** — VP of Training at eXp Realty, author of *Be Followable*, runs two podcasts
- **Randy Highsmith** — Apex co-founder, runs his own podcast through the same system

Expansion ICPs (next 6–12 months):
- eXp Luxury Division (high-trust, high-AOV)
- eXp Professional Sports Division (Apex has structural sports network advantage)

## What this site is built on

- Next.js 16 App Router · TypeScript · Tailwind v4 (`@theme` in `src/app/globals.css`, no `tailwind.config.ts`)
- `next/font/google` — Manrope (body), Antonio (display uppercase), Inter (UI)
- Apex tokens: dark BG (`#131416`), off-white FG (`#eeeeee`), single orange accent (`#ff5a1c`)
- Server Components by default; client components only where interactive (header nav, apply form)
- All shared components in `src/components/`. Site config in `src/lib/site-config.ts`.

## Where to look first

| Question                       | Look in                                     |
|--------------------------------|---------------------------------------------|
| Brand voice + ICP context      | `/Users/brett/Documents/Claude/Projects/Apex Podcast Co/` (Cowork project) |
| PREPP framework definition     | Same Cowork project → `framework/PREPP.md`  |
| Pricing rationale              | Same Cowork project → `pricing/`            |
| Site blueprint (IA + copy)     | Same Cowork project → `website-rebuild/site-blueprint.md` |
| Design tokens                  | `src/app/globals.css` (`@theme` block)      |
| Site config (name, URL, etc.)  | `src/lib/site-config.ts`                    |
| Shared components              | `src/components/`                           |

The single source of truth for strategic copy decisions is the Apex Podcast Co Cowork project, not this repo's README. If a page needs new copy direction, read the relevant blueprint section first.

## Voice rules (Apex-specific overrides)

The Apex voice is **decisive, strategic, anti-commodity, and pipeline-focused.** Avoid:

- "We help businesses with their podcasts!" generic-agency language
- "Premium / white-glove / amplify your authority / legacy" — old positioning
- Feature-lists in headlines (mics, video, transcripts as the lead)

Lean into:

- "Pipeline / relationship / system / network / conversation / deal flow"
- Naming specific people (Austin, Russ, Randy) and platforms (eXp, Riverside)
- The "operating system" framing — Apex sells an OS, not editing hours
- "We activate YOUR network" — the client's relationships are the foundation; Apex's network is a multiplier, not the front door

When in doubt: re-read the manifesto page (`/podcast-content-os`). That page is the voice north star.

## Open TODOs for Brett + Randy

These are flagged inline in the code with `[NEEDS DATA: …]` / `[NEEDS HEADSHOT: …]` etc.:

- **Real case study metrics** — Austin + Russ + Randy outcomes (downloads, pipeline, attribution)
- **Headshots** — Brett + Randy (square + landscape)
- **Episode embeds + clips** on case study pages
- **OG image** — currently auto-generated via `src/app/opengraph-image.tsx`; replace with branded version when ready
- **Apps Script webhook** for the Apply form — wire `NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL` env var (same pattern as Burien Best Care Home site)
- **Vercel project** — Brett to connect, set env vars, link `apexpodcast.co` domain
- **DNS swap** — cut over from current WordPress site to Vercel deployment
- **eXp brand permission** — confirm with Russ whether the eXp logo can appear on case study pages
- **Skool community link** — verify URL in footer/site-config (currently `apex-podcast-network-4574`)

## Performance + accessibility floors

Inherited from the template — non-negotiable on every shipped page:

- LCP < 2.0s · FCP < 1.2s · CLS < 0.1 · TBT < 200ms
- First-load JS < 200KB
- WCAG 2.2 AA throughout
- All images via `next/image` with explicit dimensions + alt
- All forms via accessible patterns (the Apply form uses native HTML5 + a11y labels)
- `tel:` links for phone numbers; 44×44 minimum tap targets

---

*Apex Podcast Co. A 50/50 partnership between Brett Moore + Randy Highsmith. Built for the leaders who use conversations to build business.*
