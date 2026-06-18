import Link from '@/components/ui/smart-link'
import TapMark from '@/components/ui/tap-mark'
import JoinWaitlistButton from '@/components/ui/join-waitlist'
import ShowCover from '@/components/ui/show-cover'
import { FLAGSHIP_SHOWS } from '@/lib/shows'

/**
 * Home hero. CCM hero pattern, recolored to Apex.
 *
 * Left column: short brand-forward copy + the locked CTA pair (Waitlist
 * primary, Pentatype assessment secondary).
 *
 * Right column: a three-cover photo grid. Cover art from the three Selected
 * Work productions (Sweeter After Difficulty, Winning Twice, The Russ Laggan
 * Podcast). Each cover desaturates by default and lights up to full color on
 * hover, in the CCM idiom recolored for Apex.
 */
export default function HomeHero() {
  const featured = FLAGSHIP_SHOWS
  return (
    <section className="relative isolate overflow-hidden bg-bone text-ink">
      <div className="container-apex relative">
        <div className="grid items-center gap-12 pt-36 pb-20 sm:pb-24 md:pt-44 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <TapMark className="h-5 w-5" />
              <p className="font-mono text-xs uppercase tracking-widest text-ink/65">
                Apex Podcast Co
              </p>
            </div>

            <h1 className="display mt-6 text-ink">
              We produce podcasts for serious artists, founders, and operators
              <span className="text-acid">.</span>
            </h1>

            <p className="lead mt-7 max-w-xl text-ink/75">
              A boutique production company. A producer in the room on every
              session. A network around your show.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <JoinWaitlistButton source="home-hero-primary" />
              <Link
                href="#pentatype"
                className="btn btn-ghost-light group"
              >
                Take the free Pentatype assessment
                <span
                  className="ml-2 transition-transform duration-200 ease-out group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  &darr;
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <CoverTriptych />
          </div>
        </div>
      </div>
    </section>
  )
}

function CoverTriptych() {
  return (
    <div
      className="relative mx-auto grid w-full max-w-md grid-cols-3 gap-3 sm:gap-4"
      aria-hidden={false}
    >
      {FLAGSHIP_SHOWS.map((show, i) => (
        <div
          key={show.slug}
          className={
            'group relative aspect-square overflow-hidden rounded-xl ring-1 ring-ink/10 ' +
            (i === 1 ? 'translate-y-6' : '')
          }
        >
          <div className="absolute inset-0 transition duration-500 group-hover:saturate-150">
            <ShowCover show={show} priority={i < 2} />
          </div>
          {/* Acid wash on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-acid/0 mix-blend-multiply transition duration-500 group-hover:bg-acid/15"
          />
          {/* Catalog label */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-2 py-1.5 text-bone backdrop-blur-sm">
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em]">
              {show.catalog}
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-acid">
              Listen
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
