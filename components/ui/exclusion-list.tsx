/**
 * "What is not included" list. Plain, honest, hairline-divided rows with a
 * closing routing line underneath.
 */
export default function ExclusionList({
  items,
  closingLine,
}: {
  items: string[]
  closingLine?: string
}) {
  return (
    <div>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {items.map((item) => (
          <li key={item} className="py-4 text-ink/70">
            {item}
          </li>
        ))}
      </ul>
      {closingLine && <p className="mt-6 text-ink/70">{closingLine}</p>}
    </div>
  )
}
