import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import ExclusionList from '@/components/ui/exclusion-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, launchIncludes, launchTimeline, launchExclusions, launchFaq } from '@/lib/services'

const tier = tiers.launch

export const metadata: Metadata = {
  title: 'Your First Episode',
  description: tier.subhead,
  alternates: { canonical: '/your-first-episode/' },
}

export default function YourFirstEpisodePage() {
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
              Start your first episode
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Hot inbound and existing network members can apply for
            direct-to-proposal. Ask on the call.
          </p>
        </div>
      </section>

      {/* What it includes */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What Your First Episode includes.</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={launchIncludes} columns={2} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">From booking to first release.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-5">
            {launchTimeline.map((step, i) => (
              <li key={step.title} className="bg-ink p-7">
                <span className="catalog text-acid" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-base text-bone">{step.title}</h3>
                <p className="mt-2 text-sm text-bone/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What it does not include + upgrade path */}
      <section className="section bg-bone">
        <div className="container-apex grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="eyebrow">What Your First Episode does not include.</h2>
              <div className="mt-8">
                <ExclusionList
                  items={launchExclusions}
                  closingLine="Anything in that list routes to a trusted partner when it comes up on the discovery call."
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <h2 className="eyebrow-acid">If it leads to Your Weekly Show.</h2>
              <p className="mt-5 text-bone/75">
                Buyers who move to Your Weekly Show inside ninety days of the first episode delivery get
                the full $997 credited against the first cycle. Automatic inside the contract flow. The
                bridge is built so Your First Episode can be exactly what it is: a real episode, a real
                production, an honest taste of how Apex works.
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
            <h2 className="h-sub text-ink">Questions about Your First Episode.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={launchFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start your first episode."
        blurb="Tell us what you want to launch and a producer picks it up. $997, one produced episode, the Pentatype assessment, and twelve months inside the network."
        defaultService="Your First Episode ($997)"
        source="intake_first_episode"
      />

      <ClosingCta headline="Ready to record the first one?" />
    </>
  )
}
