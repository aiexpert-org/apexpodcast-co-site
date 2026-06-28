import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import TierTeaser from '@/components/sections/tier-teaser'
import ClosingCta from '@/components/sections/closing-cta'
import PageHero from '@/components/ui/page-hero'
import { tiers, prepPhases, perEpisodeAddOn } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Apex sells four things: The Prepisode ($997 one-time), Your Weekly Show ($2,997 per 28-day cycle), Apex Podcast Network ($997 per cycle, Promote only), and the Multi-Tenant Pipeline License ($2,997/mo or $29,970/yr). The PREP system, bundled or modular.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="The PREP system, four ways in."
        title={
          <>
            Run one episode, run a show, take just the Promote phase, or license the pipeline
            <span className="text-acid">.</span>
          </>
        }
      >
        Every Apex offer runs the same architecture. PREP: Prepare, Record + Edit + Publish, Promote.
        The Prepisode runs it once. Your Weekly Show runs it every cycle. Apex Podcast Network is the
        Promote phase as a standalone for owners who already produce. The Multi-Tenant Pipeline
        License is how the system travels past our capped roster.
      </PageHero>

      {/* The PREP architecture */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">The architecture under every offer.</p>
            <h2 className="h-section mt-5 max-w-3xl text-ink">
              PREP. Prepare, Record + Edit + Publish, Promote
              <span className="text-acid">.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {prepPhases.map((phase) => (
              <Reveal key={phase.title}>
                <div className="rounded-3xl border border-ink/12 p-7">
                  <p className="font-mono text-2xl tracking-tighter text-acid">{phase.letter}</p>
                  <h3 className="mt-4 font-display text-xl text-ink">{phase.title}</h3>
                  <p className="mt-3 text-ink/70">{phase.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The four tiers */}
      <TierTeaser />

      {/* Per-episode add-on menu line */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 bg-bone p-8 md:p-10">
              <p className="eyebrow">Per-episode add-on.</p>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <p className="font-display text-3xl text-ink">
                  {perEpisodeAddOn.price}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-ink/60">
                  {perEpisodeAddOn.cadence}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-ink/60">
                  or {perEpisodeAddOn.modular}
                </p>
              </div>
              <p className="mt-5 max-w-3xl text-ink/75">{perEpisodeAddOn.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The credit window + founding-cohort note */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-8 md:p-10">
              <p className="eyebrow">The credit window.</p>
              <p className="mt-5 text-ink/75">
                Buyers who move from The Prepisode to Your Weekly Show within ninety days of
                Prepisode delivery get the full $997 credited against their first cycle. The credit
                is automatic inside the contract flow. The point is honest: if the Prepisode led you
                to want the weekly show, the $997 should not feel like double payment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">The founding cohort.</p>
              <p className="mt-5 text-bone/75">
                The first five Weekly Show clients hold their rate at $2,997 for twenty-four months.
                Even if list price changes during that window, founding cohort clients hold the rate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The fourth path: license */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink/12 bg-ink p-8 text-bone md:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-acid/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <p className="eyebrow-acid">{tiers.license.eyebrow}</p>
                  <h2 className="h-section mt-4 text-bone">{tiers.license.name}.</h2>
                  <p className="mt-5 max-w-2xl text-bone/75">{tiers.license.subhead}</p>
                </div>
                <div className="lg:text-right">
                  <p className="font-display text-4xl text-acid">
                    {tiers.license.price}
                    <span className="text-2xl text-bone/70"> / mo</span>
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/60">
                    or {tiers.license.priceAnnual} {tiers.license.cadenceAnnual}
                  </p>
                  <CtaLink href={`/${tiers.license.slug}/`} variant="primary" arrow className="mt-6">
                    See the license
                  </CtaLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why the pricing works (AI-native rationale) */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-ink/12 bg-bone p-8 md:p-10">
              <p className="eyebrow">Why the pricing math works.</p>
              <p className="mt-5 text-ink/75">
                Apex stays two people on purpose. Brett K Moore and Randy
                Highsmith are the producers in every session. An AI-native
                production stack carries the rest: editing assists,
                transcription, show notes, guest research, social repurposing,
                cover variants, outreach drafts. The work that has to be a
                human stays a human. Everything else runs on tools.
              </p>
              <p className="mt-4 text-ink/75">
                That is why the bundle costs what it does. You are not paying
                for a junior team between you and the producer. You are paying
                for a producer in the room and the network around your show.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Exclusion line */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">What Apex does not do.</p>
              <p className="mt-5 text-ink/75">
                Apex is a producer-and-network business. It is not a book publisher, a web design
                shop, a Wikipedia and Knowledge Graph buildout team, or a one-on-one coaching
                practice. When a show conversation surfaces one of those, we make a warm introduction
                to a trusted partner: a publisher for the book, a web studio for the site beyond the
                show page, an AI shop for the Knowledge Graph work, and a coach for the coaching
                engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Not sure which way in fits?" />
    </>
  )
}
