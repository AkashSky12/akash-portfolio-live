'use client'
import { ArrowUpRight, Sparkles, ChevronDown, Bot, CheckCircle2, Activity } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import { useCounter } from '@/lib/useCounter'
import HeroBackdrop from '@/components/HeroBackdrop'
import Tilt3D from '@/components/Tilt3D'

const stats = [
  { num: 9,  suffix: '+', label: 'Years in QA' },
  { num: 30, suffix: '+', label: 'EU Storefronts' },
  { num: 40, suffix: '%', label: 'Authoring Cut' },
  { num: 12, suffix: '+', label: 'Engineers Led' },
]

const testRows = [
  { name: 'checkout.flow.spec.ts', status: 'pass' },
  { name: 'i18n-pricing.spec.ts', status: 'pass' },
  { name: 'visual-diff.storefront', status: 'pass' },
  { name: 'genai-agent.eval', status: 'run' },
]

function StatItem({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(num, 1800)
  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-extrabold tracking-tightest text-ink-high sm:text-4xl">
        {count}
        <span className="accent-text">{suffix}</span>
      </div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </div>
    </div>
  )
}

/** Floating, pointer-tilted QA console — the 3D centrepiece of the hero. */
function HeroStage() {
  return (
    <Tilt3D className="hero-stage" max={14} lift={16} glare={false}>
      <div className="stage-orb" />
      <div className="stage-ring" />
      <div className="stage-ring stage-ring--2" />

      <div className="stage-panel">
        {/* title bar */}
        <div className="flex items-center gap-2.5">
          <span className="stage-dot" />
          <span className="stage-dot" />
          <span className="stage-dot stage-dot--live" />
          <span className="ml-1.5 font-mono text-[11px] text-ink-muted">qa-agent ▸ live</span>
          <Activity size={13} className="ml-auto animate-pulse text-accent" />
        </div>

        {/* test rows */}
        <div className="mt-4 space-y-2">
          {testRows.map((t) => (
            <div key={t.name} className="console-row flex items-center gap-2.5">
              {t.status === 'pass' ? (
                <CheckCircle2 size={14} className="shrink-0 text-accent" />
              ) : (
                <span className="console-spin shrink-0" />
              )}
              <span className="font-mono text-[11.5px] text-ink">{t.name}</span>
              <span
                className={`ml-auto font-mono text-[10px] uppercase tracking-wider ${
                  t.status === 'pass' ? 'text-accent' : 'text-ink-subtle'
                }`}
              >
                {t.status === 'pass' ? 'pass' : 'run'}
              </span>
            </div>
          ))}
        </div>

        {/* coverage bar */}
        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            <span>Coverage</span>
            <span className="text-accent">98%</span>
          </div>
          <div className="stage-bar"><i /></div>
        </div>
      </div>

      <span className="stage-badge stage-badge--ai"><Bot size={13} /> AI Agent</span>
      <span className="stage-badge stage-badge--pass"><CheckCircle2 size={13} /> 99.9% pass</span>
    </Tilt3D>
  )
}

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.03 })
  const v = visible ? 'is-visible' : ''

  return (
    <section
      id="home"
      className="scene-3d relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* Background layers — each drifts at its own depth (mouse parallax) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="parallax par-6 absolute inset-0">
          <HeroBackdrop />
        </div>
        <div className="sun-halo" />
        <div className="parallax par-10 absolute inset-0">
          <div className="bg-grid absolute inset-0 opacity-90" />
        </div>
        <div className="parallax par-22 absolute inset-0">
          <div className="aurora-blob aurora-blob--primary" />
        </div>
        <div className="parallax par-16 absolute inset-0">
          <div className="aurora-blob aurora-blob--glow" />
        </div>
        <div className="parallax par-14 absolute inset-0">
          <div className="aurora-blob aurora-blob--secondary" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container relative">
        <div
          ref={ref}
          className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10"
        >
          {/* ── Left: copy ─────────────────────────────────────────────── */}
          <div className="max-w-2xl">
            {/* Eyebrow — stagger 1 */}
            <div className={`reveal-item stagger-1 ${v} mb-8 flex items-center gap-2`}>
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

            {/* Headline — stagger 2 */}
            <h1 className={`reveal-item stagger-2 ${v} heading-xl text-balance mb-6 text-ink-high`}>
              Engineering quality at the{' '}
              <span className="accent-text">speed of AI</span>.
            </h1>

            {/* Subtitle — stagger 3 */}
            <p className={`reveal-item stagger-3 ${v} text-pretty mb-10 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg`}>
              I&apos;m{' '}
              <span className="text-ink-high font-semibold">Akash Simon</span> — a QA Lead &amp;
              GenAI Automation Engineer with 9+ years building test infrastructure
              that ships. Currently architecting GenAI QA agents across{' '}
              <span className="text-ink-high font-semibold">30+ EU storefronts</span> at
              Domino&apos;s Pizza Enterprises.
            </p>

            {/* CTAs — stagger 4 */}
            <div className={`reveal-item stagger-4 ${v} mb-16 flex flex-wrap items-center gap-3 sm:gap-4`}>
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

            {/* Stats — stagger 5 */}
            <div className={`reveal-scale stagger-5 ${v} grid grid-cols-2 gap-6 border-t border-line/20 pt-8 sm:grid-cols-4 sm:gap-8`}>
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* ── Right: 3D stage ────────────────────────────────────────── */}
          <div className={`reveal-scale stagger-4 ${v} hidden lg:block`}>
            <HeroStage />
          </div>
        </div>
      </div>

      {/* Animated scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-ink-subtle">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce-y opacity-60" />
        </div>
      </div>
    </section>
  )
}
