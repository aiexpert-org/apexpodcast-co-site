import Link from '@/components/ui/smart-link'
import ShowCover from '@/components/ui/show-cover'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { FLAGSHIP_SHOWS } from '@/lib/shows'

/**
 * Selected Work. CCM case-study-card pattern, ported to the Apex catalog.
 *
 * Three productions, in display order: Sweeter After Difficulty (Randy),
 * Winning Twice (Austin Cheviron), The Russ Laggan Podcast (Russ Laggan).
 * Each card: cover + artist name + brief artist statement + "Listen" out to
 * the show's Transistor page. No internal case-study deep dives in this
 * pass — the network page carries the catalog and the cards link out to
 * listening directly.
 */
export default function SelectedWork() {
  return (
    <section className="section bg-bone text-ink">
      <div className="container-apex">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              Selected work
            </p>
            <h2 className="mt-4 h-section text-ink">
              Three shows
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ink/70">
              The Apex catalog. Each show is produced in the room, with a real
              producer on every session, and published on the Apex Podcast
              Network feed.
            </p>
          </div>
          <Link
            href="/network/"
            className="group inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink/70 hover:text-ink"
          >
            See the full network
            <span
              className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </Reveal>

        <RevealStagger className="grid gap-10 lg:grid-cols-3">
          {FLAGSHIP_SHOWS.map((show) => (
            <RevealItem key={show.slug}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-ink/10">
                  <ShowCover show={show} />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-acid/0 mix-blend-multiply transition duration-500 group-hover:bg-acid/12"
                  />
                </div>

                <div className="mt-6 flex grow flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink/55">
                    {show.catalog} / {show.host}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-ink">
                    {show.title}
                  </h3>
                  <p className="mt-4 grow text-ink/70">{show.excerpt}</p>
                  <div className="mt-6">
                    <a
                      href={show.listenUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/listen inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink hover:text-acid"
                    >
                      Listen
                      <span
                        className="ml-2 transition-transform duration-200 group-hover/listen:translate-x-0.5"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
