# Phase 3 — Placeholders (Phase 5 GHL swap list)

Every Phase 3 integration runs through a placeholder. They are centralized so the Phase 5 swap is mechanical: **edit the three constants in `lib/site-config.ts` and the two form/embed spots below, and every use site updates automatically.** Each use site also carries a `// TODO: swap to GHL` comment.

## 1. Discovery booking CTA

- **Placeholder:** `https://apexpodcast.co/discovery-call`
- **Target:** GHL discovery calendar URL (master sub-account `QRzW1cp8gNa31VJDILvJ`)
- **Define at:** `lib/site-config.ts:22` (`discoveryUrl`)
- **Use sites (auto-update from the constant):**
  - `components/ui/header.tsx:104` (desktop header CTA)
  - `components/ui/header.tsx:166` (mobile menu CTA)
  - `components/sections/home-hero.tsx:52`
  - `components/sections/closing-cta.tsx:30` (every page footer CTA)
  - `components/ui/discovery-calendar-embed.tsx:21` (Contact page)
  - `app/(default)/services/launch/page.tsx:32`
  - `app/(default)/services/managed/page.tsx:33`
- **Note:** On `/contact/` the discovery calendar currently renders a styled placeholder card (`components/ui/discovery-calendar-embed.tsx`). When the GHL calendar URL lands, replace the inner block with the GHL embed iframe (keep the max-width wrapper) and the CTA already points at `discoveryUrl`.

## 2. Partner enrollment

- **Placeholder:** `https://apexpodcast.co/partner-portal`
- **Target:** GHL affiliate signup URL (AI Expert agency umbrella, Apex affiliate sub-account)
- **Define at:** `lib/site-config.ts:25` (`partnerEnrollUrl`)
- **Use sites:** `app/(default)/partners/page.tsx:70` (hero CTA), `app/(default)/partners/page.tsx:174` (enroll section CTA)

## 3. The Debrief newsletter form

- **Placeholder behavior:** validates with zod, logs to console, shows success state. No network call.
- **Target:** GHL master sub-account form endpoint, tagged `debrief_footer` or `debrief_network`
- **Swap at:** `components/forms/debrief-signup-form.tsx:39` (replace the `console.log` with the GHL POST). Used in the footer (every page) and on `/network/`.
- **Note:** there is no standalone "contact form" — the Contact page routes via the discovery calendar and mailto links. This newsletter form is the only form on the site.

## 4. Transistor feed (Apex Podcast Network)

- **Placeholder:** `https://apexpodcast.co/listen`
- **Target:** real Transistor feed URL for the Apex Podcast Network (Brett has the Transistor account)
- **Define at:** `lib/site-config.ts:35` (`transistorUrl`)
- **Use sites:** `components/ui/footer.tsx:57` (footer network column), `app/(default)/network/page.tsx:93` (Greenroom "Subscribe on Transistor")

## 5. Partner agreement PDF

- **Placeholder behavior:** no download link rendered. The eligibility section reads "The full agreement is sent when you enroll" (`app/(default)/partners/page.tsx`, eligibility section).
- **Target:** hosted PDF of `affiliate/AFFILIATE-AGREEMENT-TEMPLATE-10PCT`. When available, add a download link in the eligibility section.

## 6. Analytics events (deferred to Phase 5)

- **Status:** not wired. No analytics provider is configured yet (`[TBD analytics provider]` in SITE-ARCHITECTURE §6).
- **Target events:** `discovery_call_booked`, `pentatype_link_clicked`, `debrief_signup`, `partners_enroll_clicked`, `tier_page_view_*`, `case_study_view`.
- **Plan:** wire in the Phase 5 sweep once a provider is chosen, alongside the GHL form POST.

## 7. Contact page conditional content (Brett + Randy confirm)

