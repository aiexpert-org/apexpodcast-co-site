// Generates per-show cover-art tiles for the Apex Show Wall / Portfolio grid.
// Category-correct grounds + one geometric primitive per show, per the locked
// COVER-ART-BRIEF-v2 (Reid-Miles / Blue Note register, Apex acid palette).
// Real human shows get branded typographic covers (Transistor art pending).
//
// Run with CCM's installed sharp:
//   cd ~/Code/createmediagroup-site && node ~/Code/apexpodcast-co-site/scripts/build-show-covers.mjs
import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'

const OUT = '/Users/brett/Code/apexpodcast-co-site/public/covers'
const S = 720 // output tile size
const ACID = '#BFD93B'
const INK = '#14140F'
const BONE = '#FAF8F3'
const STONE = '#C4BDB1'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Per-category visual treatment.
const CAT = {
  Music: { ground: INK, ink: BONE, accent: ACID, bar: null },
  Communication: { ground: ACID, ink: INK, accent: INK, bar: null },
  Business: { ground: BONE, ink: INK, accent: ACID, bar: { pos: 'lower', color: ACID } },
  Sports: { ground: BONE, ink: INK, accent: ACID, bar: null },
  Biohacking: { ground: BONE, ink: INK, accent: STONE, bar: { pos: 'upper', color: STONE } },
  Relationships: { ground: ACID, ink: INK, accent: INK, bar: null },
}

