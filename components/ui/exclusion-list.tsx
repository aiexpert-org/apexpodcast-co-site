/**
 * "What is not included" list. Plain, honest, hairline-divided rows with a
 * closing routing line underneath. Supports a dark tone for ink-background use.
 */
export default function ExclusionList({
  items,
  closingLine,
  tone = 'light',
}: {
  items: string[]
  closingLine?: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  const divide = dark ? 'divide-bone/15 border-bone/15' : 'divide-ink/10 border-ink/10'
  const text = dark ? 'text-bone/70' : 'text-ink/70'
  return (
    <div>
      <ul className={`divide-y border-y ${divide}`}>
        {items.map((item) => (
          <li key={item} className={`py-4 ${text}`}>
            {item}
          </li>
        ))}
      </ul>
      {closingLine && <p className={`mt-6 ${text}`}>{closingLine}</p>}
    </div>
  )
}
