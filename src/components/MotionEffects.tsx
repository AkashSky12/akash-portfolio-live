'use client'
import { useEffect, useRef } from 'react'

/**
 * Mounts two ambient effects:
 * 1. Scroll-progress bar (thin golden line at top of viewport)
 * 2. Cursor ambient glow (large soft radial that follows the mouse)
 */
export default function MotionEffects() {
  const progressRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progress = progressRef.current
    const glow = glowRef.current

    const onScroll = () => {
      if (!progress) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      progress.style.width = `${pct}%`
    }

    // Use raw style writes for performance (no React state)
    const onMouseMove = (e: MouseEvent) => {
      if (!glow) return
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  )
}
