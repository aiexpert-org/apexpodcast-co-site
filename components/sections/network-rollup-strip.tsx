import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * The network so far. Publishable craft and volume stats only, Transistor-verified
 * 2026-05-19 (measurement/stat-ribbon-copy.md). Internal audience numbers stay
 * internal. These describe the full production roster track record, which is why
 * the counts (11 shows, 114 episodes) exceed the three featured catalog entries.
 */

const stats = [
  { value: '11', label: 'shows produced', body: 'Across the production roster.' },
  { value: '114', label: 'episodes shipped', body: 'Distributed on Apple, Spotify, and YouTube.' },
  {
    value: '14+',
    label: 'months in continuous production',
    body: 'Shipping on a weekly cadence since 2025.',
  },
]

export default function NetworkRollupStrip() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="eyebrow-acid">The network so far.</h2>
        </Reveal>
        <RevealStagger className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-3">
          {stats.map((s) => (
            <RevealItem key={s.label} className="bg-ink p-8 md:p-10">
              <p className="font-display text-5xl text-acid">{s.value}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-bone/75">
                {s.label}
              </p>
              <p className="mt-3 text-sm text-bone/65">{s.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
