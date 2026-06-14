import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Producer band (STRATEGY-V2 §1). Faceless rule (2026-05-18/19): no founder
 * names, no personal initials. The promise is the company standard, a producer
 * in the room every session. Care shown through specifics, not adjectives.
 */
const principles = [
  {
    label: 'In the room',
    title: 'A producer on every session.',
    body: 'Not a junior editor, not a system. A producer is on the monitor, dropping markers and steering the conversation while you talk.',
  },
  {
    label: 'Tuned to you',
    title: 'The Pentatype runs first.',
    body: 'Before the first episode, the Pentatype assessment maps how you communicate, so the show is built on your wiring instead of a generic format.',
  },
]

export default function HostsBand() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="h-section text-ink">
            A producer in the room. Every time
            <span className="text-acid">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            The show is shaped while it is recorded, not rescued in the edit. That is the standard
            Apex holds on every session, for every show on the roster.
          </p>
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <RevealItem key={p.title}>
              <div className="flex gap-6 rounded-3xl border border-ink/12 p-7 md:p-8">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-ink"
                  aria-hidden="true"
                >
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-acid">
                    {p.label}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-ink/70">{p.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
