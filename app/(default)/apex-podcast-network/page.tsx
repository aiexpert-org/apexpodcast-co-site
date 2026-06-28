import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import ExclusionList from '@/components/ui/exclusion-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers } from '@/lib/services'

const tier = tiers.network

export const metadata: Metadata = {
  title: 'Apex Podcast Network',
  description: tier.subhead,
  alternates: { canonical: '/apex-podcast-network/' },
}

const networkIncludes: { title: string; body: string }[] = [
  {
    title: 'A place inside the Apex Podcast Network feed.',
    body: 'Your published episode runs inside the same network feed that carries every Apex show. Cross-promotion is built in.',
  },
  {
    title: 'Socials repurposing from each published episode.',
    body: 'Templated short-form clips and motion graphics built from the moments worth surfacing. You deliver the master; we deliver the cut-downs.',
  },
  {
    title: 'Bidirectional guest booking.',
    body: 'We book your host onto other podcasts inside our network and the wider Apex relationship engine. We surface qualified guests to come on your show.',
  },
  {
    title: 'A producer debrief on every released episode.',
    body: 'Written read on what landed, what to lean into next, and the one observation worth turning into three deliverables.',
  },
  {
    title: 'Network co-marketing.',
    body: 'Featured at least once per cycle inside The Debrief. Collab tags across the Apex roster when there is a fit.',
  },
  {
    title: 'PodcastNetwork.org access.',
    body: 'The relationship-engine and guest-mapping IP behind PodcastNetwork.org, bundled as a network perk.',
  },
]

const networkExclusions: string[] = [
  'Recording sessions. Apex Podcast Network assumes you handle Record + Edit + Publish on your own.',
  'Editing or mixing of your raw audio. We work from your finished episode.',
  'Cover art design or show branding.',
  'Pentatype assessment (included in Your Weekly Show and The Prepisode).',
  'The block-analysis audit (included in Your Weekly Show).',
]

const networkFaq: { q: string; a: string }[] = [
  {
    q: 'Who is Apex Podcast Network for?',
    a: 'Podcast owners who already produce their own show but want the Promote phase of the PREP system run by Apex. You stay in charge of recording and publishing. We handle distribution, social repurposing, and bidirectional guest booking inside the network.',
  },
  {
    q: 'What is PREP and where does this sit inside it?',
    a: 'PREP is the framework underneath every Apex offer. Prepare, Record + Edit + Publish, Promote. Apex Podcast Network is the Promote phase, taken as a standalone offer at $997 per 28-day cycle.',
  },
  {
    q: 'What do I deliver to start a cycle?',
    a: 'A published episode per cycle, in a format we can repurpose from. We confirm the spec on the onboarding call.',
  },
  {
    q: 'Can I upgrade to Your Weekly Show later?',
    a: 'Yes. If the relationship gets to the point where you want Apex producing the show end to end, the path is Your Weekly Show at $2,997 per cycle. Cycles you have paid for under Apex Podcast Network do not double-bill if you move mid-cycle.',
  },
  {
    q: 'Does my host actually get booked on other shows?',
    a: 'Yes. Bidirectional guest booking is run by the producer assigned to your show, pitching your host into shows where the fit is real. We also surface qualified guests to come on your show.',
  },
  {
    q: 'When do I get paid for ad inventory?',
    a: 'Ad inventory sits with your existing distribution. Apex Podcast Network amplifies; it does not run dynamic ad insertion on your feed. Dynamic ad insertion is part of Your Weekly Show.',
  },
]

export default function ApexPodcastNetworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">{tier.eyebrow}</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            {tier.headline.replace(/\.$/, '')}
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">{tier.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink href={siteConfig.discoveryUrl} variant="primary" arrow>
              Book a discovery call
            </CtaLink>
            <CtaLink href="#start" variant="ghost-dark">
              Start Promote
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Promote phase of the PREP system, on its own.
          </p>
        </div>
      </section>

      {/* The Promote frame */}
      <section className="section bg-bone">
        <div className="container-apex grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <p className="eyebrow">For owners who already produce.</p>
              <p className="mt-5 text-ink/75">
                You record your own episodes. You edit them. You publish them. What you do not have
                is a network around the show or a producer running amplification on the back end.
                Apex Podcast Network is the Promote phase of the PREP system delivered as a
                standalone offer.
              </p>
              <p className="mt-4 text-ink/75">
                You bring the finished episode. We bring the network, the social cut-downs, and the
                bidirectional guest booking that turns a published episode into compound reach.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">Where it sits in PREP.</p>
              <ul className="mt-6 space-y-4 text-bone/75">
                <li className="flex gap-4">
                  <span className="font-mono text-sm text-bone/40">P</span>
                  <span>
                    <span className="font-display text-bone">Prepare.</span> Run on your side, not
                    included here. Pick this up in Your Weekly Show or The Prepisode.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm text-bone/40">REP</span>
                  <span>
                    <span className="font-display text-bone">Record, Edit, Publish.</span> Run on
                    your side. You own the production stack.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm text-acid">P</span>
                  <span>
                    <span className="font-display text-bone">Promote.</span> Run by Apex. The full
                    Promote phase is what this offer delivers.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it includes */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What Apex Podcast Network includes.</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={networkIncludes} columns={2} />
          </div>
        </div>
      </section>

      {/* What it does not include + upgrade path */}
      <section className="section bg-bone pt-0">
        <div className="container-apex grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="eyebrow">What Apex Podcast Network does not include.</h2>
              <div className="mt-8">
                <ExclusionList
                  items={networkExclusions}
                  closingLine="If you want Apex producing the show end to end, the path is Your Weekly Show."
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <h2 className="eyebrow-acid">If you want the full PREP system.</h2>
              <p className="mt-5 text-bone/75">
                Your Weekly Show is the full PREP bundle at $2,997 per 28-day cycle. Producer in the
                room every session, full editing and mix, distribution under the Apex Podcast Network
                feed, plus the bidirectional guest booking and amplification you get here.
              </p>
              <CtaLink href="/your-weekly-show/" variant="ghost-dark" size="sm" className="mt-7">
                See Your Weekly Show
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions about Apex Podcast Network.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={networkFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start Promote."
        blurb="Tell us about the show you already publish. A producer reviews fit and reaches out. $997 per 28-day cycle, the Promote phase of the PREP system on its own."
        defaultService="Apex Podcast Network ($997 per cycle)"
        source="intake_apex_podcast_network"
      />

      <ClosingCta headline="Ready to put the network around your show?" />
    </>
  )
}
