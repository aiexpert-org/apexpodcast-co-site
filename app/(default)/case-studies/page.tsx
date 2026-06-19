import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'
import { CASE_STUDY_SHOWS } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'The human-hosted shows in the Apex stable. The Apex Podcast, Sweeter After Difficulty, The Russ Laggan Podcast, and Winning Twice. A producer in the room on every one.',
  alternates: { canonical: '/case-studies/' },
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="The shows we produce, and the people behind them."
      >
        <p>
          Four human-hosted shows, four different audiences, one production
          standard. A producer at every session, a Pentatype profile under every
          show, and a place on the network for every release.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <ul
            role="list"
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CASE_STUDY_SHOWS.map((show) => (
              <li key={show.slug}>
                <Link
                  href={`/case-studies/${show.slug}/`}
                  className="group block rounded-3xl ring-1 ring-neutral-900/10 transition hover:shadow-xl hover:shadow-neutral-900/5 hover:ring-neutral-900/20"
                >
                  <div className="p-8">
                    <p className="font-display text-sm font-semibold tracking-wider text-[var(--color-cta)] uppercase">
                      {show.catalog} / {show.host ?? 'Host TBA'}
                    </p>
                    <h2 className="mt-6 font-display text-2xl font-medium tracking-tight text-neutral-950 group-hover:text-neutral-700">
                      {show.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {show.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 group-hover:decoration-2">
                      Read the story
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <ContactBlock heading="Want a show like these?" source="case-studies-index">
        <p>
          Apex takes on a small number each cycle. Drop your info and a producer
          will reach out when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
