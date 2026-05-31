import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from '@/components/ui/smart-link'
import { Reveal } from '@/components/motion/reveal'
import TransistorEmbed from '@/components/ui/transistor-embed'
import ClosingCta from '@/components/sections/closing-cta'
import { caseStudies, getCaseStudy, getNextCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  const title = study.show ? `${study.show} · ${study.host}` : study.host
  return {
    title,
    description: study.positioning,
    alternates: { canonical: `/work/${study.slug}/` },
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow">{children}</h2>
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const producedBy = study.producer ?? 'Apex'
  const next = getNextCaseStudy(study.slug)

  return (
    <>
      {/* Cover. The page header is the album cover. */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="catalog text-acid">{study.catalog}</p>
              <h1 className="display mt-5 text-bone">
                {study.show ?? study.host}
                <span className="text-acid">.</span>
              </h1>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/75">
                {study.show ? `With ${study.host}` : 'Show title in production'} · Produced by{' '}
                {producedBy}
              </p>
            </div>
            {/* Album-sleeve plate */}
            <div className="lg:col-span-5">
              <div className="flex aspect-square w-full max-w-sm items-end rounded-3xl border border-acid/25 bg-acid/10 p-8 lg:ml-auto">
                <span className="font-display text-acid leading-none text-[clamp(2.5rem,7vw,4rem)]">
                  {study.catalog}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-bone">
        <div className="container-apex section grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-1">
            {/* The artist */}
            <Reveal>
              <div>
                <SectionLabel>The artist.</SectionLabel>
                <p className="mt-5 text-lg text-ink/80">{study.hostBio}</p>
                <p className="mt-5 text-ink/70">
                  {study.pentatype
                    ? `Pentatype profile: ${study.pentatype}.`
                    : `Every Apex show starts with the Pentatype assessment, the five-archetype mapping that tunes the show to its host. ${study.host}'s profile is mapped on intake.`}
                </p>
              </div>
            </Reveal>

            {/* The show */}
            <Reveal>
              <div className="mt-14">
                <SectionLabel>The show.</SectionLabel>
                <p className="mt-5 text-lg text-ink/80">{study.showPremise}</p>
              </div>
            </Reveal>

            {/* Producer note */}
            <Reveal>
              <div className="mt-14">
                <SectionLabel>Producer note.</SectionLabel>
                {study.producerNote ? (
                  <figure className="mt-5">
                    <blockquote className="font-display text-2xl leading-snug text-ink">
                      &ldquo;{study.producerNote.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/55">
                      {study.producerNote.producer} · On {study.producerNote.episodeTitle},{' '}
                      {study.producerNote.date}
                    </figcaption>
                  </figure>
                ) : (
                  <p className="mt-5 text-ink/70">
                    Every episode ships with a written producer debrief. One observation becomes the
                    social clip, the debrief line, and a candidate seat in The Debrief. The notes for{' '}
                    {study.show ?? `${study.host}'s show`} publish here as the catalog fills in.
                  </p>
                )}
              </div>
            </Reveal>

            {/* Representative release */}
            <Reveal>
              <div className="mt-14">
                <SectionLabel>A representative release.</SectionLabel>
                <div className="mt-5">
                  <TransistorEmbed
                    embedUrl={study.episodeEmbedUrl}
                    show={study.show ?? `${study.host}'s show`}
                  />
                </div>
              </div>
            </Reveal>

            {/* The audit */}
            <Reveal>
              <div className="mt-14">
                <SectionLabel>The audit.</SectionLabel>
                <p className="mt-5 text-ink/70">
                  {study.auditShipped
                    ? 'At eight episodes, every Apex show gets a written editorial read: themes covered, themes missed, host-to-guest ratio, sentiment arc, and a recommended guest list informed by what the show has and has not asked.'
                    : `The first block-analysis audit for ${
                        study.show ?? `${study.host}'s show`
                      } ships at episode eight. It covers themes, the host-to-guest ratio, the sentiment arc, and a recommended guest list informed by what the first eight episodes have and have not asked.`}
                </p>
              </div>
            </Reveal>

            {/* Host quote, only when signed off */}
            {study.hostQuote?.signedOff && (
              <Reveal>
                <div className="mt-14">
                  <SectionLabel>In {study.host.split(' ')[0]}&rsquo;s words.</SectionLabel>
                  <figure className="mt-5">
                    <blockquote className="font-display text-2xl leading-snug text-ink">
                      &ldquo;{study.hostQuote.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/55">
                      {study.host}
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* Next in the catalog */}
        <div className="container-apex pb-20 md:pb-28">
          <Link
            href={`/work/${next.slug}/`}
            className="group flex flex-col gap-2 rounded-3xl border border-ink/12 bg-ink p-8 text-bone transition-colors hover:border-acid/50 md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                Next in the catalog
              </p>
              <p className="mt-2 font-display text-2xl text-bone">
                {next.catalog} {next.show ?? next.host}
              </p>
              {next.show && (
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/65">
                  With {next.host}
                </p>
              )}
            </div>
            <span className="mt-4 inline-flex items-center font-mono text-xs uppercase tracking-widest text-acid md:mt-0">
              Read the case study
              <span
                className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      </article>

      <ClosingCta headline="Looking for a fourth catalog entry?" />
    </>
  )
}
