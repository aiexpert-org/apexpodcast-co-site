import Link from '@/components/ui/smart-link'
import { cn } from '@/lib/utils'
import type { CaseStudy } from '@/lib/case-studies'

/**
 * Album-art-frame card for a case study. Used on Home (featured trio), /work/,
 * and /network/ (cohort). `size="lg"` is the larger editorial variant for /work/.
 */
export default function CaseStudyCard({
  study,
  size = 'md',
  headingAs = 'h3',
  className,
}: {
  study: CaseStudy
  size?: 'md' | 'lg'
  /** h2 where the cards are the page's top-level sections (/work/), else h3. */
  headingAs?: 'h2' | 'h3'
  className?: string
}) {
  const Heading = headingAs
  return (
    <Link
      href={`/work/${study.slug}/`}
      className={cn(
        'group flex flex-col rounded-2xl border border-ink/10 bg-bone p-7 transition-colors duration-200 hover:border-ink/30',
        size === 'lg' && 'p-9',
        className,
      )}
    >
      {/* Cover plate: the catalog mark on an ink ground, album-sleeve proportion */}
      <div className="flex aspect-[4/3] items-end rounded-xl bg-ink p-6">
        <span className="catalog text-acid">{study.catalog}</span>
      </div>

      <div className="mt-6 flex grow flex-col">
        <Heading className={cn('font-display text-ink', size === 'lg' ? 'text-2xl' : 'text-xl')}>
          {study.host}
        </Heading>
        {study.show && (
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/65">{study.show}</p>
        )}
        <p className="mt-3 grow text-sm text-ink/70">{study.positioning}</p>
        <span className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink">
          Read the case study
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  )
}
