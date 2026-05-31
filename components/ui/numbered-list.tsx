import { RevealStagger, RevealItem } from '@/components/motion/reveal'

/**
 * Numbered editorial list used for "What is included" and timeline strips on the
 * tier pages. Catalog-style index numerals in ink (acid-on-bone is avoided per
 * the brand guide), title in display, body in muted ink.
 */
export default function NumberedList({
  items,
  columns = 2,
}: {
  items: { title: string; body: string }[]
  columns?: 1 | 2 | 3
}) {
  const cols =
    columns === 3 ? 'md:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'
  return (
    <RevealStagger className={`grid gap-x-10 gap-y-10 ${cols}`}>
      {items.map((item, i) => (
        <RevealItem key={item.title} className="flex gap-5">
          <span className="catalog shrink-0 text-ink/40" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-display text-lg text-ink">{item.title}</h3>
            <p className="mt-2 text-ink/70">{item.body}</p>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  )
}
