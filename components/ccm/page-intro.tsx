import { cn } from '@/lib/utils'
import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'

/**
 * CCM page header. Eyebrow + display title + lead. No decorative mosaic — that
 * was removed in the original CCM port.
 */
export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container className={cn('mt-8 pb-12 sm:mt-12 sm:pb-20 lg:mt-16 lg:pb-28', centered && 'text-center')}>
      <FadeIn>
        <h1>
          {eyebrow && (
            <span className="block font-display text-base font-semibold tracking-wider text-[var(--color-cta)] uppercase">
              {eyebrow}
            </span>
          )}
          <span
            className={cn(
              'mt-6 block max-w-5xl font-display text-[2.75rem] leading-[1.05] font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-[4rem] lg:leading-[1.1]',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        {children && (
          <div
            className={cn(
              'mt-6 max-w-3xl text-xl text-neutral-600',
              centered && 'mx-auto',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
