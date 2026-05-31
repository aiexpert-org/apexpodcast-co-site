import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import CaseStudyCard from '@/components/ui/case-study-card'
import { caseStudies } from '@/lib/case-studies'

export default function FeaturedWork() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">The work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-5 text-ink">Three shows in active production.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">
              The Apex catalog opened in 2026 with three artists. Each one is in production now, with
              episodes released, producer debriefs written, and the network feed active.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <RevealItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} className="h-full" />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
