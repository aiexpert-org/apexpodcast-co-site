# Phase 2 — Content Needed (case studies)

The case-study pages are built and live on local preview. The structure is complete and production-ready. The per-client source files (`case-studies/<slug>/profile.md`, `production-notes.md`) are mostly `[TBD]`, so several fields render honest placeholders instead of fabricated content (per the voice + no-fabrication rules). Each item below drops straight into `lib/case-studies.ts` and the page fills in with no code change.

## Blocks the full case-study pages

| Field | Austin (APX-001) | Randy (APX-002) | Russ (APX-003) |
|------|------------------|------------------|----------------|
| Show name | needed | have: *Sweeter After Difficulty* | needed |
| Producer assignment (Brett or Randy "in the room") | needed | needed | needed |
| Pentatype profile result (e.g. "Type 3-1 Strategist / Concierge") | needed | needed | needed |
| Representative episode (Transistor embed URL) | needed | needed | needed |
| Signed host quote ("In their words") | needed | needed | needed |
| Block-analysis audit excerpt (ships at episode 8) | not yet | not yet | not yet |

What renders today without those:
- **Show name** — Austin and Russ show the host name as the cover title with a "Show title in production" line. Randy shows *Sweeter After Difficulty*.
- **Producer** — all three read "Produced by Apex" until you assign Brett or Randy per client.
- **Pentatype** — an honest line explaining the assessment is mapped on intake (no invented type).
- **Producer note** — an honest methodology line (no invented debrief quote).
- **Representative episode** — a dashed placeholder card (no invented embed).
- **Host quote** — the section is omitted entirely until `hostQuote.signedOff` is `true`. Add the signed quote and flip the flag; the section appears.
- **Audit** — the "ships at episode eight" variant for all three (correct: the 2026 catalog has no audit yet).

## How to fill it in

Edit `lib/case-studies.ts`. For each client add the optional fields:

```ts
{
  slug: 'austin-cheviron',
  // ...existing...
  show: 'The Money Puzzle Show',          // when confirmed
  producer: 'Randy',                        // 'Brett' | 'Randy'
  pentatype: 'Type 3-1 Strategist / Concierge',
  episodeEmbedUrl: 'https://share.transistor.fm/e/XXXXXXXX',
  hostQuote: { quote: 'Working with Apex felt like...', signedOff: true },
}
```

Quotes must be signed off by the host before `signedOff: true`. Until then the quote block stays hidden, by design.

## Founding-cohort counter (Managed)

`/services/managed/` states the first-ten lock clearly. The live seat counter (GHL `founding_client_count`) is wired in Phase 3 with the rest of the GHL integration; today the page shows an explicit "wires in Phase 3" line for your sign-off.
