'use client'
import LineWaves from '@/components/LineWaves'

/**
 * Site-wide animated ambient background (noon.ai-style).
 * A fixed, full-viewport layer: flowing line-waves + a soft warm glow, sitting
 * behind all content so every section feels alive — not flat black.
 * Autonomous (no pointer needed); motion disabled under prefers-reduced-motion.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-glow" />
      <LineWaves />
    </div>
  )
}
