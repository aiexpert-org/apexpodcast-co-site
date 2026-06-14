import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'
import { compareRows, tiers } from '@/lib/services'

/**
 * Two-offer comparison. Your First Episode left, Your Weekly Show right, all rows.
 * Desktop: a three-column grid (label, First Episode, Weekly Show). Mobile: each
 * row stacks with the two values labeled. Framed as a deliberate ladder.
 */
export default function TierCompareTable() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-ink/12">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-ink/12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <div className="hidden p-6 md:block" />
              <div className="border-r border-ink/12 p-6 md:border-l">
                <p className="font-display text-2xl text-ink">{tiers.launch.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/65">
                  {tiers.launch.price} {tiers.launch.cadence}
                </p>
                <CtaLink href={`/${tiers.launch.slug}/`} variant="ghost-light" size="sm" className="mt-4">
                  See the offer
                </CtaLink>
              </div>
              <div className="bg-ink p-6 text-bone">
                <p className="font-display text-2xl text-acid">{tiers.managed.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/75">
                  {tiers.managed.price} {tiers.managed.cadence}
                </p>
                <CtaLink href={`/${tiers.managed.slug}/`} variant="ghost-dark" size="sm" className="mt-4">
                  See the offer
                </CtaLink>
              </div>
            </div>

            {/* Rows */}
            <dl>
              {compareRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-x-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] ${
                    i % 2 === 1 ? 'bg-ink/[0.02]' : ''
                  }`}
                >
                  <dt className="border-t border-ink/10 px-6 pt-5 font-mono text-xs uppercase tracking-widest text-ink/65 md:py-6 md:font-sans md:text-sm md:normal-case md:tracking-normal md:text-ink">
                    {row.label}
                  </dt>
                  <dd className="px-6 pb-3 pt-2 text-sm text-ink/75 md:border-t md:border-l md:border-ink/10 md:py-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/45 md:hidden">
                      {tiers.launch.name}
                    </span>{' '}
                    {row.launch}
                  </dd>
                  <dd className="border-l-4 border-acid/60 bg-acid/[0.04] px-6 pb-5 pt-2 text-sm text-ink/80 md:border-l md:border-t md:border-ink/10 md:py-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/45 md:hidden">
                      {tiers.managed.name}
                    </span>{' '}
                    {row.managed}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
