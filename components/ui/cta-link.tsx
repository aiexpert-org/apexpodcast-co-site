import SmartLink from '@/components/ui/smart-link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost-light' | 'ghost-dark'

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  'ghost-light': 'btn-ghost-light',
  'ghost-dark': 'btn-ghost-dark',
}

/**
 * Pill CTA link. `arrow` appends the editorial right-arrow used across the copy
 * spec. External targets (mailto, http) get a plain <a>; internal routes use
 * next/link.
 */
export default function CtaLink({
  href,
  children,
  variant = 'primary',
  arrow = false,
  size = 'md',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  arrow?: boolean
  size?: 'sm' | 'md'
  className?: string
}) {
  const classes = cn(size === 'sm' ? 'btn-sm' : 'btn', variantClass[variant], 'group', className)
  const inner = (
    <>
      {children}
      {arrow && (
        <span className="ml-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true">
          &rarr;
        </span>
      )}
    </>
  )

  const isExternal = /^(https?:|mailto:|tel:)/.test(href)
  if (isExternal) {
    return (
      <a className={classes} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {inner}
      </a>
    )
  }

  return (
    <SmartLink className={classes} href={href}>
      {inner}
    </SmartLink>
  )
}
