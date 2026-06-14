/**
 * Services content. Voice rules enforced: no em dashes, no banned vocabulary, no
 * "X, not Y", no emoji. Pricing is the 2026-06-13 FULL LAUNCH lock, refined
 * 2026-06-14: Your First Episode $997 one-time, Your Weekly Show $2,997 per
 * 28-day cycle, Multi-Tenant Pipeline License $2,997 per month or $29,970 per year.
 *
 * Object keys (`launch`, `managed`, `license`) are stable code identifiers. The
 * customer-facing names live in `.name` and were relocked on 2026-06-14.
 */

export const tiers = {
  launch: {
    slug: 'your-first-episode',
    eyebrow: 'Offer one',
    name: 'Your First Episode',
    price: '$997',
    cadence: 'one-time',
    headline: 'Your first episode, produced the Apex way.',
    subhead:
      'One produced episode, the Pentatype assessment that tunes the show to you, a 90-minute strategy session with a producer, branded cover art, and twelve months inside the Apex Podcast Network. $997, one-time. The honest entry point.',
  },
  managed: {
    slug: 'your-weekly-show',
    eyebrow: 'Offer two',
    name: 'Your Weekly Show',
    price: '$2,997',
    cadence: 'per 28-day cycle',
    headline: 'A show, produced cycle by cycle. With the network around every release.',
    subhead:
      '$2,997 per 28-day cycle. One to four episodes per cycle, same price. A producer in the room every session. Full distribution under the Apex Podcast Network feed. A per-episode producer debrief. The block-analysis audit every eight episodes. Designed as the long-running engagement once you know you want a show in production.',
  },
  license: {
    slug: 'multi-tenant-pipeline-license',
    eyebrow: 'Offer three',
    name: 'Multi-Tenant Pipeline License',
    price: '$2,997',
    cadence: 'per month',
    priceAnnual: '$29,970',
    cadenceAnnual: 'per year',
    headline: 'Run the Apex pipeline under your own brand.',
    subhead:
      'A licensed Apex production and distribution pipeline, run inside your own brand and on your own roster. You keep the client relationship. Apex licenses the system that produces the shows. $2,997 per month, or $29,970 per year. The real-estate and eXp roster is excluded, and an NDA is required before terms.',
  },
} as const

/** Two-tier comparison rows (COPY-SPEC §4). A = Launch, B = Managed. */
export const compareRows: { label: string; launch: string; managed: string }[] = [
  {
    label: 'What it is',
    launch:
      'Your first produced episode, with the Pentatype assessment, a 90-minute strategy session, branded cover art, distribution under the Apex Podcast Network feed, and twelve months of network membership.',
    managed:
      'An ongoing show, produced cycle by cycle, with a producer in the room every session and the network around every release.',
  },
  {
    label: 'Episodes per cycle',
    launch: 'One produced episode.',
    managed: 'One to four produced episodes per cycle, same price.',
  },
  {
    label: 'Recording sessions',
    launch: 'One 90-minute strategy session plus one recorded episode.',
    managed: 'Recording days booked on calendar, up to four hours per session day.',
  },
  {
    label: 'Producer in the room',
    launch: 'Yes, on the recorded episode.',
    managed: 'Yes, every session. Green Room Experience as a daily practice.',
  },
  {
    label: 'Pentatype assessment',
    launch: 'Included. The wedge that tunes your show to you before the first episode.',
    managed: 'Included on intake, revisited if the show direction shifts.',
  },
  {
    label: 'Distribution',
    launch: 'Setup under the Apex Podcast Network feed on Transistor.',
    managed:
      'Full distribution under the Apex Podcast Network feed, including dynamic ad insertion when a sponsor fits.',
  },
  {
    label: 'Cover art and intro / outro music',
    launch: 'From the curated Apex brand kit. Not custom design.',
    managed: 'From the curated Apex brand kit. Custom design quoted separately.',
  },
  {
    label: 'Social clips',
    launch: 'Five to seven short-form clips from the recorded episode.',
    managed: 'Templated per-episode clips, anchored by the producer-noted quote from each release.',
  },
  {
    label: 'Producer debrief',
    launch: 'One end-of-engagement debrief call with a recommendation on the path to Managed.',
    managed: 'A written producer debrief per episode. One observation, three deliverables.',
  },
  {
    label: 'Network coordination',
    launch:
      'Twelve-month membership in the Apex Podcast Network feed. PodcastNetwork.org access for twelve months.',
    managed:
      'Continuous collab tagging across the roster. Guest intros where there is fit. Cross-promotion inside the network.',
  },
  {
    label: 'The block-analysis audit',
    launch: 'Not included.',
    managed: 'Every eight episodes. A written editorial read on the show as a body of work.',
  },
  {
    label: 'Producer office hour',
    launch: 'Not included.',
    managed: 'One 30-minute sync per cycle to plan the next cycle\'s content.',
  },
  {
    label: 'Eligibility for sibling-company engagements',
    launch: 'Not gated. First Episode buyers are welcome to inquire.',
    managed:
      'Eligible for partner book engagements and Knowledge Graph engagements as separate fees.',
  },
  {
    label: 'Founding cohort',
    launch: 'Not applicable.',
    managed: 'First five Weekly Show clients lock at $2,997 for twenty-four months.',
  },
]

