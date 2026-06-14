import Link from '@/components/ui/smart-link'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Your First Episode',
    price: '$997 one-time',
    body: 'One produced episode, the Pentatype assessment, a 90-minute strategy session, branded cover art, distribution under the Apex Podcast Network feed, and twelve months of network membership.',
    href: '/your-first-episode/',
    cta: 'See the scope',
    dark: false,
  },
  {
    name: 'Your Weekly Show',
    price: '$2,997 per 28-day cycle',
    body: 'Up to four produced episodes per cycle, recording sessions with a producer in the room, full distribution under the Apex Podcast Network feed, a per-episode producer debrief, network coordination, and the block-analysis audit every eight episodes.',
    href: '/your-weekly-show/',
    cta: 'See the scope',
    dark: true,
  },
  {
    name: 'Multi-Tenant Pipeline License',
    price: '$2,997/mo or $29,970/yr',
    body: 'Run the Apex production pipeline under your own brand, for your own roster. The method, the Pentatype assessment, the templates, and a multi-tenant control plane. NDA required. Real-estate and eXp roster excluded.',
    href: '/multi-tenant-pipeline-license/',
    cta: 'See the license',
    dark: false,
  },
]

export default function TierTeaser() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Three ways in</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-5 text-ink">
              Launch a show, run one as a body of work, or license the pipeline.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">
              The ladder is intentional. Your First Episode is the gateway. Your Weekly Show is the
              retention vehicle. The Multi-Tenant Pipeline License is how the method travels past our
              capped roster. The first two carry the same three things: a producer in the room, the
              network around the show, and the Pentatype mapping that tunes the show to you.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                {tier.dark && (
                  <p className="mt-5 font-mono text-xs uppercase tracking-widest text-bone/55">
                    First five Weekly Show clients lock at $2,997 for twenty-four months.
                  </p>
                )}
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
