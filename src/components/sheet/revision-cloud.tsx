// A revision cloud as a draughtsman draws one: a closed run of shallow arcs
// that bulge outward, with rounded corners and slightly uneven bumps.
// Drawn once in a fixed coordinate space and stretched over its row.

const W = 1004
const H = 94
const BUMP = 30

function edge(length: number, seed: number) {
  const count = Math.max(1, Math.round(length / BUMP))
  const steps: number[] = []
  let total = 0
  for (let i = 0; i < count; i++) {
    const wobble = 0.82 + (((seed + i * 7919) % 97) / 97) * 0.36
    steps.push(wobble)
    total += wobble
  }
  return steps.map((s) => (s / total) * length)
}

function cloudPath() {
  const r = (chord: number) => (chord * 0.62).toFixed(1)
  let d = `M 0 ${H / 2}`
  // Up the left edge, across the top, down the right, back along the bottom.
  const sides: [number, number, number][] = [
    [0, -1, H / 2],
    [1, 0, W],
    [0, 1, H],
    [-1, 0, W],
    [0, -1, H / 2],
  ]
  sides.forEach(([dx, dy, length], side) => {
    for (const chord of edge(length, side * 31 + 5)) {
      d += ` a ${r(chord)} ${r(chord)} 0 0 1 ${(dx * chord).toFixed(1)} ${(dy * chord).toFixed(1)}`
    }
  })
  return `${d} Z`
}

const d = cloudPath()

export function RevisionCloud() {
  return (
    <svg className="cloud" viewBox={`-12 -12 ${W + 24} ${H + 24}`} preserveAspectRatio="none" aria-hidden="true">
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
