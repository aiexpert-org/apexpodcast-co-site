import { Reveal } from '@/components/motion/reveal'
import GhlIntakeForm from '@/components/forms/ghl-intake-form'

/**
 * Intake band. The GHL signup surface, used below the home hero and on each
 * service page. `defaultService` pre-selects the dropdown when the band sits on a
 * specific offer page.
 */
export default function IntakeBand({
  id = 'start',
  eyebrow = 'Start here',
  heading = 'Tell us what you want to launch.',
  blurb = 'Two minutes. You tell us what you are building and which offer fits. A producer picks it up from there. No pitch deck, no obligation.',
  defaultService,
  source = 'site_intake',
  tone = 'light',
}: {
  id?: string
  eyebrow?: string
  heading?: string
  blurb?: string
  defaultService?:
    | 'The Prepisode ($997)'
    | 'Your Weekly Show ($2,997 per cycle)'
    | 'Multi-Tenant Pipeline License ($2,997/mo)'
    | 'Not sure yet'
  source?: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <section id={id} className={dark ? 'section bg-ink text-bone' : 'section bg-bone'}>
      <div className="container-apex grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <Reveal>
            <p className={dark ? 'eyebrow-acid' : 'eyebrow'}>{eyebrow}</p>
            <h2 className={`h-section mt-4 ${dark ? 'text-bone' : 'text-ink'}`}>{heading}</h2>
            <p className={`mt-5 ${dark ? 'text-bone/70' : 'text-ink/75'}`}>{blurb}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <GhlIntakeForm defaultService={defaultService} source={source} tone={tone} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
