import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Light teaser into /network/ (STRATEGY-V2 §3). The Apex Podcast is one of the
 * twelve shows Apex produces. Surfaced near the bottom, not as a headline flex.
 */
export default function NetworkTeaser() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">The network</p>
              <h2 className="h-section mt-4 text-ink">
                The Apex Podcast is one of twelve
                <span className="text-acid">.</span>
              </h2>
              <p className="mt-5 text-ink/70">
                We produce twelve shows inside the Apex Catalog. Every release helps carry the
                others, and every sphere meets the next.
              </p>
            </div>
            <CtaLink href="/network/" variant="ghost-light" arrow className="shrink-0">
              See the network
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
