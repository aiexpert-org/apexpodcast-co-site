import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Light services teaser. The last content band on the home page, kept
 * deliberately small. CTA into /services/ (the "hire Apex" path).
 */
export default function ServicesTeaser() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-ink/12 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <p className="eyebrow">For operators and founders.</p>
              <h2 className="h-sub mt-3 text-ink">We also produce shows for others.</h2>
              <p className="mt-4 text-ink/70">
                A producer in the room, the Apex Podcast Network around the release, and the Pentatype
                mapping that tunes a show to its host. Two ways in.
              </p>
            </div>
            <CtaLink href="/services/" variant="ghost-light" arrow className="shrink-0">
              See how it works
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
