// Optimizes Apex podcast cover art from Drive into web-ready mosaic tiles.
// Run with CCM's installed sharp:  cd ~/Code/createmediagroup-site && node <thisfile>
// Outputs 640px webp tiles + solid brand-color tiles into the Apex public/covers dir.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const DRIVE =
  '/Users/brett/Library/CloudStorage/GoogleDrive-brett@brettkmoore.com/My Drive/Brett K Moore HQ/01-Businesses/Apex Podcast Co/brand'
const OUT = '/Users/brett/Code/apexpodcast-co-site/public/covers'

// Distinct square covers, in catalog order. Mapped to stable tile filenames.
const COVERS = [
  ['assets/transistor-cover-art-the-apex-podcast-3000x3000-2026-06-03.png', 'cover-01-apex.webp'],
  ['assets/transistor-cover-the-apex-podcast-v3-bold-3000x3000-2026-06-03.png', 'cover-02-bold.webp'],
  ['assets/transistor-cover-the-apex-podcast-v3-editorial-3000x3000-2026-06-03.png', 'cover-03-editorial.webp'],
  ['assets/transistor-cover-episode-001-pentatype-intro-3000x3000-2026-06-03.png', 'cover-04-pentatype.webp'],
  ['2026-05-29-acid-record-label-v1/production-pack/social-platforms/podcast-cover-3000x3000.png', 'cover-05-label.webp'],
  ['assets/cover-art-2026-06-05-brett-as-host/variant-a-acid-green-3000.png', 'cover-06-host-acid.webp'],
  ['assets/cover-art-2026-06-05-brett-as-host/variant-b-magenta-3000.png', 'cover-07-host-magenta.webp'],
  ['assets/cover-art-2026-06-05-brett-as-host/variant-c-gold-3000.png', 'cover-08-host-gold.webp'],
]

// Solid brand tiles, used sparingly in the grid for record-label rhythm.
const SOLIDS = [
  ['solid-acid.webp', { r: 191, g: 217, b: 59 }],
  ['solid-ink.webp', { r: 20, g: 20, b: 15 }],
  ['solid-stone.webp', { r: 196, g: 189, b: 177 }],
]

const SIZE = 640

await mkdir(OUT, { recursive: true })

for (const [rel, name] of COVERS) {
  const isPhoto = name.includes('host')
  await sharp(`${DRIVE}/${rel}`)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .webp({ quality: isPhoto ? 70 : 76 })
    .toFile(`${OUT}/${name}`)
  console.log('tile', name)
}

for (const [name, rgb] of SOLIDS) {
  await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: rgb } })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${name}`)
  console.log('solid', name)
}

console.log('done ->', OUT)
