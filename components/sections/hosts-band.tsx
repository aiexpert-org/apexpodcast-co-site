import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Hosts band (STRATEGY-V2 §1). Brett + Randy co-host every conversation. Both
 * score the same pentatype signal; the show's thesis is their shared wiring made
 * into a method. Care shown through specifics, not adjectives.
 */
const producers = [
  {
    initials: 'BK',
    name: 'Brett K Moore',
    role: 'Co-host. The operator angle: AI, systems, and communication.',
    // Pentatype source: core dimension Meaning (The Pinkie Finger); signal
    // Meaning / Connection; "Seeks significance in relationships and outcomes."
    pentatype: 'Meaning / Connection',
    pentatypeNote:
      'Looks for the deeper "why" in every conversation and ties it to the people in the room.',
  },
  {
    initials: 'RH',
    name: 'Randy Highsmith',
    role: 'Co-host. The production craft and the broker-network reach.',
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
            Two hosts. One pentatype
            <span className="text-acid">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Brett and Randy both score Meaning and Connection on the pentatype. The show&rsquo;s
            thesis is their shared wiring, made into a method.
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
