import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Light pointer to the offer detail on /services/. Two clear ways to work with
 * Apex, stated plainly (no "premium/boutique/concierge" framing).
 */
export default function ServicesTeaser() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-ink/12 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <p className="eyebrow">Ways in</p>
              <h2 className="h-sub mt-3 text-ink">Launch one episode, or run a managed show.</h2>
              <p className="mt-4 text-ink/70">
                Start with one produced episode for $997, or run an ongoing show cycle by cycle. Same
                producers in the room either way.
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
