import type { Episode } from '@/lib/episodes'

/**
 * Episode card for The Apex Podcast. Built to receive real Transistor data;
 * renders placeholder markers cleanly until then. Listen CTA per card.
 */
export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-ink/12 bg-bone p-7">
      {/* mini cover plate with episode number */}
      <div className="flex aspect-[4/3] items-end rounded-2xl bg-ink p-5 ring-1 ring-acid/15">
        <span className="font-mono text-xs uppercase tracking-widest text-acid">
          Ep {String(episode.n).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-5 flex grow flex-col">
        <h3 className="font-display text-lg text-ink">{episode.title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/65">
          {episode.duration} · {episode.date}
        </p>
        <p className="mt-3 grow text-sm text-ink/70">{episode.blurb}</p>
        <a
          href={episode.listenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink"
        >
          Listen
          <span
            className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  )
}
