'use client'

/**
 * Animated, vector hero backdrop — crisp at any resolution (4K+).
 * Theme: senior software-testing / QA engineer — a test-pipeline network of
 * nodes, a scanning beam, drifting check/pass glyphs, all in amber tones.
 * Sits behind the aurora layers, kept subtle so the headline stays legible.
 */
export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
      <svg
        className="h-full w-full opacity-[0.5]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hb-glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hb-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent-bright))" />
            <stop offset="100%" stopColor="rgb(var(--accent-dark))" />
          </linearGradient>
          <filter id="hb-blur"><feGaussianBlur stdDeviation="1.2" /></filter>
        </defs>

        {/* soft central glow */}
        <rect width="1600" height="900" fill="url(#hb-glow)" />

        {/* test-pipeline network */}
        <g stroke="url(#hb-line)" strokeWidth="1.1" opacity="0.55" filter="url(#hb-blur)">
          <line x1="180" y1="220" x2="520" y2="400" className="hb-edge" />
          <line x1="520" y1="400" x2="880" y2="240" className="hb-edge" />
          <line x1="880" y1="240" x2="1240" y2="430" className="hb-edge" />
          <line x1="520" y1="400" x2="700" y2="700" className="hb-edge" />
          <line x1="880" y1="240" x2="1100" y2="640" className="hb-edge" />
          <line x1="1240" y1="430" x2="1420" y2="220" className="hb-edge" />
          <line x1="180" y1="220" x2="300" y2="640" className="hb-edge" />
        </g>

        {/* nodes (pass checkpoints) */}
        <g fill="rgb(var(--accent))">
          {[
            [180, 220], [520, 400], [880, 240], [1240, 430],
            [700, 700], [1100, 640], [1420, 220], [300, 640],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" className="hb-node" />
          ))}
        </g>

        {/* scanning beam */}
        <rect className="hb-scan" x="0" y="0" width="3" height="900" fill="rgb(var(--accent-bright))" opacity="0.4" />
      </svg>
    </div>
  )
}
