'use client'
import { useRef, type ReactNode } from 'react'

/**
 * Pointer-driven 3D tilt wrapper.
 * Rotates its children in real perspective space toward the cursor and adds an
 * optional moving glare highlight. Pure CSS transforms (compositor-only) driven
 * by CSS custom properties, throttled with requestAnimationFrame.
 *
 * Gracefully inert on coarse pointers / reduced-motion (handled in globals.css).
 */
export default function Tilt3D({
  children,
  className = '',
  max = 12,
  lift = 14,
  scale = 1.02,
  glare = true,
}: {
  children: ReactNode
  className?: string
  /** max rotation in degrees on each axis */
  max?: number
  /** translateZ lift in px while hovered */
  lift?: number
  /** scale while hovered */
  scale?: number
  /** show moving glare highlight */
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef(0)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width // 0..1
    const py = (e.clientY - r.top) / r.height // 0..1
    const ry = (px - 0.5) * max * 2
    const rx = -(py - 0.5) * max * 2
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      el.style.setProperty('--tz', `${lift}px`)
      el.style.setProperty('--sc', `${scale}`)
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    })
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(raf.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--tz', '0px')
    el.style.setProperty('--sc', '1')
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt-3d ${glare ? 'tilt-glare' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
