'use client'

import { useEffect, useRef } from 'react'

/**
 * Line-waves — noon.ai's signature background animation.
 * A field of horizontal contour lines that drift sideways as the page scrolls,
 * at varied per-line speeds, bulging toward the centre and masked to fade at
 * the edges. Pure SVG + CSS transforms (no video), so it stays crisp and
 * lightweight. Motion is disabled under prefers-reduced-motion.
 */

const LINES = 18
const WAVELENGTH = 520 // seamless-loop distance; per-line drift wraps at this value
const SPEEDS = ['wave-a', 'wave-b', 'wave-c', 'wave-d', 'wave-e']

// px of horizontal drift per px of scroll, keyed by the per-line speed class
const SCROLL_FACTORS: Record<string, number> = {
  '--wave-a': 0.14,
  '--wave-b': 0.2,
  '--wave-c': 0.26,
  '--wave-d': 0.32,
  '--wave-e': 0.4,
}

function buildPath(index: number): { d: string; opacity: number } {
  const baseY = 40 + index * (820 / (LINES - 1))
  // centre-weighted amplitude (bell curve) so lines bulge in the middle
  const bell = Math.exp(-(((index - (LINES - 1) / 2) / 4.2) ** 2))
  const amp = 10 + 30 * bell
  const phase = index * 0.55
  let d = ''
  // Extra overflow (well beyond WAVELENGTH) so scroll drift never reveals an edge.
  for (let x = -800; x <= 2400; x += 40) {
    const y = baseY + amp * Math.sin((x / WAVELENGTH) * Math.PI * 2 + phase)
    d += `${x === -800 ? 'M' : 'L'}${x.toFixed(0)},${y.toFixed(1)} `
  }
  return { d: d.trim(), opacity: 0.05 + 0.16 * bell }
}

// Exact y of a contour line at a given x — used to sit glowing dots on the wave.
function waveY(index: number, x: number): number {
  const baseY = 40 + index * (820 / (LINES - 1))
  const bell = Math.exp(-(((index - (LINES - 1) / 2) / 4.2) ** 2))
  const amp = 10 + 30 * bell
  const phase = index * 0.55
  return baseY + amp * Math.sin((x / WAVELENGTH) * Math.PI * 2 + phase)
}

type Dot = { x: number; y: number; r: number; glow: number; op: number; speed: string; delay: number }

// Which contour lines host dots, and the x anchors along them.
const DOT_LINES = [1, 3, 5, 7, 9, 11, 13, 15]
const DOT_XS = [160, 420, 700, 980, 1240, 1500]
// Depth tiers give the field a 3D feel: near dots are big + bright, far ones small + dim.
const DOT_DEPTHS = [
  { r: 5.5, glow: 8, op: 1 },
  { r: 3.6, glow: 5, op: 0.7 },
  { r: 2.4, glow: 3.5, op: 0.45 },
]

function buildDots(): Dot[] {
  const dots: Dot[] = []
  let n = 0
  for (const li of DOT_LINES) {
    DOT_XS.forEach((x, xi) => {
      const depth = DOT_DEPTHS[(li + xi) % DOT_DEPTHS.length]
      dots.push({
        x,
        y: waveY(li, x),
        r: depth.r,
        glow: depth.glow,
        op: depth.op,
        speed: SPEEDS[li % SPEEDS.length],
        delay: Number(((n * 0.37) % 4.2).toFixed(2)),
      })
      n++
    })
  }
  return dots
}

export default function LineWaves() {
  const rootRef = useRef<HTMLDivElement>(null)
  const lines = Array.from({ length: LINES }, (_, i) => buildPath(i))
  const dots = buildDots()

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY || window.pageYOffset || 0
      for (const name in SCROLL_FACTORS) {
        // Wrap into (-WAVELENGTH, 0] so the drift loops seamlessly.
        const shift = -((y * SCROLL_FACTORS[name]) % WAVELENGTH)
        el.style.setProperty(name, `${shift.toFixed(2)}px`)
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={rootRef} className="line-waves" aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="wave-field" fill="none" stroke="rgb(var(--ink-high))" strokeWidth="1.1">
          {/* Grouped by speed so only a handful of layers move on scroll (cheap compositing). */}
          {SPEEDS.map((sp, si) => (
            <g key={`ln-${sp}`} className={`wave-layer ${sp}`}>
              {lines.map((ln, i) =>
                i % SPEEDS.length === si ? (
                  <path key={i} d={ln.d} strokeOpacity={ln.opacity.toFixed(3)} className="wave-line" />
                ) : null,
              )}
            </g>
          ))}
          {SPEEDS.map((sp) => (
            <g key={`dt-${sp}`} className={`wave-layer ${sp}`}>
              {dots.map((dt, i) =>
                dt.speed === sp ? (
                  <circle
                    key={`dot-${i}`}
                    cx={dt.x}
                    cy={dt.y.toFixed(1)}
                    r={dt.r}
                    className="wave-dot"
                    style={{
                      // depth-based glow + brightness sell the 3D look
                      ['--dot-op' as string]: dt.op,
                      filter: `drop-shadow(0 0 ${dt.glow}px rgb(var(--accent) / 0.85))`,
                      animationDelay: `${dt.delay}s`,
                    } as React.CSSProperties}
                  />
                ) : null,
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
