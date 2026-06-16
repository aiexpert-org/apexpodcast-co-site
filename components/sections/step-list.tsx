import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

export type Step = { number: string; title: string; body: string }

/**
 * Dark numbered step section, ported from the CCM StepList. Used on How It Works.
 * Ink ground, acid numbers, hairline rules between steps.
 */
export default function StepList({
  heading,
  intro,
  steps,
}: {
  heading: string
  intro?: string
  steps: Step[]
}) {
  return (
    <section className="section">
      <div className="container-apex">
        <div className="rounded-[2.5rem] bg-ink px-6 py-20 text-bone sm:px-16 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h-section text-bone">{heading}</h2>
            {intro ? <p className="lead mt-4 text-bone/65">{intro}</p> : null}
          </Reveal>

          <RevealStagger className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden rounded-2xl bg-bone/10">
            {steps.map((step) => (
              <RevealItem key={step.number} className="bg-ink">
                <div className="flex flex-col gap-3 px-6 py-8 sm:flex-row sm:gap-8 sm:px-10">
                  <span className="font-mono text-sm tracking-widest text-acid sm:w-16">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-bone">{step.title}</h3>
                    <p className="mt-3 text-bone/70">{step.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
