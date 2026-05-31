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
    // Pentatype source: core dimension Meaning (The Purpose Finder); signal
    // Meaning / Connection; ranking Meaning > Connection > Discovery > Conviction
    // > Structure; their one-liner "Seeks significance in relationships and outcomes."
    pentatype: 'Meaning / Connection',
    pentatypeNote:
      'Looks for the deeper "why" in every conversation and ties it to the people in the room.',
  },
  {
    initials: 'RH',
    name: 'Randy Highsmith',
    role: 'Producer and host. He runs the long-form interview and the questions only your sphere knows to ask.',
    // Pentatype source: core dimension Meaning (The Pinkie Finger), same core as
    // Brett; signal tentatively Meaning / Connection (Connection and Discovery tied
    // at 5.38, confirmed by Brett pending Randy's Signal screen); ranking Meaning
    // 5.63 > Connection 5.38 > Discovery 5.38 > Conviction 5.00 > Structure 2.25.
    // Shared Meaning core is intentional: the show's "Meaning + Connection" thesis.
    pentatype: 'Meaning / Connection',
    pentatypeNote: 'Listens for what matters underneath and helps the conversation arrive there.',
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
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/65">
                    Pentatype: {p.pentatype}
                  </p>
                  {p.pentatypeNote && <p className="mt-1 text-sm text-ink/70">{p.pentatypeNote}</p>}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
