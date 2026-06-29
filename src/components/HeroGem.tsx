'use client'

/**
 * Hero crystal — a tall, glossy, dark-translucent faceted gem with bright lime
 * upper wings, a dotted inner core, a glassy central visor with a focus
 * reticle, and a converging pavilion (flammini.design signature object).
 * Pure SVG so it stays crisp at any size. It slowly floats, breathes and turns
 * while a diagonal glint sweeps the facets; a soft radial glow pulses behind.
 * All motion is CSS-driven and disabled under prefers-reduced-motion.
 */
export default function HeroGem() {
  return (
    <div className="hero-gem" aria-hidden="true">
      <div className="hero-gem-glow" />
      <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* bright lime wings */}
          <linearGradient id="gem-wingL" x1="0.1" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent-bright))" />
            <stop offset="60%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--accent-dark))" />
          </linearGradient>
          <linearGradient id="gem-wingR" x1="0.9" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent-bright))" />
            <stop offset="55%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--accent-dark))" />
          </linearGradient>

          {/* dark translucent glass */}
          <linearGradient id="gem-core" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b2710" />
            <stop offset="100%" stopColor="#060b07" />
          </linearGradient>
          <linearGradient id="gem-pav" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d160b" />
            <stop offset="100%" stopColor="#04060a" />
          </linearGradient>
          <radialGradient id="gem-visor" cx="0.5" cy="0.42" r="0.7">
            <stop offset="0%" stopColor="#1d2b14" />
            <stop offset="55%" stopColor="#0a110a" />
            <stop offset="100%" stopColor="#04070a" />
          </radialGradient>
          <linearGradient id="gem-gloss" x1="0" y1="0" x2="1" y2="0.2">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gem-glint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <pattern id="gem-dots" width="13" height="13" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.05" fill="rgb(var(--accent))" fillOpacity="0.5" />
          </pattern>

          <clipPath id="gem-clip">
            <polygon points="120,20 216,150 120,300 24,150" />
          </clipPath>
          <clipPath id="gem-core-clip">
            <polygon points="120,20 162,150 120,168 78,150" />
          </clipPath>
        </defs>

        <g className="gem-body">
          {/* lower pavilion — dark translucent glass */}
          <polygon points="24,150 216,150 120,300" fill="url(#gem-pav)" />

          {/* bright lime wings (upper outer facets) */}
          <polygon points="120,20 24,150 78,150" fill="url(#gem-wingL)" />
          <polygon points="120,20 216,150 162,150" fill="url(#gem-wingR)" />

          {/* dark inner core with dotted texture */}
          <polygon points="120,20 162,150 120,168 78,150" fill="url(#gem-core)" />
          <polygon
            points="120,20 162,150 120,168 78,150"
            fill="url(#gem-dots)"
            clipPath="url(#gem-core-clip)"
          />

          {/* central glossy visor + focus reticle */}
          <ellipse cx="120" cy="152" rx="72" ry="27" fill="url(#gem-visor)" />
          <ellipse
            cx="120"
            cy="152"
            rx="72"
            ry="27"
            fill="none"
            stroke="rgb(var(--accent))"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <g stroke="rgb(var(--accent))" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M106 142 H99 V149 M134 142 H141 V149 M106 162 H99 V155 M134 162 H141 V155" />
            <circle cx="120" cy="152" r="3" fill="rgb(var(--accent))" stroke="none" />
          </g>

          {/* facet edge lines */}
          <g
            fill="none"
            stroke="rgb(var(--accent-bright))"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinejoin="round"
          >
            <polygon points="120,20 216,150 120,300 24,150" />
            <path d="M120,20 L120,168 M78,150 L120,168 L162,150" />
          </g>
          {/* dim pavilion facet lines */}
          <g fill="none" stroke="rgb(var(--accent))" strokeOpacity="0.22" strokeWidth="1">
            <path d="M78,150 L120,300 M162,150 L120,300 M120,168 L120,300" />
          </g>

          {/* glossy highlight down the left wing */}
          <polygon points="120,30 96,140 108,142 120,46" fill="url(#gem-gloss)" opacity="0.7" />

          {/* sweeping glint */}
          <g clipPath="url(#gem-clip)">
            <rect className="gem-glint" x="-90" y="0" width="80" height="320" fill="url(#gem-glint)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
