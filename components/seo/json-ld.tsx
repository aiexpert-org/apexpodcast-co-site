import { buildGraph } from '@/lib/structured-data'

/**
 * Site-wide JSON-LD. Renders the cross-linked Organization + Person + WebSite
 * @graph. Server component; emitted once per page from the default layout.
 */
export default function JsonLd() {
  const graph = buildGraph()
  return (
    <script
      type="application/ld+json"
      // schema.org JSON-LD; content is fully controlled, no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
