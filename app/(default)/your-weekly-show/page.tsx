import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, managedIncludes, managedFaq } from '@/lib/services'

const tier = tiers.managed

export const metadata: Metadata = {
  title: 'Your Weekly Show',
  description: tier.subhead,
  alternates: { canonical: '/your-weekly-show/' },
}

export default function YourWeeklyShowPage() {
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
              Start the show
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. Up to four episodes a cycle, same price.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">What you actually do</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lead mt-5 max-w-3xl text-ink/80">
              Show up to record. That is the whole ask. Up to four hours a cycle. Everything before the recording, after the recording, and around the recording is on us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">What you get every cycle</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {managedIncludes.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.05}>
                <div className="flex gap-5">
                  <span className="catalog shrink-0 text-acid" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-bone">{item.title}</h3>
                    <p className="mt-2 text-bone/70">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">The first five</p>
              <p className="mt-5 text-bone/75">
                The first five Weekly Show clients lock at $2,997 per cycle for twenty-four months, even when list price moves.
              </p>
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
            <FaqAccordion items={managedFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start your weekly show."
        blurb="Tell us what you want to launch. A producer picks it up."
        defaultService="Your Weekly Show ($2,997 per cycle)"
        source="intake_weekly_show"
      />

      <ClosingCta headline="Ready to become the founder people listen to?" />
    </>
  )
}
