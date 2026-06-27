import Link from '@/components/ui/smart-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Producers band — short bios for Brett K Moore and Randy Highsmith on the
 * home page, before the footer CTA. Long-form bios live on /producers/.
 * Bios are verbatim from the spec.
 */
const PRODUCERS = [
  {
    name: 'Brett K Moore',
    role: 'Co-founder. Architect of the Pentatype.',
    bio: 'Built the communication assessment that shows hosts, guests, and audiences how they actually process the world. The Pentatype is how Apex thinks about voice, audience, and show fit before a single episode gets recorded.',
  },
  {
    name: 'Randy Highsmith',
    role: 'Co-founder. Former Director of Podcast Production at eXp Realty.',
    bio: 'Worked directly with Glenn Sanford (founder) and Leo Pareja (CEO). Produced Big Agent Meeting alongside Russ Laggan. Built and ran podcast roster operations for one of the largest real estate networks in the world before co-founding Apex.',
  },
]

export default function ProducersBand() {
  return (
    <section className="section bg-bone text-ink">
      <div className="container-apex">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">
            The producers
          </p>
          <h2 className="mt-4 h-section text-ink">
            Brett and Randy
            <span className="text-acid">.</span>
          </h2>
          <p className="mt-5 text-ink/70">
            Two producers, one room. The work happens together on every
            session.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-12 lg:grid-cols-2">
          {PRODUCERS.map((p) => (
            <RevealItem key={p.name}>
              <article className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-2xl tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/55">
                  {p.role}
                </p>
                <p className="mt-5 text-ink/75">{p.bio}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-12">
          <Link
            href="/producers/"
            className="group inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink/70 hover:text-ink"
          >
            Read the longer bios
            <span
              className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