// Geometric primitives (drawn in a 720 box, centered ~y=250). Each returns SVG.
const P = {
  waveform: (c) => {
    let d = 'M 90,250'
    for (let x = 90; x <= 630; x += 12) {
      const a = Math.sin((x - 90) / 26) * 70 * (0.4 + 0.6 * Math.sin((x - 90) / 140))
      d += ` L ${x},${250 + a}`
    }
    return `<path d="${d}" fill="none" stroke="${c.accent}" stroke-width="9" stroke-linecap="round"/>`
  },
  freqbars: (c) => {
    const h = [60, 110, 160, 110, 60]
    let s = ''
    h.forEach((v, i) => { s += `<rect x="${150 + i * 90}" y="${250 - v / 2}" width="46" height="${v}" fill="${c.accent}"/>` })
    return s
  },
  squareCircle: (c) => `<rect x="250" y="130" width="240" height="240" fill="none" stroke="${c.accent}" stroke-width="10"/><circle cx="370" cy="250" r="62" fill="${c.accent}"/>`,
  consoleStool: (c) => `<rect x="230" y="150" width="180" height="180" fill="none" stroke="${c.accent}" stroke-width="10"/><circle cx="430" cy="290" r="80" fill="none" stroke="${c.accent}" stroke-width="10"/>`,
  fiveDots: (c) => [0, 1, 2, 3, 4].map((i) => `<circle cx="${230 + i * 65}" cy="250" r="26" fill="${c.ink}"/>`).join(''),
  threeRules: (c) => [0, 1, 2].map((i) => `<rect x="${300 + i * 60}" y="170" width="14" height="160" fill="${c.ink}"/>`).join(''),
  arcsRight: (c) => [1, 2, 3, 4].map((i) => `<path d="M ${470 - i * 0} ${250 - i * 45} A ${i * 45} ${i * 45} 0 0 0 ${470} ${250 + i * 45}" fill="none" stroke="${c.ink}" stroke-width="8"/>`).join(''),
  bigCircle: (c) => `<circle cx="360" cy="250" r="120" fill="${c.ink}"/>`,
  crosshair: (c) => `<line x1="180" y1="250" x2="540" y2="250" stroke="${c.ink}" stroke-width="9"/><line x1="360" y1="120" x2="360" y2="380" stroke="${c.ink}" stroke-width="9"/>`,
  twoArrows: (c) => `<path d="M 200,250 l 70,0 l -14,-14 m 14,14 l -14,14" fill="none" stroke="${c.ink}" stroke-width="8"/><circle cx="320" cy="250" r="12" fill="${c.ink}"/><path d="M 380,250 l 130,0 l -22,-22 m 22,22 l -22,22" fill="none" stroke="${c.ink}" stroke-width="11"/>`,
  voidSquare: (c) => `<rect x="250" y="130" width="240" height="240" fill="none" stroke="${c.ink}" stroke-width="10"/><line x1="250" y1="370" x2="490" y2="130" stroke="${ACID}" stroke-width="20"/>`,
  beltBar: (c) => `<rect x="120" y="234" width="480" height="34" fill="${c.ink}"/>`,
  trackCurve: (c) => `<path d="M 140,330 Q 360,150 600,330" fill="none" stroke="${c.ink}" stroke-width="9"/><circle cx="140" cy="330" r="13" fill="${c.ink}"/>`,
  dotGrid: (c) => { let s = ''; for (let r = 0; r < 8; r++) for (let col = 0; col < 8; col++) s += `<circle cx="${250 + col * 32}" cy="${150 + r * 28}" r="7" fill="${c.ink}"/>`; return s },
  scaleRule: (c) => `<line x1="360" y1="140" x2="360" y2="360" stroke="${c.ink}" stroke-width="16"/><line x1="335" y1="140" x2="385" y2="140" stroke="${c.ink}" stroke-width="8"/><line x1="335" y1="360" x2="385" y2="360" stroke="${c.ink}" stroke-width="8"/>`,
  nodeCross: (c) => `<circle cx="360" cy="250" r="56" fill="${c.ink}"/><line x1="250" y1="250" x2="470" y2="250" stroke="${c.ink}" stroke-width="6"/><line x1="360" y1="160" x2="360" y2="340" stroke="${c.ink}" stroke-width="6"/>`,
  plus: (c) => `<rect x="340" y="170" width="40" height="160" fill="${c.ink}"/><rect x="280" y="230" width="160" height="40" fill="${c.ink}"/>`,
  fourNodes: (c) => `<rect x="280" y="170" width="160" height="160" fill="none" stroke="${c.ink}" stroke-width="6"/>${[[280, 170], [440, 170], [280, 330], [440, 330]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="26" fill="${c.ink}"/>`).join('')}`,
  twoNodesLine: (c) => `<line x1="270" y1="250" x2="450" y2="250" stroke="${c.ink}" stroke-width="7"/><circle cx="270" cy="250" r="40" fill="${c.ink}"/><circle cx="450" cy="250" r="40" fill="${c.ink}"/>`,
  twoNodesArc: (c) => `<path d="M 280,270 Q 360,180 440,270" fill="none" stroke="${c.ink}" stroke-width="7"/><circle cx="280" cy="270" r="28" fill="${c.ink}"/><circle cx="440" cy="270" r="28" fill="${c.ink}"/>`,
}

// title with one italic-emphasis word (synthetic oblique via font-style).
function titleSvg(title, emphasis, color) {
  const words = title.toUpperCase().split(' ')
  const E = emphasis.toUpperCase()
  // wrap to <=12 chars/line
  const lines = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > 12 && cur) { lines.push(cur.trim()); cur = w } else cur = (cur + ' ' + w).trim()
  }
  if (cur) lines.push(cur.trim())
  const fs = lines.length > 2 ? 56 : 68
  const lh = fs * 1.04
  const startY = 470 + fs
  return lines.map((line, li) => {
    const parts = line.split(' ').map((w) =>
      w === E
        ? `<tspan font-style="italic" fill="${color}">${esc(w)}</tspan>`
        : `<tspan>${esc(w)}</tspan>`,
    ).join(' ')
    return `<text x="56" y="${startY + li * lh}" font-family="'Arial Black','Helvetica',sans-serif" font-weight="900" font-size="${fs}" letter-spacing="-1.5" fill="${color}">${parts}</text>`
  }).join('')
}

function cover({ title, emphasis, category, primitive, catalog }) {
  const c = CAT[category]
  const bar = c.bar
    ? c.bar.pos === 'lower'
      ? `<rect x="0" y="${S - 96}" width="${S}" height="96" fill="${c.bar.color}"/>`
      : `<rect x="0" y="0" width="${S}" height="60" fill="${c.bar.color}"/>`
    : ''
  const prim = (P[primitive] || P.bigCircle)(c)
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <rect width="${S}" height="${S}" fill="${c.ground}"/>
  ${bar}
  <rect x="40" y="40" width="${S - 80}" height="${S - 80}" fill="none" stroke="${c.ink}" stroke-opacity="0.16" stroke-width="2"/>
  <text x="56" y="96" font-family="'Courier New',monospace" font-size="22" letter-spacing="2" fill="${c.ink}" fill-opacity="0.75">${esc(catalog)}</text>
  <text x="${S - 56}" y="96" text-anchor="end" font-family="'Courier New',monospace" font-size="18" letter-spacing="2" fill="${c.ink}" fill-opacity="0.6">${esc(category.toUpperCase())}</text>
  ${prim}
  ${titleSvg(title, emphasis, c.ink)}
  <text x="56" y="${S - 70}" font-family="'Courier New',monospace" font-size="17" letter-spacing="1.5" fill="${c.ink}" fill-opacity="0.65">FROM THE APEX PODCAST NETWORK</text>
  <rect x="56" y="${S - 52}" width="120" height="6" fill="${ACID === c.ground ? c.ink : ACID}"/>
</svg>`)
}

