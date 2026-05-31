'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Lenis smooth scroll, tuned to the locked polish-playbook defaults:
 * `lerp: 0.1`, `smoothWheel: true`, `syncTouch: false` (touch left native).
 * Disabled entirely under `prefers-reduced-motion`. Full scroll choreography
 * (GSAP pin/parallax) lands in Phase 4; this is the smooth-scroll base.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
    })
    // Exposed for tooling / debugging (e.g. programmatic scroll in QA).
    ;(window as unknown as { lenis?: Lenis }).lenis = lenis

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
