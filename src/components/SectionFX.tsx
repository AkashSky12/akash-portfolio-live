'use client'

/**
 * Per-section animated 3D background layer.
 * Pure CSS/transform driven (no WebGL) so it stays lightweight and crisp, sits
 * behind the section content, never intercepts pointer events, and is fully
 * paused under `prefers-reduced-motion`. Each `variant` gives a section its own
 * distinct depth motif.
 */
type Variant = 'grid' | 'orbits' | 'particles' | 'cubes' | 'beams' | 'tunnel' | 'helix' | 'waves' | 'code' | 'ribbons' | 'starfield'

/** Deterministic glyph set (no Math.random) so SSR + client markup match. */
const CODE_CHARS = '01<>{}[]()=+*/;:!#$%&ABCDEF0110アカサタナハマヤラワ'

export default function SectionFX({ variant }: { variant: Variant }) {
  return (
    <div className={`section-fx section-fx--${variant}`} aria-hidden="true">
      {variant === 'grid' && (
        <>
          <div className="fx-grid fx-grid--floor" />
          <div className="fx-grid fx-grid--ceil" />
        </>
      )}

      {variant === 'orbits' && (
        <div className="fx-orbits">
          <span className="fx-ring" />
          <span className="fx-ring" />
          <span className="fx-ring" />
          <span className="fx-orb" />
        </div>
      )}

      {variant === 'particles' && (
        <div className="fx-particles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="fx-dot" />
          ))}
        </div>
      )}

      {variant === 'cubes' && (
        <div className="fx-cubes">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`fx-cube fx-cube--${i}`}>
              <span className="cf cf-front" />
              <span className="cf cf-back" />
              <span className="cf cf-right" />
              <span className="cf cf-left" />
              <span className="cf cf-top" />
              <span className="cf cf-bottom" />
            </div>
          ))}
        </div>
      )}

      {variant === 'beams' && (
        <div className="fx-beams">
          <span className="fx-beam" />
          <span className="fx-beam" />
          <span className="fx-beam" />
        </div>
      )}

      {variant === 'tunnel' && (
        <div className="fx-tunnel">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="fx-tunnel-ring" />
          ))}
        </div>
      )}

      {variant === 'helix' && (
        <div className="fx-helix">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="fx-helix-dot" />
          ))}
        </div>
      )}

      {variant === 'waves' && (
        <div className="fx-waves">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="fx-wave-line" />
          ))}
        </div>
      )}

      {variant === 'code' && (
        <div className="fx-code">
          {Array.from({ length: 18 }).map((_, c) => {
            // A long base sequence, duplicated, so each column easily over-fills
            // the tallest section and loops seamlessly while "running" downward.
            const base = Array.from(
              { length: 80 },
              (_, r) => CODE_CHARS[(c * 5 + r * 3) % CODE_CHARS.length],
            )
            return (
              <span key={c} className="fx-code-col">
                <span className="fx-code-strip">
                  {[...base, ...base].map((ch, r) => (
                    <i key={r}>{ch}</i>
                  ))}
                </span>
              </span>
            )
          })}
        </div>
      )}

      {variant === 'ribbons' && (
        <div className="fx-ribbons">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="fx-ribbon" />
          ))}
        </div>
      )}

      {variant === 'starfield' && (
        <div className="fx-stars">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="fx-star" />
          ))}
        </div>
      )}
    </div>
  )
}
