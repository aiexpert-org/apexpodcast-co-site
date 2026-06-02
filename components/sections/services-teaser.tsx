import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'

/**
 * Light services teaser (STRATEGY-V2 §1). The agency sits downstream of the show:
 * people listen, then want what the guests have. Near the bottom, deliberately small.
 */
export default function ServicesTeaser() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow-acid">Want what they have?</p>
              <h2 className="h-sub mt-3 text-bone">We produce shows end to end.</h2>
              <p className="mt-4 text-bone/70">
                Once you have heard how we make the show, the rest is simple. Launch one episode, or
                run a managed show cycle by cycle. Same hosts in the room either way.
              </p>
            </div>
            <CtaLink href="/services/" variant="ghost-dark" arrow className="shrink-0">
              See how it works
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
