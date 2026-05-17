# Apex Podcast Co — Website

The relaunch of [apexpodcast.co](https://apexpodcast.co). Built on Brett K. Moore's `nextjs-site-template`. Next.js 16 · Tailwind v4 · TypeScript · Vercel.

## Repo home (transient)

Lives under `brettkmoore-sites/` for launch-speed reasons. Apex is a 50/50 joint venture between **Brett Moore** and **Randy Highsmith**. Post-launch, this repo should move to a dedicated `apex-podcast-co` GitHub org — see `AGENTS.md` for context.

## Stack

- Next.js 16 App Router · React 19 · TypeScript
- Tailwind CSS v4 — CSS-based config in `src/app/globals.css` (`@theme` block)
- `next/font/google` — Manrope (body), Antonio (display uppercase), Inter (UI)
- shadcn-style primitives + lucide-react icons
- Server Components by default. Client components only for `SiteHeader` (mobile menu) and `ApplyForm` (form state).

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # eslint
```

## Pages

| Route                                | Purpose                                                  |
|--------------------------------------|----------------------------------------------------------|
| `/`                                  | Home — relationship-engine framing, PREPP, case studies  |
| `/how-it-works`                      | The PREPP framework, stage by stage                      |
| `/podcast-content-os`                | Manifesto — the "OS, not editing" thesis                 |
| `/services`                          | Tier ladder index (Pilot · A la Carte · Flagship)        |
| `/pilot`                             | $997 Pilot landing page                                  |
| `/flagship`                          | $4,800/mo Flagship landing page                          |
| `/pricing`                           | Per-stage pricing breakdown                              |
| `/case-studies`                      | Case study index                                         |
| `/case-studies/austin-cheviron`      | Austin Cheviron hub                                      |
| `/case-studies/russ-laggan`          | Russ Laggan hub                                          |
| `/case-studies/randy-highsmith`      | Randy Highsmith (founder eats own cooking)               |
| `/about`                             | Brett + Randy + the founding story                       |
| `/apply`                             | Application form / Blueprint Session request             |

`/sitemap.xml` + `/robots.txt` + `/opengraph-image` are generated at build time.

## Configuration

- `src/lib/site-config.ts` — name, description, tagline, contact, founders, PREPP stages
- `src/app/globals.css` — design tokens (colors, type scale, layout rhythm)
- `NEXT_PUBLIC_SITE_URL` — production URL override (set in Vercel)
- `NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL` — Apply form backend endpoint (TODO: wire post-launch)

## Open TODOs

See `AGENTS.md` for the full list. Highlights:

- Headshots: Brett, Randy
- Real case-study metrics: Austin, Russ, Randy
- Episode embeds + clip galleries on case study pages
- Branded OG image to replace the auto-generated placeholder
- Apps Script webhook URL for Apply form
- Vercel project connection + DNS swap from current WordPress site

## License

Private. © Brett Moore + Randy Highsmith.
