import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
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
    title: 'A place inside the Apex catalog.',
    body: 'Your published episode runs alongside the rest of the Apex catalog. Every release carries the others.',
  },
  {
    title: 'Social cut-downs from every episode.',
    body: 'Templated short-form clips and motion graphics built from the moments worth surfacing.',
  },
  {
    title: 'Guest swaps both ways.',
    body: 'Your host on other Apex feeds. Qualified guests onto yours. Real reach, both directions.',
  },
  {
    title: 'A producer debrief on every release.',
    body: 'A read on what landed, what to lean into next, and the one moment we turn into a clip and a network feature.',
  },
  {
    title: 'A feature in The Debrief each cycle.',
    body: 'The Apex network newsletter. Reach beyond your own audience.',
  },
]

const networkFaq: { q: string; a: string }[] = [
  {
    q: 'Who is this for?',
    a: 'Podcast owners who already produce their own show but want more reach. You stay in charge of recording and publishing. We handle social, guest swaps, and the network feature.',
  },
  {
    q: 'What do I deliver each cycle?',
    a: 'One published episode in a format we can repurpose from. We confirm specs on the onboarding call.',
  },
  {
    q: 'Can I move to a fully produced show later?',
    a: 'Yes. Your Weekly Show is $2,997 a cycle and we produce everything. No double billing if you move mid-cycle.',
  },
  {
    q: 'Does my host actually get booked on other shows?',
    a: 'Yes. Your producer pitches your host into shows where the fit is real.',
  },
]

export default function ApexPodcastNetworkPage() {
  return (
    <>
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
              Get the network behind your show
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}.
          </p>
        </div>
      </section>

      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What you get every cycle</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={networkIncludes} columns={2} />
          </div>
        </div>
      </section>

      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={networkFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Get the network behind your show."
        blurb="Tell us about the show you publish. A producer reviews fit."
        defaultService="Apex Podcast Network ($997 per cycle)"
        source="intake_apex_podcast_network"
      />

      <ClosingCta headline="Ready to compound the audience you already built?" />
    </>
  )
}
