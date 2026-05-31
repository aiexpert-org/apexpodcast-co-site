import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const contentType = 'image/png'

/** Favicon set per BRAND-GUIDE §6: the `a.` monogram, acid on warm ink, at 32 and 192. */
export function generateImageMetadata() {
  return [
    { id: 'sm', size: { width: 32, height: 32 }, contentType: 'image/png' },
    { id: 'lg', size: { width: 192, height: 192 }, contentType: 'image/png' },
  ]
}

export default async function Icon({ id }: { id: string }) {
  const archivo = await readFile(join(process.cwd(), 'app/_fonts/ArchivoBlack-Regular.ttf'))
  const px = id === 'lg' ? 192 : 32
  const fontSize = Math.round(px * 0.72)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14140F',
          fontFamily: 'Archivo Black',
          fontSize,
          letterSpacing: '-0.04em',
          paddingBottom: Math.round(px * 0.08),
        }}
      >
        <span style={{ color: '#BFD93B' }}>a.</span>
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: 'Archivo Black', data: archivo, weight: 400, style: 'normal' }],
    },
  )
}
