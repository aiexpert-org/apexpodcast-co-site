import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import ExclusionList from '@/components/ui/exclusion-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import IntakeBand from '@/components/sections/intake-band'
import { siteConfig } from '@/lib/site-config'
import { tiers, licenseIncludes, licenseTimeline, licenseExclusions, licenseFaq } from '@/lib/services'

const tier = tiers.license

export const metadata: Metadata = {
  title: 'Multi-Tenant Pipeline License',
  description: tier.subhead,
  alternates: { canonical: '/multi-tenant-pipeline-license/' },
}

export default function MultiTenantPipelineLicensePage() {
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
            <CtaLink href="#start" variant="primary" arrow>
              Apply for a license
            </CtaLink>
            <CtaLink href={siteConfig.discoveryUrl} variant="ghost-dark">
              Book a discovery call
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            {tier.price} {tier.cadence}, or {tier.priceAnnual} {tier.cadenceAnnual}. NDA required
            before terms. Real-estate and eXp roster excluded.
          </p>
        </div>
      </section>

      {/* The frame */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">The frame.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 grid max-w-4xl gap-5 text-lg text-ink/80">
              <p>
                Apex produces shows for a capped roster. Five new clients a month, two producers in
                the room. That ceiling is the point of the boutique model. The license is how the
                method travels past it.
              </p>
              <p>
                You run the Apex pipeline under your own brand, for your own roster. You keep the
                client relationship and the revenue from it. Apex licenses the system that produces
                the shows, keeps it current, and stays out of your client-facing work. Clean lines.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing split: monthly vs annual */}
      <section className="section bg-bone pt-0">
        <div className="container-apex grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-ink/12 p-8 md:p-10">
              <p className="eyebrow">Monthly</p>
              <p className="mt-4 font-display text-4xl text-ink">{tier.price}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/60">per month</p>
              <p className="mt-5 grow text-ink/75">
                Month to month on the license. Cancel before the next month to stop billing. The full
                pipeline, the Pentatype assessment, the multi-tenant control plane, and quarterly
                updates while the license is active.
              </p>
              <CtaLink href="#start" variant="ghost-light" size="sm" className="mt-7">
                Apply monthly
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl border border-ink bg-ink p-8 text-bone md:p-10">
              <p className="eyebrow-acid">Annual</p>
              <p className="mt-4 font-display text-4xl text-acid">{tier.priceAnnual}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/65">per year</p>
              <p className="mt-5 grow text-bone/75">
                Annual prepay carries the better rate. A little under ten months of the monthly price
                for twelve months of license. Same pipeline, same updates, one invoice.
              </p>
              <CtaLink href="#start" variant="ghost-dark" size="sm" className="mt-7">
                Apply annual
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What the license includes */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">What the license includes.</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {licenseIncludes.map((item, i) => (
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

      {/* How it works */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">From application to running your roster.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-5">
            {licenseTimeline.map((step, i) => (
              <li key={step.title} className="bg-bone p-7">
                <span className="catalog text-ink/40" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-base text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The ICP carve-out */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-ink/12 p-8 md:p-10">
              <h2 className="eyebrow">The one carve-out.</h2>
              <p className="mt-5 text-ink/75">
                The real-estate and eXp roster stays with Apex, served directly in house. The
                license covers every other roster you want to build. We confirm the fit on the ICP
                screen before terms, so there is no conflict on the clients you take on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What the license does not include */}
      <section className="section bg-ink text-bone">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="eyebrow-acid">What the license does not include.</h2>
            <div className="mt-8">
              <ExclusionList
                items={licenseExclusions}
                tone="dark"
                closingLine="The license gives you the system to run with your own team. It does not put a reseller badge on you or an Apex producer in your sessions."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions about the license.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={licenseFaq} />
          </div>
        </div>
      </section>

      <IntakeBand
        eyebrow="Start here"
        heading="Apply for a license."
        blurb="Tell us about your roster and what you want to run. We send the NDA, confirm the ICP fit, then walk you through terms. $2,997 per month or $29,970 per year."
        defaultService="Multi-Tenant Pipeline License ($2,997/mo)"
        source="intake_license"
      />

      <ClosingCta headline="Want the pipeline under your own brand?" />
    </>
  )
}
