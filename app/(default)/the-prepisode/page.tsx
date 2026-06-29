import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, launchIncludes, launchTimeline, launchFaq } from '@/lib/services'

const tier = tiers.launch

export const metadata: Metadata = {
  title: 'The Prepisode',
  description: tier.subhead,
  alternates: { canonical: '/the-prepisode/' },
}

export default function PrepisodePage() {
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
              Start your Prepisode
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Credited in full if you continue.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What you get</h2>
          </Reveal>
          <div className="mt-12">
            <NumberedList items={launchIncludes} columns={2} />
          </div>
        </div>
      </section>

      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">Booking to live in fourteen days</h2>
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

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">If you keep going</p>
              <p className="mt-5 text-bone/75">
                Move to Your Weekly Show inside ninety days and the full $997 credits against your first cycle. Automatic at checkout.
              </p>
              <CtaLink href="/your-weekly-show/" variant="ghost-dark" size="sm" className="mt-7">
                See Your Weekly Show
              </CtaLink>
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
            <FaqAccordion items={launchFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start your Prepisode."
        blurb="Tell us what you want to launch. A producer picks it up."
        defaultService="The Prepisode ($997)"
        source="intake_prepisode"
      />

      <ClosingCta headline="Ready to record the first one?" />
    </>
  )
}
