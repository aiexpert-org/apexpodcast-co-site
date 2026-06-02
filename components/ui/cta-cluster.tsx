import ListenButtons from '@/components/ui/listen-buttons'
import CtaLink from '@/components/ui/cta-link'
import Link from '@/components/ui/smart-link'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/**
 * The locked four-CTA hierarchy (STRATEGY-V2 §2). Order never changes; visual
 * weight scales down by position:
 *   1 Listen (primary)  2 Pentatype (secondary)  3 Apply (tertiary)  4 Hire (quaternary)
 *
 * Apply currently routes to /contact/ until the dedicated /apply route ships.
 */
export default function CTACluster({
  tone = 'dark',
  className,
}: {
  tone?: 'dark' | 'light'
  className?: string
}) {
  const tertiary = tone === 'dark' ? 'text-bone/70' : 'text-ink/70'
  const quaternary = tone === 'dark' ? 'text-bone/55' : 'text-ink/65'

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {/* 1. primary: listen */}
      <ListenButtons tone={tone} />

      {/* 2. secondary: pentatype */}
      <div>
        <CtaLink
          href={siteConfig.pentatypeUrl}
          variant={tone === 'dark' ? 'ghost-dark' : 'ghost-light'}
          size="sm"
          arrow
        >
          Find your podcast voice in 4 minutes
        </CtaLink>
      </div>

      {/* 3. tertiary: apply  4. quaternary: hire */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
        <Link href="/contact/" className={cn('group inline-flex items-center', tertiary, 'hover:text-acid')}>
          Apply to be on the show
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            &rarr;
          </span>
        </Link>
        <Link href="/services/" className={cn(quaternary, 'hover:text-acid')}>
          Hire Apex
        </Link>
      </div>
    </div>
  )
}
