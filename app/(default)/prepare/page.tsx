import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, prepareIncludes, prepareFaq } from '@/lib/services'

const tier = tiers.prepare

export const metadata: Metadata = {
  title: 'Prepare',
  description: tier.subhead,
  alternates: { canonical: '/prepare/' },
}

export default function PreparePage() {
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
              Start Prepare
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Modular, cycle over cycle.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What you get</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={prepareIncludes} columns={2} />
          </div>
        </div>
      </section>

      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow-acid">Where Prepare sits</p>
              <h2 className="h-section mt-5 text-bone">The first Apex-owned phase of PREPP.</h2>
              <p className="mt-6 text-bone/75">
                Apex Podcast Co owns four phases: Prepare, Record, Edit, Publish. Prepare is the first.
                It is the phase that tunes the show to the host before a single tape rolls, and it is
                the wedge that makes every other phase land. Take Prepare on its own when you already
                own the rest of the stack. Take Your Weekly Show at $2,997 when you want the whole
                bundle in Apex hands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaLink href="/your-weekly-show/" variant="ghost-dark" size="sm">
                  See Your Weekly Show
                </CtaLink>
                <CtaLink href="/rep/" variant="ghost-dark" size="sm">
                  See REP
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={prepareFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start Prepare."
        blurb="Tell us what you want to launch. A producer picks it up."
        source="intake_prepare"
      />

      <ClosingCta headline="Ready to tune the show?" />
    </>
  )
}
