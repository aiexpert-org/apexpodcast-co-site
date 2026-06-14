import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'
import { siteConfig } from '@/lib/site-config'

/**
 * Closing discovery CTA. Used at the foot of every marketing page with a
 * page-specific headline (COPY-SPEC global discovery CTA card).
 */
export default function ClosingCta({
  headline = 'A 20-minute call is enough to know if Apex fits.',
}: {
  headline?: string
}) {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-bone md:px-14 md:py-20">
            <div
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-acid/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative max-w-3xl">
              <h2 className="h-section text-bone">{headline}</h2>
              <p className="mt-5 text-bone/70">
                A 20-minute call with one of the producers. We ask what you are building. We tell you
                what an Apex show would look like for you.
              </p>
              <div className="mt-8">
                <CtaLink href={siteConfig.discoveryUrl} variant="primary" arrow>
                  Book a discovery call
                </CtaLink>
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-bone/55">
                You will be matched with a producer based on what you are working on.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
