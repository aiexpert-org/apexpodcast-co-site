import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, repIncludes, repFaq } from '@/lib/services'

const tier = tiers.rep

export const metadata: Metadata = {
  title: 'REP',
  description: tier.subhead,
  alternates: { canonical: '/rep/' },
}

export default function RepPage() {
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
              Start REP
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Up to four episodes per cycle.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What you get</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={repIncludes} columns={2} />
          </div>
        </div>
      </section>

      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow-acid">Where REP sits</p>
              <h2 className="h-section mt-5 text-bone">Three Apex-owned phases of PREPP, run together.</h2>
              <p className="mt-6 text-bone/75">
                Record, Edit, and Publish are the middle of the funnel. A producer on the recording,
                the full edit and mix in Apex hands, cover art from the brand kit, and publish into
                the Apex catalog. Take REP on its own when you already own Prepare. Take Your Weekly
                Show at $2,997 when you want the whole bundle plus network coordination.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaLink href="/your-weekly-show/" variant="ghost-dark" size="sm">
                  See Your Weekly Show
                </CtaLink>
                <CtaLink href="/prepare/" variant="ghost-dark" size="sm">
                  See Prepare
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
            <FaqAccordion items={repFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start REP."
        blurb="Tell us what you want to launch. A producer picks it up."
        source="intake_rep"
      />

      <ClosingCta headline="Ready to run REP?" />
    </>
  )
}
