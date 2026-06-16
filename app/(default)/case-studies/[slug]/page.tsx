import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/ui/page-hero'
import ContactBlock from '@/components/sections/contact-block'
import CtaLink from '@/components/ui/cta-link'
import { Reveal } from '@/components/motion/reveal'
import { CASE_STUDY_SHOWS, getShow, hostLine } from '@/lib/shows'
import { siteConfig } from '@/lib/site-config'

export function generateStaticParams() {
  return CASE_STUDY_SHOWS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const show = getShow(slug)
  if (!show) return {}
  return {
    title: show.title,
    description: show.excerpt,
    alternates: { canonical: `/case-studies/${show.slug}/` },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const show = getShow(slug)
  if (!show || !show.caseStudy) notFound()

  return (
    <>
      <PageHero
        eyebrow={`Cat. No. ${show.catalog}`}
        title={
          <>
            {show.title}
            <span className="text-acid">.</span>
          </>
        }
      >
        Hosted by {hostLine(show)}. A producer in the room on every session.
      </PageHero>

      <section className="section">
        <div className="container-apex">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-3xl ring-1 ring-ink/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={show.cover}
                  alt={`${show.title} cover art`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="lg:pt-6">
              <p className="eyebrow-acid">The show</p>
              <p className="lead mt-5 text-ink/80">{show.excerpt}</p>
              <p className="mt-6 text-ink/70">
                Every episode runs through the Apex standard: the Pentatype assessment tunes the show
                to how {show.host ?? 'the host'} communicates, a producer is in the room for every
                recording, and the finished bundle goes out on its own feed and onto the Apex Podcast
                Network.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaLink href={siteConfig.listen.anywhere} variant="primary">
                  Listen to the show
                </CtaLink>
                <CtaLink href="/portfolio/" variant="ghost-light" arrow>
                  See the full catalog
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBlock source={`case-study-${show.slug}`}>
        <p>
          Want a show produced like {show.title}? Apex takes on a small number each cycle. Drop your
          name and a producer will reach out when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
