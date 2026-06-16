import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import TierCompareTable from '@/components/sections/tier-compare-table'
import ClosingCta from '@/components/sections/closing-cta'
import PageHero from '@/components/ui/page-hero'
import { tiers } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Apex sells three things: Your First Episode ($997 one-time), Your Weekly Show ($2,997 per 28-day cycle), and the Multi-Tenant Pipeline License ($2,997/mo or $29,970/yr). A producer in the room, the network around the show, and the Pentatype mapping that tunes the show to you.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Three ways in."
        title={
          <>
            Launch a show, run one, or license the pipeline
            <span className="text-acid">.</span>
          </>
        }
      >
        Apex sells three things. The first two are vehicles for a producer in the room, the
        network around the show, and the Pentatype mapping that tunes the show to you. The ladder
        is intentional. Most start with Your First Episode and move to Your Weekly Show inside the
        credit window. The Multi-Tenant Pipeline License is the third path, for operators who want
        to run the Apex pipeline under their own brand.
      </PageHero>

      <TierCompareTable />

      {/* The credit window + founding-cohort note */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-8 md:p-10">
              <p className="eyebrow">The credit window.</p>
              <p className="mt-5 text-ink/75">
                Buyers who move from Your First Episode to Your Weekly Show within sixty days of the
                first episode delivery get the full $997 credited against their first cycle. The credit
                is automatic inside the contract flow. The point is honest: if the first episode led
                you to want the weekly show, the $997 should not feel like double payment.
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

      {/* The third path: license */}
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

      <ClosingCta headline="Not sure which tier fits?" />
    </>
  )
}
