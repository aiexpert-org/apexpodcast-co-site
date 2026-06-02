import { Reveal } from '@/components/motion/reveal'

/**
 * The locked show thesis (STRATEGY-V2 §1). Brett's sentence is the spine; the
 * site repeats it. Displayed prominently right below the hero.
 */
export default function ShowThesis() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <p className="eyebrow">What the show is</p>
          <blockquote className="mt-6 max-w-4xl">
            <p className="font-display tracking-tight leading-[1.12] text-ink text-[clamp(1.6rem,2.6vw+1rem,2.75rem)]">
              A podcast that means something to the host, means something to the guests, means
              something to the audience, and creates{' '}
              <span className="text-acid">connection</span> with all of those elements.
            </p>
          </blockquote>
          <p className="mt-7 font-mono text-xs uppercase tracking-widest text-ink/65">
            That is the test. Every episode passes it, or it does not ship.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
