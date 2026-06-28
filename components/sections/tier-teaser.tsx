import Link from '@/components/ui/smart-link'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'The Prepisode',
    price: '$997 one-time',
    body: 'One produced episode that runs through the full PREP system. The Pentatype assessment, a 90-minute strategy session, branded cover art, distribution under the Apex Podcast Network feed, and twelve months of network membership.',
    href: '/the-prepisode/',
    cta: 'See the scope',
    dark: false,
  },
  {
    name: 'Your Weekly Show',
    price: '$2,997 per 28-day cycle',
    body: 'The full PREP system run every cycle. Up to four produced episodes per cycle, recording sessions with a producer in the room, full distribution under the Apex Podcast Network feed, a per-episode producer debrief, network coordination, and the block-analysis audit every eight episodes.',
    href: '/your-weekly-show/',
    cta: 'See the scope',
    dark: true,
  },
  {
    name: 'Apex Podcast Network',
    price: '$997 per 28-day cycle',
    body: 'Promote only, for podcast owners who already handle their own production. Socials repurposing from your published episode, bidirectional guest booking, and a place inside the Apex Podcast Network feed.',
    href: '/apex-podcast-network/',
    cta: 'See the offer',
    dark: false,
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
              The PREP system, bundled, modular, or licensed.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">
              Every Apex offer runs the PREP system. Prepare, Record + Edit + Publish, Promote. The
              Prepisode runs it once. Your Weekly Show runs it every cycle. Apex Podcast Network runs
              the Promote phase as a standalone for owners who already produce. The Multi-Tenant
              Pipeline License is how the system travels past our capped roster.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
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
