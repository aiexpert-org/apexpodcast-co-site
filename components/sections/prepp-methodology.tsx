import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { SectionIntro } from '@/components/ccm/section-intro'
import { preppPhases } from '@/lib/services'

/**
 * PREPP methodology section. Five phases (Prepare, Record, Edit, Publish,
 * Promote). Apex Podcast Co owns the first four. PodcastNetwork.org owns the
 * fifth. Partnership architecture surfaced as a methodology fact, not a SKU.
 *
 * Voice rules: no em dashes, no "X, not Y", no banned vocab, no emoji.
 */
export function PreppMethodology() {
  return (
    <section aria-labelledby="prepp-methodology-heading">
      <SectionIntro
        eyebrow="The PREPP methodology"
        title="Five phases. A clean partnership behind every show."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p id="prepp-methodology-heading">
          Apex owns the first four phases: Prepare, Record, Edit, Publish.
          PodcastNetwork.org owns the fifth: Promote. Customer journey is
          handled end-to-end across two specialist teams that run the same
          methodology. You can engage either or both.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <ol
            role="list"
            className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5"
          >
            {preppPhases.map((phase, idx) => (
              <FadeIn as="li" key={`${idx}-${phase.title}`}>
                <Border className="pt-8">
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)]">
                    {phase.partner ? 'Partner phase' : `Apex phase ${idx + 1}`}
                  </p>
                  <h3 className="mt-3 flex items-baseline gap-3 font-display text-2xl font-semibold tracking-tight text-neutral-950">
                    <span className="font-mono text-base text-neutral-400">
                      {phase.letter}
                    </span>
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {phase.body}
                  </p>
                  {phase.partner && (
                    <p className="mt-5 text-sm leading-6 text-neutral-700">
                      <a
                        href={phase.partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-[var(--color-cta)] underline-offset-4 transition hover:text-neutral-950"
                      >
                        {phase.partner.name}
                      </a>
                      <span className="block text-neutral-500">
                        {phase.partner.note}
                      </span>
                    </p>
                  )}
                </Border>
              </FadeIn>
            ))}
          </ol>
        </FadeInStagger>
      </Container>
    </section>
  )
}
