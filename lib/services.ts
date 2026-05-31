/**
 * Services content. Paste-ready copy from COPY-SPEC §4 (overview), §5 (Launch),
 * §6 (Managed), mapped to STRATEGY.md §3. Voice rules enforced: no em dashes, no
 * banned vocabulary, no "X, not Y", no emoji. Pricing is the locked 2026-05-18
 * SKU set ($997 one-time Launch, $2,997 per 28-day cycle Managed).
 */

export const tiers = {
  launch: {
    slug: 'launch',
    eyebrow: 'Tier one',
    name: 'Launch',
    price: '$997',
    cadence: 'one-time',
    headline: 'Your first episode, produced the Apex way.',
    subhead:
      'One produced episode, the Pentatype assessment that tunes the show to you, a 90-minute strategy session with a producer, branded cover art, and twelve months inside the Apex Podcast Network. $997, one-time. The honest entry point.',
  },
  managed: {
    slug: 'managed',
    eyebrow: 'Tier two',
    name: 'Managed',
    price: '$2,997',
    cadence: 'per 28-day cycle',
    headline: 'A show, produced cycle by cycle. With the network around every release.',
    subhead:
      '$2,997 per 28-day cycle. One to four episodes per cycle, same price. A producer in the room every session. Full distribution under the Apex Podcast Network feed. A per-episode producer debrief. The block-analysis audit every eight episodes. Designed as the long-running engagement once you know you want a show in production.',
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
    label: 'Eligibility for Brett\'s other businesses',
    launch: 'Not gated. Launch buyers are welcome to inquire.',
    managed:
      'Eligible for Legacy Publishing book engagements and AI Expert Knowledge Graph engagements as separate fees.',
  },
  {
    label: 'Founding cohort',
    launch: 'Not applicable.',
    managed: 'First ten Managed clients lock at $2,997 for twenty-four months.',
  },
]

export const launchIncludes: { title: string; body: string }[] = [
  {
    title: 'The Pentatype assessment.',
    body: 'The five-archetype communication-style mapping that pre-qualifies your show into a content lane before recording. Brett\'s IP.',
  },
  {
    title: 'A 90-minute strategy and host-archetype session.',
    body: 'With Brett or Randy. We walk the Pentatype result, decide the editorial premise, and build the episode outline.',
  },
  {
    title: 'One recorded and fully produced episode.',
    body: 'Green Room Experience with the producer in the room. Markers, interventions, a clean conversation.',
  },
  {
    title: 'Cover art, intro and outro music, and an episode template.',
    body: 'From the curated Apex brand kit. Distinct, but not bespoke. Bespoke design is a separate engagement through Give Web Design or quoted as a custom add-on.',
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
    body: 'Brett\'s relationship-engine and guest-mapping IP, bundled as a network perk.',
  },
  {
    title: 'A debrief call and a recommendation on the path to Managed.',
    body: 'Honest read on whether Managed makes sense for you, with no obligation.',
  },
]

export const launchTimeline: { title: string; body: string }[] = [
  {
    title: 'Apply or book discovery.',
    body: 'A 20-minute call with Brett or Randy. Match check, fit check, expectation check.',
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
  'Knowledge Graph, Wikipedia, or Legacy Publishing book work.',
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
    title: 'Eligibility for Brett\'s other businesses.',
    body: 'Legacy Publishing for the book conversation when it comes up. AI Expert for the Knowledge Graph and the Wikipedia conversation. Both as separate engagements at separate fees.',
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
