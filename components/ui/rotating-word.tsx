'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Randy's rotating-word hero device (STRATEGY-V2 §3.5). One headline doing six
 * ICP jobs. CSS-opacity crossfade, ~2.6s swap. Under prefers-reduced-motion it
 * locks to "sphere" (the brand-locked default word).
 */
const WORDS = ['sphere', 'tribe', 'niche', 'audience', 'passion', 'point of view'] as const

export default function RotatingWord({
  colorClass = 'text-acid',
}: {
  colorClass?: string
}) {
  const [i, setI] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Respect reduced motion at runtime (avoids SSR/hydration coupling).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setI((v) => (v + 1) % WORDS.length)
        setVisible(true)
      }, 240)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      className={cn('inline-block whitespace-nowrap', colorClass)}
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 240ms ease' }}
    >
      {WORDS[i]}
    </span>
  )
}
