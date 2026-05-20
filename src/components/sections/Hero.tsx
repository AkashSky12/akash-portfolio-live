'use client'
import { motion } from 'framer-motion'

const stats = [
  { num: '9+', label: 'Years in QA' },
  { num: '30+', label: 'EU Storefronts' },
  { num: '40%', label: 'Test Authoring Reduction' },
  { num: '10+', label: 'Engineers Led' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-20 pb-16 overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,212,170,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(0,168,138,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 hero-grid-bg opacity-100" />
      </div>

      <div className="relative max-w-4xl mx-auto w-full">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/25 px-4 py-1.5 rounded-full text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#00d4aa] rounded-full animate-pulse" />
            Available for senior roles
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-jakarta font-extrabold leading-[1.05] mb-4 section-heading"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
        >
          Akash Simon
          <br />
          <span className="text-[#00d4aa]">Software Engineer</span>
          <br />
          <br />
          <span className="text-[#00d4aa]">QA Lead &</span>
          <br />
          GenAI Automation
          <br />
          Engineer
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-[#8892a4] font-light max-w-xl mb-8 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
        >
          9+ years engineering quality at scale — from building GenAI QA agent
          infrastructure at Domino&apos;s 30+ EU storefronts to leading cross-geo
          teams in blockchain healthcare. I turn shift-left strategy into
          measurable business outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-12">
          <a
            href="#contact"
            className="font-jakarta font-semibold text-sm bg-[#00d4aa] text-[#0a0f1e] px-7 py-3 rounded-lg hover:bg-[#00a88a] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Let&apos;s Work Together
          </a>
          <a
            href="#experience"
            className="font-jakarta font-semibold text-sm border border-white/[0.12] text-white px-7 py-3 rounded-lg hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all hover:-translate-y-0.5"
          >
            View Experience
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.08]"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-jakarta font-extrabold text-3xl text-[#f0f4ff]">
                {s.num.replace(/[+%]/, '')}
                <span className="text-[#00d4aa]">
                  {s.num.includes('+') ? '+' : s.num.includes('%') ? '%' : ''}
                </span>
              </div>
              <div className="text-[11px] text-[#8892a4] uppercase tracking-widest mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
