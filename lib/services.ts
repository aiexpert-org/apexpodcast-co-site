/**
 * Services content. Voice rules enforced: no em dashes, no banned vocabulary, no
 * "X, not Y", no emoji. Service architecture is the PREP framework (locked
 * 2026-06-26 evening per Brett + Randy partner call): Prepare, Record + Edit +
 * Publish, Promote. The customer-facing umbrella stays Your Weekly Show; PREP
 * is the architecture inside it. The SKU map below is the 2026-06-26 lock:
 *   - Your Weekly Show: $2,997 per 28-day cycle (full PREP, bundled)
 *   - The Prepisode: $997 one-time (full PREP for a single episode)
 *   - Apex Podcast Network: $997 per cycle (Promote only, standalone)
 *   - Multi-Tenant Pipeline License: $2,997/mo or $29,970/yr
 *   - Per-episode add-on: $747 all-in (inside an active cycle)
 *
 * Object keys (`launch`, `managed`, `license`, `network`) are stable code
 * identifiers. The customer-facing names live in `.name`.
 */

export const tiers = {
  launch: {
    slug: 'the-prepisode',
    eyebrow: 'Try one episode',
    name: 'The Prepisode',
    price: '$997',
    cadence: 'one-time',
    headline: 'One episode. See what your show could become.',
    subhead:
      'A produced first episode in your feed within two weeks. We map your voice, run a strategy session, sit on the recording, ship the edit, and put the network behind it. If you keep going, the $997 credits in full toward your first cycle.',
  },
  managed: {
    slug: 'your-weekly-show',
    eyebrow: 'Run the show',
    name: 'Your Weekly Show',
    price: '$2,997',
    cadence: 'per 28-day cycle',
    headline: 'The show, ongoing. You only show up to record.',
    subhead:
      'An hour of recording becomes a published episode, a feed of cut-downs, and a place inside a network of Apex shows. Up to four episodes a cycle for the same $2,997. We hold every step before and after the recording.',
  },
  network: {
    slug: 'apex-podcast-network',
    eyebrow: 'Amplify what you already publish',
    name: 'Apex Podcast Network',
    price: '$997',
    cadence: 'per 28-day cycle',
    headline: 'Already publishing? Put a network behind it.',
    subhead:
      'You produce. We promote. Social cut-downs, guest swaps with twenty-six other shows, and a place in the Apex Podcast Network feed. $997 per cycle.',
  },
  license: {
    slug: 'multi-tenant-pipeline-license',
    eyebrow: 'License the pipeline',
    name: 'Multi-Tenant Pipeline License',
    price: '$2,997',
    cadence: 'per month',
    priceAnnual: '$29,970',
    cadenceAnnual: 'per year',
    headline: 'Run the Apex pipeline under your own brand.',
    subhead:
      'For operators producing podcasts for a roster of clients. You keep the relationship and the brand. We license the system. Real-estate and eXp roster excluded. NDA required before terms.',
  },
} as const

export const prepPhases: { letter: string; title: string; body: string }[] = [
  {
    letter: '01',
    title: 'Before you record.',
    body: 'We map your voice, build the guest brief, and plan the arc. You walk in knowing the conversation will land.',
  },
  {
    letter: '02',
    title: 'During the recording.',
    body: 'A producer is on the call. Markers, redirects, the kindness to let a pause breathe. You focus on the conversation.',
  },
  {
    letter: '03',
    title: 'After the recording.',
    body: 'Edit, publish, cut for social, swap guests with the network. Your hour goes everywhere your audience already is.',
  },
]

/** Per-episode add-on line. Surfaces on the pricing surface as a menu item, not a primary SKU. */
export const perEpisodeAddOn = {
  price: '$747',
  cadence: 'per extra episode',
  modular: '$249 per episode for a single phase',
  body:
    'Need one more episode this cycle? Drop it in for $747 fully produced, or $249 for a single phase.',
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
    launch: 'Not gated. Prepisode buyers are welcome to inquire.',
    managed:
      'Eligible for partner book engagements and Knowledge Graph engagements as separate fees.',
  },
]

