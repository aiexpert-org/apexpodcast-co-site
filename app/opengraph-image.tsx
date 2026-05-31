import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Apex Podcast Co. A producer in the room. A network around your show.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Default OG image: the apex. wordmark and positioning line, acid on ink. */
export default async function OpengraphImage() {
  const archivo = await readFile(join(process.cwd(), 'app/_fonts/ArchivoBlack-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#14140F',
          padding: '80px 88px',
          fontFamily: 'Archivo Black',
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, letterSpacing: '-0.03em', color: '#BFD93B' }}>
          apex.
        </div>
        <div
          style={{
            display: 'flex',
            color: '#FAF8F3',
            fontSize: 78,
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            maxWidth: 1040,
          }}
        >
          A producer in the room. A network around your show.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            letterSpacing: '0.18em',
            color: 'rgba(250,248,243,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Producers. Network. Cycle. Release.
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Archivo Black', data: archivo, weight: 400, style: 'normal' }] },
  )
}
