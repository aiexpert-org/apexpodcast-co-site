import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'
import { CASE_STUDY_SHOWS } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'The shows we produce. The hosts behind them. Real conversations, on the record.',
  alternates: { canonical: '/case-studies/' },
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The work"
        title="Shows that earned their hour."
      >
        <p>
          A handful of hosts. A handful of audiences. The same standard for the craft.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger faster>
          <ul
            role="list"
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CASE_STUDY_SHOWS.map((show) => (
              <FadeIn as="li" key={show.slug}>
                <Link
                  href={`/case-studies/${show.slug}/`}
                  className="group block overflow-hidden rounded-3xl ring-1 ring-neutral-900/10 transition hover:shadow-xl hover:shadow-neutral-900/5 hover:ring-neutral-900/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  {show.cover && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                      <Image
                        src={show.cover}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                      {show.host ? show.host : 'Host TBA'}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-700">
                      {show.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {show.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 group-hover:decoration-2">
                      Read the story
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      <ContactBlock heading="Want a show like these?" source="case-studies-index">
        <p>
          A producer will reach out personally.
        </p>
      </ContactBlock>
    </>
  )
}
