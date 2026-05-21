'use client'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const stats = [
  { num: '9', suffix: '+', label: 'Years in QA' },
  { num: '30', suffix: '+', label: 'EU Storefronts' },
  { num: '40', suffix: '%', label: 'Authoring Cut' },
  { num: '10', suffix: '+', label: 'Engineers Led' },
]

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="sun-halo" />
        <div className="bg-grid absolute inset-0 opacity-90" />
        <div className="aurora-blob aurora-blob--primary" />
        <div className="aurora-blob aurora-blob--glow" />
        <div className="aurora-blob aurora-blob--secondary" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container relative">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-4xl ${visible ? 'is-visible' : ''}`}
        >
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Available for senior roles
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-balance mb-6 text-ink-high">
            Engineering quality at the{' '}
            <span className="accent-text">speed of AI</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-pretty mb-10 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            I&apos;m{' '}
            <span className="text-ink-high">Akash Simon</span> — a QA Lead &amp;
            GenAI Automation Engineer with 9+ years building test infrastructure
            that ships. Currently architecting GenAI QA agents across{' '}
            <span className="text-ink-high">30+ EU storefronts</span> at
            Domino&apos;s Pizza Enterprises.
          </p>

          {/* CTAs */}
          <div className="mb-16 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary group">
              Let&apos;s work together
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a href="#experience" className="btn-ghost">
              <Sparkles size={15} />
              View experience
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold tracking-tightest text-ink-high sm:text-4xl">
                  {s.num}
                  <span className="accent-text">{s.suffix}</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-ink-subtle">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-ink-subtle to-transparent" />
        </div>
      </div>
    </section>
  )
}
