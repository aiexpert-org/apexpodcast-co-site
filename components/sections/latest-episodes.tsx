import ListenButtons from '@/components/ui/listen-buttons'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import EpisodeCard from '@/components/ui/episode-card'
import { episodes, episodesPublished } from '@/lib/episodes'

/**
 * Latest episodes of The Apex Podcast (STRATEGY-V2 §3). Scaffold cards until the
 * Transistor feed is wired; EpisodeCard renders real data the moment it lands.
 */
export default function LatestEpisodes() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-acid">The show</p>
              <h2 className="h-section mt-4 text-bone">Latest episodes.</h2>
            </div>
            {!episodesPublished && (
              <p className="font-mono text-xs uppercase tracking-widest text-bone/55 md:max-w-xs md:text-right">
                The feed wires to Transistor next. Placeholder cards for now.
              </p>
            )}
          </div>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
          {episodes.map((ep) => (
            <RevealItem key={ep.n} className="flex">
              <EpisodeCard episode={ep} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-10">
            <ListenButtons tone="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
