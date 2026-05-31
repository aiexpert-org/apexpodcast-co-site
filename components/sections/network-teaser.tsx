import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Network as a feature for the host, surfaced mid-scroll (not a headline flex).
 * Framed around the host's benefit: their release does not go out alone.
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
                Your release does not go out alone
                <span className="text-acid">.</span>
              </h2>
              <p className="mt-5 text-bone/70">
                Your show joins the Apex Podcast Network, where the other hosts help carry it and
                their spheres meet yours. A guest on one show is a warm introduction on the next.
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
