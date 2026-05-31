import CtaLink from '@/components/ui/cta-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import CaseStudyCard from '@/components/ui/case-study-card'
import { caseStudies } from '@/lib/case-studies'

/**
 * Proof: specific hosts on specific shows. Real roster, not a network flex.
 * Customer-hero framing (they had a sphere, now they have a show).
 */
export default function ShowInAction() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">The work.</p>
            <h2 className="h-section mt-4 text-ink">
              Hosts with a sphere. Shows in production
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Real people who already had an audience, now with a show that does the work while they
              sleep. Three of them, in production right now.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <RevealItem key={study.slug} className="flex">
              <CaseStudyCard study={study} className="w-full" />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <CtaLink href="/work/" variant="ghost-light" arrow className="mt-10">
            See the work
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
