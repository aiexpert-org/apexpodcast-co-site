import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

const pillars = [
  {
    n: '01',
    title: 'Producer instinct.',
    body: 'Anyone can record. Almost nobody is producing while you record. A producer is in the room every session, monitoring, dropping markers, intervening when the conversation goes flat. That is the difference.',
  },
  {
    n: '02',
    title: 'Network access.',
    body: 'Every Apex show publishes under the Apex Podcast Network feed and gets collab-tagged across the cohort. You arrive with an audience you did not have to build alone.',
  },
  {
    n: '03',
    title: 'Pentatype methodology.',
    body: 'Before the first episode, your host takes the Pentatype assessment. We map your natural communication frequency to one of five archetypes and tune the show to it. The show sounds like you because we mapped what "you" actually sounds like.',
  },
]

export default function ThreePillars() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="eyebrow">What the work actually is</h2>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {pillars.map((p) => (
            <RevealItem key={p.n} className="bg-bone p-8 md:p-10">
              <span className="catalog text-ink/40">{p.n}</span>
              <h3 className="h-sub mt-6 text-ink">{p.title}</h3>
              <p className="mt-4 text-ink/70">{p.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
