import { Reveal } from '@/components/motion/reveal'

const lineage = [
  { name: 'Reid Miles', at: 'Blue Note' },
  { name: 'Saul Bass', at: 'Bell Labs' },
  { name: 'Peter Saville', at: 'Factory' },
]

export default function ProducerFrame() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-ink p-8 text-bone md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow-acid">The frame</p>
                <h2 className="h-section mt-5 text-bone">Album art for the podcast era.</h2>
                <div className="mt-6 space-y-5 text-bone/70">
                  <p>
                    We talk about Apex the way a record label talks about its catalog. Brett and Randy
                    are producers. The hosts are artists. A show is an album. An episode is a release.
                    The unit of time is a cycle. The unit of work is a release.
                  </p>
                  <p>
                    The reference lineage is Reid Miles at Blue Note, Saul Bass at Bell Labs, Peter
                    Saville at Factory. Restrained. Committed. Repeatable. Less of every visual element,
                    more of what the work actually says.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ul className="divide-y divide-bone/12 border-y border-bone/12">
                  {lineage.map((l) => (
                    <li key={l.name} className="flex items-baseline justify-between py-4">
                      <span className="font-display text-lg text-bone">{l.name}</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-acid">
                        {l.at}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