export const launchIncludes: { title: string; body: string }[] = [
  {
    title: 'The Pentatype assessment.',
    body: 'The five-archetype communication-style mapping that pre-qualifies your show into a content lane before recording. Proprietary to Apex.',
  },
  {
    title: 'A 90-minute strategy and host-archetype session.',
    body: 'With your producer. We walk the Pentatype result, decide the editorial premise, and build the episode outline.',
  },
  {
    title: 'One recorded and fully produced episode.',
    body: 'Green Room Experience with the producer in the room. Markers, interventions, a clean conversation.',
  },
  {
    title: 'Cover art, intro and outro music, and an episode template.',
    body: 'From the curated Apex brand kit. Distinct, but not bespoke. Bespoke design is a separate engagement through a trusted web studio or quoted as a custom add-on.',
  },
  {
    title: 'Distribution setup under the Apex Podcast Network feed on Transistor.',
    body: 'Your show goes live in the network from day one.',
  },
  {
    title: 'Five to seven short-form social clips from the recorded episode.',
    body: 'Templated motion graphics built from the episode.',
  },
  {
    title: 'Twelve months of Apex Podcast Network membership.',
    body: 'Featured at least once in The Debrief during the membership window.',
  },
  {
    title: 'Twelve months of PodcastNetwork.org access.',
    body: 'The relationship-engine and guest-mapping IP behind PodcastNetwork.org, bundled as a network perk.',
  },
  {
    title: 'A debrief call and a recommendation on the path to Managed.',
    body: 'Honest read on whether Managed makes sense for you, with no obligation.',
  },
]

export const launchTimeline: { title: string; body: string }[] = [
  {
    title: 'Apply or book discovery.',
    body: 'A 20-minute call with a producer. Match check, fit check, expectation check.',
  },
  {
    title: 'Take the Pentatype assessment.',
    body: 'About fifteen minutes. The result lands in your inbox and in the producer\'s notes.',
  },
  {
    title: 'Sign and pay.',
    body: 'GHL Documents contract. Stripe payment link inside the contract. One flow.',
  },
  {
    title: 'Strategy and record.',
    body: 'The 90-minute strategy session, then the recording session. Producer in the room.',
  },
  {
    title: 'Receive your first release.',
    body: 'Produced episode, cover art lockup, social clip set, distribution live under the Apex Podcast Network feed, debrief call on the calendar.',
  },
]

export const launchExclusions: string[] = [
  'Any episode beyond the first.',
  'Custom (non-templated) graphic design.',
  'Ongoing social posting beyond the initial clip set.',
  'Email automation buildout.',
  'Coaching beyond the strategy session and the debrief call.',
  'Guest acquisition matchmaking.',
  'Knowledge Graph, Wikipedia, or book publishing work.',
]

