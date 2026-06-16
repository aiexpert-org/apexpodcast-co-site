import Link from '@/components/ui/smart-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { SHOWS, hostLine, type Show } from '@/lib/shows'

/**
 * The Portfolio grid: 24 shows as cover-art tiles. Covers rest desaturated and
 * warm to full color on hover (the CCM gallery move, recast for podcasts).
 * Real, human-hosted shows link to their case study; Apex Network productions
 * carry "From the Apex Podcast Network" with no fabricated host.
 */
function ShowCard({ show }: { show: Show }) {
  const inner = (
    <>
      <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-ink/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={show.cover}
          alt={`${show.title} cover art`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale-[0.55] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
        {show.status === 'production' ? (
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-acid">
            In production
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
          <span>{show.catalog}</span>
        </div>
        <h3 className="mt-1 font-display text-lg leading-tight tracking-tight text-ink">
          {show.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink/60">{hostLine(show)}</p>
      </div>
    </>
  )

  if (show.caseStudy) {
    return (
      <Link
        href={`/case-studies/${show.slug}/`}
        className="group block focus-visible:outline-none"
      >
        {inner}
      </Link>
    )
  }
  return <div className="group block">{inner}</div>
}

export default function ShowGrid() {
  return (
    <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {SHOWS.map((show) => (
        <RevealItem key={show.slug}>
          <ShowCard show={show} />
        </RevealItem>
      ))}
    </RevealStagger>
  )
}

export { ShowCard }
