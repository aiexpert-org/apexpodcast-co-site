'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Reveal-on-scroll. CCM parity: 24px lift, 500ms duration, viewport margin
 * `0px 0px -120px` so reveals trigger 120px before the bottom edge. Collapses
 * to a plain render under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -120px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </MotionTag>
  )
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const groupVariantsFaster: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/** Staggered group wrapper. Pair with RevealItem children. */
export function RevealStagger({
  children,
  className,
  faster = false,
}: {
  children: ReactNode
  className?: string
  faster?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={faster ? groupVariantsFaster : groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -120px' }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