export const launchIncludes: { title: string; body: string }[] = [
  {
    title: 'A voice map of how you actually communicate.',
    body: 'The Pentatype assessment, then a 90-minute session with your producer to shape the show around what you do best.',
  },
  {
    title: 'One fully produced episode in your feed.',
    body: 'A producer in the recording, full edit and mix, cover art, intro and outro music. Live within two weeks of booking.',
  },
  {
    title: 'A network around your launch.',
    body: 'Your episode ships inside the Apex Podcast Network feed and gets a feature in The Debrief. You start with reach.',
  },
  {
    title: 'Five to seven short clips ready to post.',
    body: 'The moments worth surfacing, cut for social.',
  },
  {
    title: 'An honest read at the end.',
    body: 'A debrief call with a clear recommendation. Keep going with Your Weekly Show or stop here.',
  },
  {
    title: 'The full $997 credited if you continue.',
    body: 'Move to Your Weekly Show within ninety days and the credit lands on your first cycle automatically.',
  },
]

export const launchTimeline: { title: string; body: string }[] = [
  {
    title: 'Day 1: Book a call.',
    body: 'Twenty minutes with a producer to confirm fit.',
  },
  {
    title: 'Day 2: Map your voice.',
    body: 'Fifteen-minute Pentatype assessment.',
  },
  {
    title: 'Day 3: Sign and start.',
    body: 'One contract, one payment link.',
  },
  {
    title: 'Day 7: Strategy and record.',
    body: 'Ninety-minute strategy session, then the recording.',
  },
  {
    title: 'Day 14: Live in your feed.',
    body: 'Produced episode, cover art, social clips, distribution, debrief.',
  },
]

export const launchExclusions: string[] = [
  'Episodes beyond the first.',
  'Custom (non-templated) design.',
  'Ongoing social posting.',
  'Coaching beyond the strategy session and the debrief.',
  'Book publishing, Knowledge Graph, or Wikipedia work.',
]

export const launchFaq: { q: string; a: string }[] = [
  {
    q: 'How fast can I have an episode in my feed?',
    a: 'Two weeks from booking. Sometimes faster.',
  },
  {
    q: 'Who owns the episode?',
    a: 'You. Recording, edit, cover art, clips. Apex keeps the right to feature it inside the network feed and The Debrief.',
  },
  {
    q: 'What if I want a whole show, not one episode?',
    a: 'Your Weekly Show is the path. If you upgrade within ninety days, the $997 credits in full toward your first cycle.',
  },
  {
    q: 'What if it does not work out?',
    a: 'We tell you on the discovery call. If we do not think a show is right for you, we say so before you sign.',
  },
]

export const managedIncludes: { title: string; body: string }[] = [
  {
    title: 'Up to four episodes a cycle for the same price.',
    body: 'Slow down or speed up without renegotiating.',
  },
  {
    title: 'A producer on every recording.',
    body: 'You record. We catch levels, mark moments, save the questions you forgot to ask.',
  },
  {
    title: 'Distribution and ad revenue, ninety percent to you.',
    body: 'Your show ships through the Apex Podcast Network feed. When sponsors fit, you keep ninety percent of the ad revenue.',
  },
  {
    title: 'A producer debrief after every episode.',
    body: 'What worked, what to lean into, and the one moment we turn into a clip and a network feature.',
  },
  {
    title: 'Guest swaps across twenty-six other shows.',
    body: 'Your host on their feeds. Their guests on yours. Compound reach starts cycle one.',
  },
  {
    title: 'A written audit of your show every eight episodes.',
    body: 'Theme distribution, guest patterns, the episode your audience is primed for that you have not recorded yet.',
  },
  {
    title: 'A planning call each cycle.',
    body: 'Thirty minutes with your producer to map the next eight weeks.',
  },
]

export const managedExclusions: string[] = [
  'Custom social content beyond the per-episode clips.',
  'Ongoing graphic design overhauls.',
  'Book ghost-writing or publication.',
  'Wikipedia and Knowledge Graph buildout.',
  'In-person studio sessions.',
]

export const managedFaq: { q: string; a: string }[] = [
  {
    q: 'How much do I actually have to do?',
    a: 'Show up and record. Up to four hours of recording a cycle. Everything before and after is on us.',
  },
  {
    q: 'What is a cycle?',
    a: 'Twenty-eight days. Thirteen cycles in a year.',
  },
  {
    q: 'How do I cancel?',
    a: 'Cancel before the next cycle starts and you are not billed again. The current cycle finishes.',
  },
  {
    q: 'What happens to the show if I leave?',
    a: 'You keep everything. Episodes, cover art, clips, RSS. Clean handoff.',
  },
  {
    q: 'How do ads work?',
    a: 'You own the show, you own the inventory. When sponsors fit, ninety percent of ad revenue is yours.',
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
