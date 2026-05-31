import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Light teaser into /network/. Does not duplicate the network page.
 * NOTE: "12 shows" is Brett's stated count; the last verified Transistor crawl
 * (2026-05-19) was 11 (9 active). Confirm the current number.
 */
export default function NetworkTeaser() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow-acid">The network.</p>
              <h2 className="h-section mt-4 text-bone">
                12 shows on the Apex Podcast Network
                <span className="text-acid">.</span>
              </h2>
              <p className="mt-5 text-bone/70">
                The Apex Podcast is one show in a feed where every release carries the others. The
                network is the multiplier on the work.
              </p>
            </div>
            <CtaLink href="/network/" variant="ghost-dark" arrow className="shrink-0">
              See the network
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