export const launchFaq: { q: string; a: string }[] = [
  {
    q: 'How many episodes do I get?',
    a: 'One produced episode. Anything beyond the first sits inside Managed or is quoted as a custom add-on.',
  },
  {
    q: 'Who owns the episode?',
    a: 'You own the recording, the episode, the cover art used on your show, and the clips. Apex retains a non-exclusive right to feature the episode and a notable quote inside the Apex Podcast Network feed and The Debrief.',
  },
  {
    q: 'What recording platform do you use?',
    a: 'Riverside, with the producer in the session. Local recordings on both sides. We send you the link before the session.',
  },
  {
    q: 'Where is my show distributed?',
    a: 'Setup under the Apex Podcast Network feed on Transistor at launch. You also get your own show RSS that publishes wherever you want to point it.',
  },
  {
    q: 'How long does Launch take from booking to delivery?',
    a: 'Typical turnaround is two to three weeks from contract signing to delivered episode, depending on recording calendar fit.',
  },
  {
    q: 'What if I want to record more than one episode?',
    a: 'The path is Managed. Launch is a single produced episode by design.',
  },
  {
    q: 'What happens if it does not work out?',
    a: 'We make the call honest on the discovery and again on the debrief. If we do not think Launch is the right move for you, we say so before you sign.',
  },
]

export const managedIncludes: { title: string; body: string }[] = [
  {
    title: 'Up to four produced episodes per cycle.',
    body: 'One to four costs the same. No penalty for slowing the cadence, no extra fee for picking it up.',
  },
  {
    title: 'Recording sessions with a producer in the room.',
    body: 'Up to four hours per session day. Green Room Experience. Riverside-based.',
  },
  {
    title: 'Distribution under the Apex Podcast Network feed.',
    body: 'Including dynamic ad insertion campaigns when a sponsor fits. Ninety percent of the ad revenue goes to you. Ten percent stays with Apex and funds the affiliate program.',
  },
  {
    title: 'The Pentatype profile, kept current.',
    body: 'Revisited if the show direction shifts. The frequency mapping stays accurate as the show evolves.',
  },
  {
    title: 'A written producer debrief on every episode.',
    body: 'One observation per episode, surfaced into the debrief, the social clip, and a candidate seat inside The Debrief newsletter.',
  },
  {
    title: 'Network coordination.',
    body: 'Continuous collab tagging across the roster. Guest intros where there is fit. Cross-promotion inside the cohort.',
  },
  {
    title: 'The block-analysis audit every eight episodes.',
    body: 'A four to six page written editorial read on the show as a body of work. Themes, host-to-guest ratio, sentiment arc, the audience signal you are missing.',
  },
  {
    title: 'A monthly producer office hour.',
    body: 'One thirty-minute sync per cycle to plan the next cycle\'s content. Not coaching. Planning.',
  },
  {
    title: 'Eligibility for sibling-company engagements.',
    body: 'A trusted publisher for the book conversation when it comes up. A trusted AI shop for the Knowledge Graph and the Wikipedia conversation. Both as separate engagements at separate fees.',
  },
  {
    title: 'GHL client sub-account.',
    body: 'Per-client portal at portal.apexpodcast.co. Episodes, debriefs, schedule, billing, all in one place.',
  },
]

export const managedExclusions: string[] = [
  'Custom social media content beyond per-episode templated clips.',
  'Ongoing graphic design overhauls.',
  'Book ghost-writing or publication.',
  'Wikipedia and Knowledge Graph buildout.',
  'Ad-hoc producer time beyond the monthly office hour. Quoted at the published hourly rate when it comes up.',
  'In-person physical studio sessions.',
]

export const managedFaq: { q: string; a: string }[] = [
  { q: 'What is a cycle?', a: 'Twenty-eight days. Thirteen cycles in a year.' },
  {
    q: 'How many episodes per cycle?',
    a: 'One to four. Same price either way. We plan cadence with you on the monthly office hour.',
  },
  {
    q: 'How does cancellation work?',
    a: 'Cancel before the next cycle begins and you do not get billed for the next cycle. We do not refund the cycle in progress.',
  },
  {
    q: 'What happens to the show if I leave?',
    a: 'You own your show, your episodes, your cover art, your clips, your RSS. We hand them off cleanly. The producer note on each episode goes with you.',
  },
  {
    q: 'Are the founding-cohort terms transferable?',
    a: 'No. Founding cohort status is tied to the specific show and the specific entity that signed the contract.',
  },
  {
    q: 'How often does the audit ship?',
    a: 'Every eight episodes. At cycle pace of four episodes, that is one audit every two cycles.',
  },
  {
    q: 'What about ad inventory rights?',
    a: 'You own your show, so you own the inventory. The Apex Podcast Network feed runs dynamic insertion as the sponsorship machine. Ninety percent of that revenue is yours.',
  },
]

