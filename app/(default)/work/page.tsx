import type { Metadata } from 'next'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import CaseStudyCard from '@/components/ui/case-study-card'
import NetworkRollupStrip from '@/components/sections/network-rollup-strip'
import ClosingCta from '@/components/sections/closing-cta'
import { caseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'The Apex catalog opened in 2026 with Austin Cheviron and Russ Laggan. Two shows, two audiences, one production standard. A producer in the room on every show.',
  alternates: { canonical: '/work/' },
}

export default function WorkPage() {
  return (
    <>
      {/* Page intro */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">The catalog.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Two shows. One producer in the room on every one
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            The Apex catalog opened in 2026 with Austin and Russ. Two different hosts, two different
            audiences, one production standard. A producer at every session. A Pentatype profile under
            every show. A place on the Apex Podcast Network feed for every release.
          </p>
        </div>
      </section>

      {/* The two case studies */}
      <section className="section bg-bone">
        <div className="container-apex">
          <RevealStagger className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug} className="flex">
                <CaseStudyCard study={study} size="lg" headingAs="h2" className="w-full" />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <NetworkRollupStrip />

      <ClosingCta headline="Want a third catalog entry?" />
    </>
  )
}
