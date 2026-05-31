import Link from '@/components/ui/smart-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import EpisodeCard from '@/components/ui/episode-card'
import { episodes, episodesPublished } from '@/lib/episodes'

/**
 * "The show in action" — recent episodes of The Apex Podcast. Scaffold cards
 * until the Transistor feed is wired. Carries the tertiary CTA: apply to be a guest.
 */
export default function ShowInAction() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">The show in action.</p>
              <h2 className="h-section mt-4 text-ink">Recent episodes.</h2>
            </div>
            {!episodesPublished && (
              <p className="font-mono text-xs uppercase tracking-widest text-ink/65 md:max-w-xs md:text-right">
                Episode list fills from the Transistor feed. Placeholder cards for now.
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
            <Link
              href="/contact/"
              className="group inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
            >
              Apply to be on the show
              <span
                className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
