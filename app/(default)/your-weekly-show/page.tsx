import type { Metadata } from 'next'
import Link from '@/components/ui/smart-link'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import ExclusionList from '@/components/ui/exclusion-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, managedIncludes, managedExclusions, managedFaq } from '@/lib/services'

const tier = tiers.managed

export const metadata: Metadata = {
  title: 'Your Weekly Show',
  description: tier.subhead,
  alternates: { canonical: '/your-weekly-show/' },
}

export default function YourWeeklyShowPage() {
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
              Start your weekly show
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}. One to four episodes per cycle, same price.
          </p>
        </div>
      </section>

      {/* The album frame */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">The frame.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 grid max-w-4xl gap-5 text-lg text-ink/80">
              <p>
                We do not run Your Weekly Show in months. We run it in cycles. A cycle is twenty-eight
                days. Each cycle is a release window. Each release is a discrete artifact with its own
                cover. Eight releases make a block. A block is what the audit reads as a body of work.
              </p>
              <p>
                A producer is in the room every session. Brett or Randy, on monitor, dropping markers,
                intervening when the conversation goes flat, writing the debrief afterward. The
                network is around every release: collab tags across the cohort, a place in the Apex
                Podcast Network feed, a candidate spot inside The Debrief.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it includes */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">What Your Weekly Show includes.</h2>
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

      {/* Capacity + founding cohort */}
      <section className="section bg-bone">
        <div className="container-apex grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-8 md:p-10">
              <h2 className="eyebrow">What a producer in the room actually costs us.</h2>
              <p className="mt-5 text-ink/75">
                Two producers, full time on Apex. The capacity ceiling is thirty active clients across
                both of us. We do not pass the room to a junior editor when we get busy. When client
                count crosses twenty-five active, we add an editor to take the export and transcript
                work off the producer&rsquo;s plate. Producers stay producers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <h2 className="eyebrow-acid">The first five.</h2>
              <p className="mt-5 text-bone/75">
                The first five Weekly Show clients lock at $2,997 per cycle for twenty-four months. The
                list price steps up after the launch window. Founding cohort clients hold the rate
                through it.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-bone/55">
                Live seat counter wires to GHL (founding_client_count) in Phase 3.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The 90/10 ad split */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="eyebrow">How the ad math actually works.</h2>
              <p className="mt-5 text-ink/75">
                When a sponsor fits and we run dynamic ad insertion, ninety percent of the ad revenue
                goes to you. Ten percent stays with Apex and funds the affiliate program. That number
                is more favorable than the industry standard. We did the math on purpose.
              </p>
              <p className="mt-4 text-ink/75">
                The ten percent has a job. It pays referrers ten percent of the referred
                client&rsquo;s monthly Apex revenue for the duration of the engagement. You can be one
                of those referrers.{' '}
                <Link href="/affiliate/" className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70">
                  See the affiliate program
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The audit */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="eyebrow-acid">The block-analysis audit.</h2>
              <p className="mt-5 text-bone/75">
                Every eight episodes, your show gets a written editorial read. Four to six pages.
                Theme distribution. Guest topic patterns. Host-to-guest talk ratio. Sentiment arc. The
                episodes you have not yet recorded that your audience seems primed for. A guest
                recommendation list informed by what the body of work shows.
              </p>
              <p className="mt-4 text-bone/75">
                The audit is producer-authored. Transcripts run through an AI-assisted analysis pass.
                Brett or Randy writes the narrative and the taste layer. The result is a real document
                with a producer&rsquo;s read on it.
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
                A sample audit is available on the discovery call.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it does not include */}
      <section className="section bg-bone">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="eyebrow">What Your Weekly Show does not include.</h2>
            <div className="mt-8">
              <ExclusionList
                items={managedExclusions}
                closingLine="Anything in that list routes to the right home inside Brett K Moore HQ when it comes up on the cycle planning call."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions about Your Weekly Show.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={managedFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Start your weekly show."
        blurb="Tell us what you want to launch and a producer picks it up. $2,997 per cycle, a producer in the room every session, and the network around every release."
        defaultService="Your Weekly Show ($2,997 per cycle)"
        source="intake_weekly_show"
      />

      <ClosingCta headline="Ready to run a show as a body of work?" />
    </>
  )
}
