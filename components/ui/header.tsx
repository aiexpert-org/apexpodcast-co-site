'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/ui/smart-link'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Wordmark from '@/components/ui/wordmark'
import AcidSwipe from '@/components/ui/acid-swipe'
import JoinWaitlistButton from '@/components/ui/join-waitlist'
import { primaryNav } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-bone/85 backdrop-blur-md border-b border-ink/10'
          : 'bg-bone/60 backdrop-blur-sm border-b border-transparent',
      )}
    >
      <div className="container-apex">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-16' : 'h-20',
          )}
        >
          {/* Wordmark */}
          <Link href="/" aria-label="Apex Podcast Co, home" className="shrink-0">
            <Wordmark tone="light" className="text-2xl" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {primaryNav.map((item) =>
              item.children ? (
                <Popover key={item.label} className="relative">
                  <PopoverButton className="group relative isolate inline-flex items-center gap-1 px-2 py-1 font-mono uppercase text-xs tracking-widest text-ink/70 hover:text-ink data-open:text-ink">
                    <AcidSwipe className="scale-x-0 opacity-0 transition-[transform,opacity] duration-[280ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100 group-hover:opacity-80 group-data-open:scale-x-100 group-data-open:opacity-80" />
                    <span className="relative z-10 inline-flex items-center gap-1">
                      {item.label}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-200 group-data-open:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    anchor="bottom start"
                    className="z-50 mt-3 w-52 rounded-2xl border border-ink/10 bg-bone p-2 shadow-xl shadow-ink/5 transition data-closed:opacity-0 data-closed:translate-y-1"
                  >
                    {({ close }) => (
                      <div className="flex flex-col">
                        <Link
                          href={item.href}
                          onClick={() => close()}
                          className="rounded-xl px-3 py-2 font-mono uppercase text-xs tracking-widest text-ink/60 hover:bg-ink/5 hover:text-ink"
                        >
                          Overview
                        </Link>
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => close()}
                            className="rounded-xl px-3 py-2 font-mono uppercase text-xs tracking-widest text-ink/70 hover:bg-ink/5 hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </PopoverPanel>
                </Popover>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative isolate inline-flex items-center px-2 py-1 font-mono uppercase text-xs tracking-widest text-ink/70 hover:text-ink"
                >
                  <AcidSwipe className="scale-x-0 opacity-0 transition-[transform,opacity] duration-[280ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100 group-hover:opacity-80" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <JoinWaitlistButton source="header" size="sm" />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-ink"
            onClick={() => setMobileOpen(true)}
            aria-label="Open primary navigation"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-bone" aria-hidden="true" />
        <DialogPanel className="fixed inset-0 z-50 flex flex-col">
          <div className="container-apex flex h-20 items-center justify-between">
            <Wordmark tone="light" className="text-2xl" />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="container-apex flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
            {primaryNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-display lowercase text-4xl tracking-tight text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-1 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-mono uppercase text-xs tracking-widest text-ink/65"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="container-apex pb-10">
            <JoinWaitlistButton source="mobile-nav" className="w-full" />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
