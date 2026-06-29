import Link from '@/components/ui/smart-link'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'The Prepisode',
    price: '$997 one-time',
    body: 'One produced episode in your feed within two weeks. The whole craft, just for one. Credited in full if you keep going.',
    href: '/the-prepisode/',
    cta: 'Try one episode',
    dark: false,
  },
  {
    name: 'Your Weekly Show',
    price: '$2,997 per cycle',
    body: 'The show, ongoing. Show up to record. Every step before and after is on us. Up to four episodes a cycle, same price.',
    href: '/your-weekly-show/',
    cta: 'Run the show',
    dark: true,
  },
  {
    name: 'Apex Podcast Network',
    price: '$997 per cycle',
    body: 'You already publish. We put a network around it. Social cut-downs, guest swaps, a place inside the Apex feed.',
    href: '/apex-podcast-network/',
    cta: 'Amplify what you publish',
    dark: false,
  },
]

export default function TierTeaser() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">The work, three ways</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-5 text-ink">
              Try one episode. Run the show. Or put a network behind one you already publish.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-3xl border p-8 md:p-10',
                  tier.dark ? 'border-ink bg-ink text-bone' : 'border-ink/12 bg-bone text-ink',
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="h-sub">{tier.name}</h3>
                  <span
                    className={cn(
                      'font-mono text-xs uppercase tracking-widest',
                      tier.dark ? 'text-acid' : 'text-ink/60',
                    )}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className={cn('mt-5 grow', tier.dark ? 'text-bone/70' : 'text-ink/70')}>
                  {tier.body}
                </p>
                <Link
                  href={tier.href}
                  className={cn(
                    'group mt-7 inline-flex items-center font-mono text-xs uppercase tracking-widest',
                    tier.dark ? 'text-acid' : 'text-ink',
                  )}
                >
                  {tier.cta}
                  <span
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
