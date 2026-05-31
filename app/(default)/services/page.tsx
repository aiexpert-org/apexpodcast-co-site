import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import TierCompareTable from '@/components/sections/tier-compare-table'
import ClosingCta from '@/components/sections/closing-cta'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Apex sells two things: Launch ($997 one-time) and Managed ($2,997 per 28-day cycle). Both are vehicles for a producer in the room, the network around the show, and the Pentatype mapping that tunes the show to you.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Two ways in.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Launch a show, or run one as a body of work
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Apex sells two things. Both are vehicles for a producer in the room, the network around
            the show, and the Pentatype mapping that tunes the show to you. The ladder is intentional.
            Most artists start at Launch and move to Managed inside the credit window. Some come
            straight to Managed because the show is already running and they want a producer in the
            room.
          </p>
        </div>
      </section>

      <TierCompareTable />

      {/* The credit window + founding-cohort note */}
      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-8 md:p-10">
              <p className="eyebrow">The credit window.</p>
              <p className="mt-5 text-ink/75">
                Launch buyers who move to Managed within sixty days of the first episode delivery get
                the full $997 credited against their first Managed cycle. The credit is automatic
                inside the contract flow. The point is honest: if Launch led you to want Managed, the
                $997 should not feel like double payment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">The founding cohort.</p>
              <p className="mt-5 text-bone/75">
                The first ten Managed clients hold their rate at $2,997 for twenty-four months. Even
                if list price changes during that window, founding cohort clients hold the rate.
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
                inside Brett K Moore HQ. Legacy Publishing for books. Give Web Design for the site
                beyond the show page. AI Expert for the Knowledge Graph and AI implementation work.
                Brett K Moore Sessions for the coaching engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Not sure which tier fits?" />
    </>
  )
}
