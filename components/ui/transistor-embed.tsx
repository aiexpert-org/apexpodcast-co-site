/**
 * Transistor episode player. Renders the embed iframe when a representative
 * episode URL has been captured for the show; otherwise renders an honest
 * placeholder. No episode URLs are captured for the 2026 catalog yet
 * (see PHASE2-CONTENT-NEEDED.md), so all three currently show the placeholder.
 */
export default function TransistorEmbed({
  embedUrl,
  show,
}: {
  embedUrl?: string
  show: string
}) {
  if (!embedUrl) {
    return (
      <div className="flex min-h-40 flex-col justify-center rounded-2xl border border-dashed border-ink/20 bg-bone px-6 py-8">
        <p className="font-mono text-xs uppercase tracking-widest text-ink/55">
          Representative release
        </p>
        <p className="mt-3 max-w-xl text-ink/70">
          A representative episode of {show} lands here from the Apex Podcast Network feed. We point
          to one release per show on launch and add more as the catalog fills in.
        </p>
      </div>
    )
  }

  return (
    <iframe
      title={`${show} on the Apex Podcast Network`}
      src={embedUrl}
      loading="lazy"
      width="100%"
      height="180"
      className="w-full rounded-2xl border border-ink/10"
    />
  )
}
