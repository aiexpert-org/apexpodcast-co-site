import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Producers band. StoryBrand "guide": Brett + Randy in every show. Care shown
 * through specifics (what they actually do), not adjectives.
 */
const producers = [
  {
    initials: 'BK',
    name: 'Brett K Moore',
    role: 'Producer and operator. He runs the strategy, the pentatype intake, and the room.',
  },
  {
    initials: 'RH',
    name: 'Randy Highsmith',
    role: 'Producer and host. He runs the long-form interview and the questions only your sphere knows to ask.',
  },
]

export default function HostsBand() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="h-section text-ink">
            Brett and Randy are in every show
            <span className="text-acid">.</span>
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/65">
            Producers, not button-pushers.
          </p>
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {producers.map((p) => (
            <RevealItem key={p.name}>
              <div className="flex gap-6 rounded-3xl border border-ink/12 p-7 md:p-8">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-ink"
                  aria-hidden="true"
                >
                  <span className="font-display text-2xl text-acid">{p.initials}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">{p.name}</h3>
                  <p className="mt-2 text-ink/70">{p.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
