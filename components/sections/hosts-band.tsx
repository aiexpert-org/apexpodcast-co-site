import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Hosts band. Brett K Moore + Randy Highsmith. Role line is real; the pentatype
 * communication style is an explicit [pentatype TBD] placeholder until dossier
 * data is wired (no fabricated pentatype codes).
 */
const hosts = [
  {
    initials: 'BK',
    name: 'Brett K Moore',
    role: 'Co-host and producer. Operator, real estate adjacent.',
  },
  {
    initials: 'RH',
    name: 'Randy Highsmith',
    role: 'Co-host and producer. The long-form interview seat.',
  },
]

export default function HostsBand() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="eyebrow">Your hosts.</h2>
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {hosts.map((h) => (
            <RevealItem key={h.name}>
              <div className="flex gap-6 rounded-3xl border border-ink/12 p-7 md:p-8">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-ink"
                  aria-hidden="true"
                >
                  <span className="font-display text-2xl text-acid">{h.initials}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">{h.name}</h3>
                  <p className="mt-2 text-ink/70">{h.role}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/65">
                    Communication style: [pentatype TBD]
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