/* Multi-Tenant Pipeline License. The 2026-06-13 license offer, refined 2026-06-14.
   A licensed Apex production and distribution pipeline an operator runs under their
   own brand and on their own roster. Real-estate and eXp ICP excluded. NDA required. */

export const licenseIncludes: { title: string; body: string }[] = [
  {
    title: 'The full Apex production pipeline, licensed to your brand.',
    body: 'The producer-in-the-room method, the Green Room Experience flow, the editing and clip pipeline, and the publish path. Your clients see your name on it.',
  },
  {
    title: 'The Pentatype assessment, licensed for your roster.',
    body: 'The five-archetype communication mapping that tunes each show to its host, available to run on every client you bring through the pipeline.',
  },
  {
    title: 'A multi-tenant control plane.',
    body: 'One pipeline, many client tenants. Each show stays separated, tracked, and produced on its own cadence inside your own workspace.',
  },
  {
    title: 'Distribution mechanics and templates.',
    body: 'The cover-art kit, the clip templates, the episode and feed setup playbook, and the dynamic-ad-insertion approach, all under your brand.',
  },
  {
    title: 'Onboarding and an operator runbook.',
    body: 'The first-licensee onboarding pass, plus the written runbook your team uses to run the pipeline without a producer from Apex on every session.',
  },
  {
    title: 'Quarterly system updates.',
    body: 'When the Apex pipeline improves, your license stays current. New templates, new method notes, new automations as they ship.',
  },
]

export const licenseTimeline: { title: string; body: string }[] = [
  {
    title: 'Apply and sign the NDA.',
    body: 'A short application, then a mutual NDA through GHL Documents before any terms or system detail is shared.',
  },
  {
    title: 'ICP screen.',
    body: 'We confirm the roster fits. The real-estate and eXp ICP is carved out and stays with Apex. Everything else is open.',
  },
  {
    title: 'License terms and payment.',
    body: 'License agreement, then $2,997 per month or $29,970 per year through the GHL checkout link. Annual prepay carries the better rate.',
  },
  {
    title: 'Pipeline standup and onboarding.',
    body: 'We stand up your multi-tenant workspace, hand over the runbook, and walk your team through the first tenant.',
  },
  {
    title: 'Run your roster.',
    body: 'You produce shows under your own brand on your own cadence. Apex keeps the system current behind you.',
  },
]

export const licenseExclusions: string[] = [
  'The real-estate and eXp ICP. That roster stays with Apex.',
  'Use of the Apex Podcast Co name or wordmark on your client-facing work.',
  'Resale or sub-licensing of the pipeline to another operator.',
  'A producer from Apex sitting in on your client sessions. You license the system and run it with your own team.',
  'Book publishing, Wikipedia and Knowledge Graph work, or web design. Those route to a trusted partner.',
]

export const licenseFaq: { q: string; a: string }[] = [
  {
    q: 'What exactly am I licensing?',
    a: 'The Apex production and distribution pipeline: the method, the Pentatype assessment, the templates, the publish path, and the multi-tenant control plane. You run it under your own brand on your own roster.',
  },
  {
    q: 'Why is there an NDA before terms?',
    a: 'The pipeline is the product. We share the system detail and the full terms after a mutual NDA, so both sides are protected before the specifics.',
  },
  {
    q: 'Why is real estate and eXp excluded?',
    a: 'That ICP is served directly by Apex. The license carves it out so there is no conflict on the roster you build.',
  },
  {
    q: 'Monthly or annual?',
    a: '$2,997 per month, or $29,970 per year. Annual prepay is the better rate, a little under ten months of the monthly price for twelve months of license.',
  },
  {
    q: 'Do I own the shows my clients produce?',
    a: 'Your clients own their shows. You own the relationship with your clients. Apex owns the pipeline you license. Clean lines on all three.',
  },
  {
    q: 'Can I customize the pipeline for my brand?',
    a: 'Yes. The cover-art kit, the show templates, and the client-facing surfaces carry your brand. The underlying method stays intact so the quality holds.',
  },
]
