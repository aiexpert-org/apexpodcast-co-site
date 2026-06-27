import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import FooterCta from '@/components/sections/footer-cta'

export const metadata: Metadata = {
  title: 'Producers',
  description:
    'Brett K Moore and Randy Highsmith. The producers behind every Apex show. Two seats, one room, the work happens together.',
  alternates: { canonical: '/producers/' },
}

/**
 * Producers page. Brett K Moore + Randy Highsmith long-form bios, verbatim
 * from the 2026-06-18 spec. Photos are placeholders for now (existing brand
 * assets in repo); the layout follows the CCM Producer/Founder pattern.
 */
const PRODUCERS = [
  {
    slug: 'brett-k-moore',
    name: 'Brett K Moore',
    role: 'Co-founder. Architect of the Pentatype.',
    bio: 'Architect of the Pentatype. Built the communication assessment that shows hosts, guests, and audiences how they actually process the world. The Pentatype is how Apex thinks about voice, audience, and show fit before a single episode gets recorded.',
    image: '/covers/cover-04-pentatype.webp',
  },
  {
    slug: 'randy-highsmith',
    name: 'Randy Highsmith',
    role: 'Co-founder. Former Director of Podcast Production at eXp Realty.',
    bio: 'Former Director of Podcast Production at eXp Realty. Worked directly with Glenn Sanford (founder) and Leo Pareja (CEO). Produced Big Agent Meeting alongside Russ Laggan. Built and ran podcast roster operations for one of the largest real estate networks in the world before co-founding Apex.',
    image: '/covers/cover-05-label.webp',
  },
]

export default function ProducersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-bone pt-36 text-ink md:pt-44">
        <div className="container-apex">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              The producers
            </p>
            <h1 className="display mt-5 text-ink">
              Two producers. One room
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink/75">
              The work happens together on every session. The Pentatype on one
              side, decades of real-room production on the other, and a
              willingness to sit in the long pause when the conversation needs
              it.
            </p>
          </Reveal>

          <div className="mt-24 space-y-24 md:mt-32">
            {PRODUCERS.map((p, i) => (
              <Reveal key={p.slug}>
                <article
                  id={p.slug}
                  className={
                    'grid items-start gap-10 border-t border-ink/15 pt-10 lg:gap-16 ' +
                    (i % 2 === 0
                      ? 'lg:grid-cols-[1fr_1.4fr]'
                      : 'lg:grid-cols-[1.4fr_1fr]')
                  }
                >
                  <div
                    className={
                      'relative aspect-square w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-ink/10 ' +
                      (i % 2 === 0 ? 'lg:order-1' : 'lg:order-2')
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/85 px-3 py-2 text-bone backdrop-blur-sm"
                    >
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em]">
                        {p.name}
                      </span>
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-acid">
                        Apex Co
                      </span>
                    </div>
                  </div>

                  <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                      {p.name}
                    </h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/55">
                      {p.role}
                    </p>
                    <p className="mt-6 text-lg text-ink/75">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="h-32" />
        </div>
      </section>

      <FooterCta source="producers-footer" />
    </>
  )
}
