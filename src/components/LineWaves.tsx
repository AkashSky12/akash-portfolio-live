'use client'

/**
 * Line-waves — noon.ai's signature background animation.
 * A field of horizontal contour lines that gently flow sideways at varied
 * speeds, bulging toward the centre, masked to fade at the edges. Pure SVG +
 * CSS transforms (no video), so it stays crisp and lightweight. Monochrome,
 * tinted by --ink-high, with motion disabled under prefers-reduced-motion.
 */

const LINES = 18
const WAVELENGTH = 520 // must equal the CSS translate distance for a seamless loop
const SPEEDS = ['wave-a', 'wave-b', 'wave-c', 'wave-d', 'wave-e']

function buildPath(index: number): { d: string; opacity: number } {
  const baseY = 40 + index * (820 / (LINES - 1))
  // centre-weighted amplitude (bell curve) so lines bulge in the middle
  const bell = Math.exp(-(((index - (LINES - 1) / 2) / 4.2) ** 2))
  const amp = 10 + 30 * bell
  const phase = index * 0.55
  let d = ''
  for (let x = -260; x <= 1860; x += 40) {
    const y = baseY + amp * Math.sin((x / WAVELENGTH) * Math.PI * 2 + phase)
    d += `${x === -260 ? 'M' : 'L'}${x.toFixed(0)},${y.toFixed(1)} `
  }
  return { d: d.trim(), opacity: 0.05 + 0.16 * bell }
}

export default function LineWaves() {
  const lines = Array.from({ length: LINES }, (_, i) => buildPath(i))
  return (
    <div className="line-waves" aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="wave-field" fill="none" stroke="rgb(var(--ink-high))" strokeWidth="1.1">
          {lines.map((ln, i) => (
            <path
              key={i}
              d={ln.d}
              strokeOpacity={ln.opacity.toFixed(3)}
              className={`wave-line ${SPEEDS[i % SPEEDS.length]}`}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