- `app/(default)/contact/page.tsx` — `caseStudyProgramOpen = true` renders the case-study-seat section. Set to `false` to omit it if the program is closed at relaunch.
- The `randy@apexpodcast.co` direct line renders; confirm Randy is taking direct inbound at relaunch or remove that card.

## Legal pages

`/legal/privacy/` and `/legal/terms/` render plain-language **placeholder** summaries marked "Draft, pending legal review," each with a `// TODO` at the top. Replace with legal-reviewed copy before public deploy.

---

# Phase 3.5 additions

## 8. Contact form (real form, local-only)

- **Placeholder behavior:** `components/forms/contact-form.tsx` validates with zod, queues the lead to `localStorage` (`apex_leads`), logs to console, shows a success state. No network call. mailto fallback offered in the success state.
- **Target:** POST to the GHL master sub-account (`QRzW1cp8gNa31VJDILvJ`) lead form / create-contact endpoint.
- **Swap at:** `components/forms/contact-form.tsx` `onSubmit` (replace the `queueLead` + `console.log` with the GHL POST).
- **GHL field mapping:**
  | Form field | GHL field |
  |---|---|
  | `name` | Contact first/last name |
  | `email` | Contact email |
  | `phone` | Contact phone (set SMS consent flag if used) |
  | `interest` (Apex Launch $997 / Apex Managed $2,997 per cycle / Booking my show on Apex / Becoming a Partner / Something else) | Custom field `interest`, drives pipeline routing + tag |
  | `message` | Note on the contact / custom field `project_notes` |
  | (implicit) | tag `Website Lead — Contact Form`; route into the Apex Client Lifecycle pipeline |

## 9. Guest application form (host pages)

- **Placeholder behavior:** `components/forms/guest-application-form.tsx` queues to `localStorage` (`apex_guest_applications`), logs, shows success. No network call.
- **Target:** GHL master sub-account, tagged `Guest Applicant — {hostName}` (the component already builds this tag from the `hostName` prop).
- **Swap at:** `components/forms/guest-application-form.tsx` `onSubmit`.
- **GHL field mapping:**
  | Form field | GHL field |
  |---|---|
  | `name` | Contact name |
  | `email` | Contact email |
  | `outlet` (optional) | Custom field `company_or_show` |
  | `pitch` | Note on the contact |
  | (implicit) | tag `Guest Applicant — Russ Laggan` / `— Austin Cheviron` / `— Randy Highsmith` |

## 10. Host page content (pending dossiers)

The host press-kit pages (`/russ-laggan/`, `/austin-cheviron/`, `/randy-highsmith/`) are scaffolded with explicit pending markers in `lib/hosts.ts`. Real content fills in from `02-Network/<Person>/PUBLIC-DOSSIER-2026-05-30.md` (running in parallel). Per host, still pending:

- **Bio** (`bio: PENDING`) — renders a dashed "[Bio pulled from dossier — pending]" box
- **Show premise** (`showPremise: PENDING`) — dashed pending box
- **Show name** — confirmed only for Randy (*Sweeter After Difficulty*); Austin and Russ render "[Show name pending dossier]"
- **Headshot** — placeholder initials block, "[Photo pending dossier]"
- **Notable guests** — real for Russ (Glenn Sanford) and Austin (Jerrick Robbins); Randy renders the pending box (TBD from dossier)
- **Recent episodes** — placeholder rows; real list comes from the Transistor RSS feed integration (deferred). Five most-recent episodes, title + date.
- **Subscribe links** — Apple Podcasts / Spotify / Overcast / RSS all point at `transistorUrl` placeholder; swap for real per-platform URLs with the feed.

When a dossier lands, edit that host's record in `lib/hosts.ts` (drop the `PENDING` values for real prose, add `show`, add guests). No structural change needed.

## 11. The quiz (planned, not built)

Architecture in `QUIZ-ARCHITECTURE.md`. Defers to Phase 5 (rides the GHL form plumbing). Carries an open question on Pentatype.com ownership that must resolve first.