// Canonical 20-show stable (v3 titles + v2 categories + COVER-ART-BRIEF primitives).
const SHOWS = [
  { slug: 'tracklist', title: 'Tracklist', emphasis: 'Tracklist', category: 'Music', primitive: 'waveform' },
  { slug: 'b-sides', title: 'B-Sides', emphasis: 'B-Sides', category: 'Music', primitive: 'freqbars' },
  { slug: 'album-one', title: 'Album One', emphasis: 'One', category: 'Music', primitive: 'squareCircle' },
  { slug: 'producers-chair', title: "Producer's Chair", emphasis: 'Chair', category: 'Music', primitive: 'consoleStool' },
  { slug: 'five-fingers', title: 'Five Fingers', emphasis: 'Five', category: 'Communication', primitive: 'fiveDots' },
  { slug: 'word-for-word', title: 'Word for Word', emphasis: 'for', category: 'Communication', primitive: 'threeRules' },
  { slug: 'the-listener', title: 'The Listener', emphasis: 'Listener', category: 'Communication', primitive: 'arcsRight' },
  { slug: 'one-note', title: 'One Note', emphasis: 'One', category: 'Communication', primitive: 'bigCircle' },
  { slug: 'tool-talk', title: 'Tool Talk', emphasis: 'Tool', category: 'Business', primitive: 'crosshair' },
  { slug: 'second-acts', title: 'Second Acts', emphasis: 'Second', category: 'Business', primitive: 'twoArrows' },
  { slug: 'the-anti-label', title: 'The Anti-Label', emphasis: 'Anti-Label', category: 'Business', primitive: 'voidSquare' },
  { slug: 'black-belt-at-40', title: 'Black Belt at 40', emphasis: 'Black', category: 'Sports', primitive: 'beltBar' },
  { slug: 'the-comeback-mile', title: 'The Comeback Mile', emphasis: 'Comeback', category: 'Sports', primitive: 'trackCurve' },
  { slug: 'reps', title: 'Reps', emphasis: 'Reps', category: 'Sports', primitive: 'dotGrid' },
  { slug: 'the-protocol', title: 'The Protocol', emphasis: 'Protocol', category: 'Biohacking', primitive: 'scaleRule' },
  { slug: 'n-of-one', title: 'N of One', emphasis: 'One', category: 'Biohacking', primitive: 'nodeCross' },
  { slug: 'basics', title: 'Basics', emphasis: 'Basics', category: 'Biohacking', primitive: 'plus' },
  { slug: 'men-im-lucky-to-know', title: "Men I'm Lucky to Know", emphasis: 'Lucky', category: 'Relationships', primitive: 'fourNodes' },
  { slug: 'the-long-marriage', title: 'The Long Marriage', emphasis: 'Long', category: 'Relationships', primitive: 'twoNodesLine' },
  { slug: 'the-long-friendship', title: 'The Long Friendship', emphasis: 'Friendship', category: 'Relationships', primitive: 'twoNodesArc' },
]

await mkdir(OUT, { recursive: true })

// Anchor shows (flagship). The Apex Podcast reuses the real brand cover.
await copyFile(`${OUT}/cover-01-apex.webp`, `${OUT}/show-the-apex-podcast.webp`)
const ANCHORS = [
  { slug: 'sweeter-after-difficulty', title: 'Sweeter After Difficulty', emphasis: 'Sweeter', category: 'Relationships', primitive: 'twoNodesArc', catalog: 'CAT. NO. APX-002' },
  { slug: 'the-russ-laggan-podcast', title: 'The Russ Laggan Podcast', emphasis: 'Russ', category: 'Business', primitive: 'twoArrows', catalog: 'CAT. NO. APX-003' },
  { slug: 'winning-twice', title: 'Winning Twice', emphasis: 'Twice', category: 'Sports', primitive: 'trackCurve', catalog: 'CAT. NO. APX-004' },
]
for (const a of ANCHORS) {
  await sharp(cover(a)).webp({ quality: 84 }).toFile(`${OUT}/show-${a.slug}.webp`)
  console.log('anchor', a.slug)
}

let n = 1
for (const s of SHOWS) {
  const catalog = `APX-NET-${String(n).padStart(2, '0')}`
  await sharp(cover({ ...s, catalog })).webp({ quality: 84 }).toFile(`${OUT}/show-${s.slug}.webp`)
  console.log('network', s.slug)
  n++
}

console.log('done ->', OUT)
