# Apex Quiz Architecture (plan now, build in Phase 5)

_Drafted 2026-05-31. Planning doc only. Implementation defers to Phase 5, after the GHL forms wire up (the quiz is a specialized lead form, so it should ride the same GHL plumbing)._

## 1. Concept

A short, on-brand quiz: **"Learn your podcast communication style."** The visible payoff is a shareable result (a communication-style archetype). The hidden payoff for Apex is a qualified, scored lead with willingness-to-pay signal already attached.

The archetype framing is Pentatype-inspired (five communication styles), which mirrors the Pentatype assessment Apex already references in the Launch/Managed scope. Using the same five-type language keeps the quiz result continuous with the paid engagement: the quiz tells you your style, the paid Pentatype assessment tunes your show to it.

> **OPEN QUESTION FOR BRETT (ownership conflict).** This brief says Russ Laggan owns Pentatype.com. The current site copy and `CLAUDE.md` attribute the Pentatype methodology to Brett ("Brett's IP") on the Services and case-study pages. Those cannot both be the public story. Resolve ownership before the quiz ships, because it decides (a) whether the quiz can use the Pentatype name and five-type IP directly, (b) whether we license pentatype.com or build a parallel, and (c) whether the existing "Brett's IP" site copy needs a correction. Flagging, not changing, the live copy.

## 2. Two builds to choose between

1. **License / embed Pentatype.com.** If pentatype.com is a working assessment platform with an embeddable quiz and an API or webhook, the fastest path is to embed it and pipe the result into GHL. Pros: no quiz logic to build, real methodology behind it. Cons: licensing terms, dependency on an external platform, styling control, and the ownership question above.
2. **Build a parallel Apex quiz.** A lightweight typeform-style quiz owned by Apex, five-type scoring logic in code, styled in the acid record-label brand. Pros: full control, no external dependency, on-brand. Cons: we author the five-type model and questions (needs Brett/Russ sign-off so it does not misrepresent Pentatype IP).

**Recommendation:** confirm pentatype.com's current state and licensing first (it is a known existing platform). If it embeds cleanly and ownership is settled, license it. If not, build the parallel Apex quiz. Either way the GHL result-routing below is identical.

## 3. Question structure

Two layers in one flow. The respondent only perceives the style quiz.

- **Style questions (visible payoff):** 5 to 8 multiple-choice questions that map to the five communication-style archetypes. Output: a primary type plus a secondary flavor (the same shape as the Pentatype result on the case-study pages).
- **Silent willingness-to-pay signals (1 to 2 questions, framed naturally):**
  - "What is your budget range for getting a show produced?" (bands that map to Launch $997 / Managed $2,997-per-cycle / above)
  - "What timeline are you working toward?" (this month / this quarter / just exploring)
  These read as "let us tailor your result" questions, not as a price gate.

## 4. Routing (the actual mechanic)

Quiz submission creates or updates a **GHL contact** in the master sub-account (`QRzW1cp8gNa31VJDILvJ`) with:

- the result archetype as a tag (e.g. `Quiz Result — Strategist`)
- a tag for the WTP band (e.g. `WTP — High`, `WTP — Mid`, `WTP — Exploring`)
- the timeline answer as a custom field

Then branch on the WTP signal:

- **High WTP (budget at/above Managed, near-term timeline):** the result page surfaces a strategy-session calendar booking immediately, and a GHL workflow can auto-send the booking link. Treat as a hot lead. Route to Brett or Randy by the split rule on `/contact/`.
- **Mid WTP (Launch-band budget):** result page points to `/services/launch/` and offers the discovery call. Standard nurture.
- **Lower / exploring:** drop into a nurture sequence (The Debrief plus a short "how Apex works" email arc). No hard sell. Re-engage when timeline tightens.

## 5. Placement

- **Option A: embedded on `/contact/`** as an alternative entry point ("Not sure where to start? Find your podcast communication style"). Keeps the funnel on one page.
- **Option B: a dedicated `/quiz/` route** with its own shareable result URLs (better for organic sharing and social, which is the quiz's growth value).

**Recommendation:** dedicated `/quiz/` route for shareability, with a prominent entry card on `/contact/` and the home page. Shareable result pages are the reason to build a quiz at all.

## 6. Tech notes

- If building in-app: a typeform-style multi-step form (the site already uses react-hook-form + zod). Scoring is a pure function over answers. Result pages can be static archetype pages (`/quiz/result/<type>/`) with the lead's answers passed via GHL, not in the URL.
- Reuse the GHL form plumbing from the Phase 5 sweep (contact form, guest application form, Debrief signup all POST to GHL then) so the quiz is one more tagged submission, not a separate integration.
- Analytics: emit `quiz_started`, `quiz_completed`, `quiz_result_<type>`, `quiz_high_wtp_booking` alongside the other events once an analytics provider is chosen.

## 7. Dependencies and sequence

1. Resolve Pentatype ownership and licensing (Brett + Russ). Blocks the whole quiz.
2. GHL forms wired (Phase 5). The quiz routing depends on the same GHL contact/tag/workflow plumbing.
3. Analytics provider chosen (so WTP routing is measurable).
4. Then: build (license-embed or parallel), wire result-to-GHL, set the high-WTP auto-booking workflow, launch on `/quiz/`.

Until those land, this stays a plan. No quiz code ships in Phase 3.5.
