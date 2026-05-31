import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/** Apple touch icon: the `a.` monogram, acid on warm ink (BRAND-GUIDE §5.2). */
export default async function AppleIcon() {
  const archivo = await readFile(join(process.cwd(), 'app/_fonts/ArchivoBlack-Regular.ttf'))

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
          fontSize: 128,
          letterSpacing: '-0.04em',
          paddingBottom: 14,
        }}
      >
        <span style={{ color: '#BFD93B' }}>a.</span>
      </div>
    ),
    { ...size, fonts: [{ name: 'Archivo Black', data: archivo, weight: 400, style: 'normal' }] },
  )
}
