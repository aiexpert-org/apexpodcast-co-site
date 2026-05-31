import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

const cards = [
  {
    title: 'The Apex Podcast Network feed.',
    body: 'Every show rolls up under one parent feed. Aggregate downloads compound across the cohort.',
  },
  {
    title: 'The Debrief.',
    body: "The network's newsletter. Notable quotes from cohort recordings, producer notes from the week, episodes worth your time.",
  },
  {
    title: 'Collab tagging on every release.',
    body: 'Each new episode goes out with the cohort behind it. Reach is shared by default.',
  },
  {
    title: 'The block-analysis audit.',
    body: 'Every eight episodes, your show gets a written editorial read. What you cover, what you do not, what the audience is primed for.',
  },
]

export default function NetworkProofBar() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <h2 className="eyebrow-acid">The roster is the network.</h2>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <RevealItem
              key={c.title}
              className="flex h-full flex-col rounded-2xl border border-bone/12 bg-bone/[0.03] p-7"
            >
              <h3 className="font-display text-lg leading-snug text-bone">{c.title}</h3>
              <p className="mt-4 text-sm text-bone/65">{c.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
