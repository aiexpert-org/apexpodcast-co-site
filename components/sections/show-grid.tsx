import Link from '@/components/ui/smart-link'
import { RevealStagger, RevealItem } from '@/components/motion/reveal'
import { SHOWS, hostLine, type Show } from '@/lib/shows'

/**
 * Show cards as cover-art tiles. Covers rest desaturated and warm to full color
 * on hover (the CCM gallery move, recast for podcasts). Human-hosted anchor
 * shows link to their case study and carry the host name; Apex Network shows
 * carry the category, the hit-comparable lane, and the AI-narration disclosure
 * with no fabricated host.
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
          className="absolute inset-0 h-full w-full object-cover opacity-95 grayscale-[0.5] transition duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {show.network && show.category ? (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-acid">
            {show.category}
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
          {show.catalog}
        </div>
        <h3 className="mt-1 font-display text-lg leading-tight tracking-tight text-ink">
          {show.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink/60">{hostLine(show)}</p>
        {show.network ? (
          <>
            <p className="mt-1.5 text-xs italic text-ink/55">{show.hitComparable}</p>
            <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-ink/35">
              Narrated with AI voice
            </p>
          </>
        ) : null}
      </div>
    </>
  )

  if (show.caseStudy) {
    return (
      <Link
        href={`/case-studies/${show.slug}/`}
        className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
      >
        {inner}
      </Link>
    )
  }
  return <div className="group block">{inner}</div>
}

export default function ShowGrid({ shows = SHOWS }: { shows?: Show[] }) {
  return (
    <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {shows.map((show) => (
        <RevealItem key={show.slug}>
          <ShowCard show={show} />
        </RevealItem>
      ))}
    </RevealStagger>
  )
}

export { ShowCard }
