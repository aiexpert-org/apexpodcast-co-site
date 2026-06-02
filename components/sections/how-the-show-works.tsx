import CtaLink from '@/components/ui/cta-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * How the show works (STRATEGY-V2 §1 + §7.1). The recording is the conversation.
 * Two guest paths under one format, plus the two on-air craft segments.
 */
const paths = [
  {
    label: 'Path A',
    title: 'You already have a show.',
    body: 'We dig into what it means to you, what it means to your audience, and where the meaning and connection live in what you have already built. You leave with a sharper read on your own show, or with us producing it.',
  },
  {
    label: 'Path B',
    title: 'You do not have a show yet.',
    body: 'We explore what a show could mean, who it would serve, and where the meaning already lives in the work you do. You leave thinking about your show, or with us building it.',
  },
]

const segments = [
  {
    title: 'Your pentatype, live.',
    body: 'If you have not taken it yet, we run the pentatype assessment on air and read your result in the room, then map it straight to your show.',
  },
  {
    title: 'Best memory, worst memory.',
    body: 'Randy’s exercise. Two questions, intentionally heavy. What surfaces is what you find meaningful, and that is the substrate of what your show is about.',
  },
]

export default function HowTheShowWorks() {
  return (
    <section className="section bg-ink text-bone">
      <div className="container-apex">
        <Reveal>
          <p className="eyebrow-acid">How the show works</p>
          <h2 className="h-section mt-4 max-w-3xl text-bone">
            The recording is the conversation
            <span className="text-acid">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-bone/70">
            You come on as a guest. We find the show inside what you do. There is no separate sales
            call, because the episode is the call. It goes one of two ways.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {paths.map((p) => (
            <RevealItem key={p.label}>
              <div className="h-full rounded-3xl border border-bone/12 p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-acid">{p.label}</p>
                <h3 className="mt-3 font-display text-xl text-bone">{p.title}</h3>
                <p className="mt-3 text-bone/70">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="mt-14 font-mono text-xs uppercase tracking-widest text-bone/55">
            Two segments run on air
          </p>
        </Reveal>
        <RevealStagger className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-2">
          {segments.map((s) => (
            <RevealItem key={s.title} className="bg-ink p-8">
              <h3 className="font-display text-lg text-bone">{s.title}</h3>
              <p className="mt-2 text-bone/70">{s.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <CtaLink href="/contact/" variant="ghost-dark" arrow className="mt-12">
            Apply to be on the show
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
