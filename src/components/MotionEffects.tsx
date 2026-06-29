'use client'
import { useEffect, useRef } from 'react'

/**
 * Mounts ambient + 3D effects:
 * 1. Scroll-progress bar (thin golden line at top of viewport)
 * 2. Cursor ambient glow (large soft radial that follows the mouse)
 * 3. Mouse parallax driver (sets --par-x / --par-y on :root for .parallax layers)
 * 4. Global card 3D tilt — attaches pointer tilt to every .glass-card
 *
 * All pointer-driven effects are disabled on coarse pointers and when the user
 * prefers reduced motion. Writes go straight to the DOM (no React state) and are
 * throttled with requestAnimationFrame for buttery, jank-free motion.
 */
export default function MotionEffects() {
  const progressRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progress = progressRef.current
    const glow = glowRef.current
    const root = document.documentElement

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const enable3D = finePointer && !reduced

    const onScroll = () => {
      if (!progress) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      progress.style.width = `${pct}%`
    }

    // Cursor glow + global mouse parallax (one rAF-throttled handler)
    let rafId = 0
    let mx = 0
    let my = 0
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        if (glow) {
          glow.style.left = `${mx}px`
          glow.style.top = `${my}px`
        }
        if (enable3D) {
          // normalised −0.5 … 0.5 from viewport centre
          root.style.setProperty('--par-x', ((mx / window.innerWidth - 0.5) * 2).toFixed(3))
          root.style.setProperty('--par-y', ((my / window.innerHeight - 0.5) * 2).toFixed(3))
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    onScroll()

    // ── Global card 3D tilt ──────────────────────────────────────────────
    const cardCleanups: Array<() => void> = []
    if (enable3D) {
      const cards = document.querySelectorAll<HTMLElement>('.glass-card')
      cards.forEach((card) => {
        card.classList.add('card-3d')
        let cRaf = 0
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width
          const py = (e.clientY - r.top) / r.height
          const ry = (px - 0.5) * 9
          const rx = -(py - 0.5) * 9
          if (cRaf) return
          cRaf = requestAnimationFrame(() => {
            cRaf = 0
            card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`
          })
        }
        const leave = () => {
          if (cRaf) cancelAnimationFrame(cRaf)
          cRaf = 0
          card.style.transform = ''
        }
        card.addEventListener('pointermove', move)
        card.addEventListener('pointerleave', leave)
        cardCleanups.push(() => {
          card.removeEventListener('pointermove', move)
          card.removeEventListener('pointerleave', leave)
          card.classList.remove('card-3d')
          card.style.transform = ''
        })
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
      cardCleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  )
}
