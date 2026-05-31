'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

/**
 * FAQ accordion built on Headless UI Disclosure (keyboard-accessible, ARIA
 * handled by the primitive). Used on /services/launch/ and /services/managed/.
 */
export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <Disclosure key={item.q} as="div">
          <DisclosureButton className="group flex w-full items-center justify-between gap-6 py-5 text-left">
            <span className="font-display text-lg text-ink">{item.q}</span>
            <span
              className="relative h-4 w-4 shrink-0 text-ink/50 transition-colors group-hover:text-ink"
              aria-hidden="true"
            >
              <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-200 group-data-open:rotate-90 group-data-open:opacity-0" />
            </span>
          </DisclosureButton>
          <DisclosurePanel className="pb-6 pr-10 text-ink/70">{item.a}</DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  )
}
