// Generates per-show cover-art tiles for the Apex Show Wall / Portfolio grid.
// Real shows get branded typographic covers (no Transistor art available yet —
// see LIVING-NOTES "Transistor API key needed"). The 20 AI-voiced network shows
// get honest catalog placeholders (no fabricated titles/hosts) that the
// 20-podcast-stable strategy file + COVER-ART-BRIEF will replace.
//
// Run with CCM's installed sharp:
//   cd ~/Code/createmediagroup-site && node ~/Code/apexpodcast-co-site/scripts/build-show-covers.mjs
import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'

const OUT = '/Users/brett/Code/apexpodcast-co-site/public/covers'
const SIZE = 720

const ACID = '#BFD93B'
const INK = '#14140F'
const BONE = '#FAF8F3'
const STONE = '#C4BDB1'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// naive word-wrap into <= maxChars lines
function wrap(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line.trim())
      line = w
    } else {
      line = (line + ' ' + w).trim()
    }
  }
  if (line) lines.push(line.trim())
  return lines
}

function coverSvg({ ground, ink, accent, catalog, title, kicker }) {
  const lines = wrap(title.toUpperCase(), 11)
  const fs = lines.length > 2 ? 78 : 96
  const lh = fs * 1.02
  const blockH = lines.length * lh
  const startY = SIZE / 2 - blockH / 2 + fs * 0.78
  const tspans = lines
    .map(
      (l, i) =>
        `<text x="56" y="${startY + i * lh}" font-family="'Arial Black','Helvetica',sans-serif" font-weight="900" font-size="${fs}" letter-spacing="-2" fill="${ink}">${esc(l)}</text>`,
    )
    .join('')
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
  <rect width="${SIZE}" height="${SIZE}" fill="${ground}"/>
  <rect x="56" y="56" width="${SIZE - 112}" height="${SIZE - 112}" fill="none" stroke="${ink}" stroke-opacity="0.16" stroke-width="2"/>
  <text x="56" y="108" font-family="'Courier New',monospace" font-size="26" letter-spacing="3" fill="${ink}" fill-opacity="0.7">${esc(catalog)}</text>
  <circle cx="${SIZE - 80}" cy="98" r="13" fill="${accent}"/>
  ${tspans}
  <text x="56" y="${SIZE - 70}" font-family="'Courier New',monospace" font-size="24" letter-spacing="2" fill="${ink}" fill-opacity="0.7">${esc(kicker.toUpperCase())}</text>
  <rect x="56" y="${SIZE - 52}" width="120" height="8" fill="${accent}"/>
</svg>`)
}

// theme variants for visual rhythm across the wall
const THEMES = [
  { ground: INK, ink: BONE, accent: ACID },
  { ground: ACID, ink: INK, accent: INK },
  { ground: BONE, ink: INK, accent: ACID },
  { ground: STONE, ink: INK, accent: ACID },
  { ground: INK, ink: ACID, accent: ACID },
]

// 4 real shows (flagship). The Apex Podcast reuses the real brand cover.
const REAL = [
  { slug: 'sweeter-after-difficulty', title: 'Sweeter After Difficulty', kicker: 'Randy Highsmith', theme: THEMES[0], catalog: 'CAT. NO. APX-002' },
  { slug: 'the-russ-laggan-podcast', title: 'The Russ Laggan Podcast', kicker: 'Russ Laggan', theme: THEMES[1], catalog: 'CAT. NO. APX-003' },
  { slug: 'winning-twice', title: 'Winning Twice', kicker: 'Austin Cheviron', theme: THEMES[4], catalog: 'CAT. NO. APX-004' },
]

await mkdir(OUT, { recursive: true })

// The Apex Podcast: real brand cover already optimized as cover-01-apex.webp.
await copyFile(`${OUT}/cover-01-apex.webp`, `${OUT}/show-the-apex-podcast.webp`)
console.log('copy show-the-apex-podcast.webp (real brand cover)')

for (const s of REAL) {
  const svg = coverSvg({ ...s.theme, catalog: s.catalog, title: s.title, kicker: s.kicker })
  await sharp(svg).webp({ quality: 82 }).toFile(`${OUT}/show-${s.slug}.webp`)
  console.log('real cover', s.slug)
}

// 20 AI-voiced network shows: honest catalog placeholders, no fabricated names.
for (let n = 5; n <= 24; n++) {
  const num = String(n).padStart(3, '0')
  const theme = THEMES[(n - 5) % THEMES.length]
  const svg = coverSvg({
    ...theme,
    catalog: `CAT. NO. APX-${num}`,
    title: 'In\nProduction',
    kicker: 'Apex Podcast Network',
  })
  await sharp(svg).webp({ quality: 82 }).toFile(`${OUT}/show-apx-${num}.webp`)
  console.log('placeholder cover', `apx-${num}`)
}

console.log('done ->', OUT)
