'use client'
import { Trophy, Star, Award } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

const awards = [
  {
    Icon: Trophy,
    title: 'Best Sprinter',
    org: "Domino's Pizza Enterprises · 2024",
    desc: '300+ automated test cases in 3 sprints, enabling on-time release across 12+ EU storefronts.',
  },
  {
    Icon: Star,
    title: 'Best Employee',
    org: 'Quinta Systems PVT LTD · 2021',
    desc: 'Established the first structured QA function in company history — pioneering blockchain + healthcare device testing.',
  },
  {
    Icon: Award,
    title: 'Client Appreciation',
    org: 'Quinta Systems PVT LTD · 2019',
    desc: 'Personally recognised for sole ownership of CI/CD pipeline and delivery under a compressed 6-week deadline.',
  },
]

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 })
  const { ref: bodyRef, visible: bodyVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const bv = bodyVisible ? 'is-visible' : ''

  return (
    <section id="about" className="section">
      <SectionFX variant="grid" />
      <SectionFX variant="helix" />
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Who I Am</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-5 text-ink-high`}>
            Quality as a competitive advantage.
          </h2>
          <p className={`reveal-item stagger-3 ${hv} text-pretty mb-14 max-w-2xl text-[15px] leading-relaxed text-ink-muted`}>
            I don&apos;t just find bugs — I architect systems that prevent them,
            and now I build AI agents that redefine how testing happens.
          </p>
        </div>

        <div ref={bodyRef}>
          {/* Bio */}
          <div className={`reveal-item stagger-1 ${bv} mb-16 max-w-3xl space-y-5 text-[15.5px] leading-[1.75] text-ink`}>
            <p>
              I&apos;m a{' '}
              <span className="font-medium text-accent">
                GenAI-powered QA Lead
              </span>{' '}
              with 9+ years of enterprise test automation, European regulatory
              compliance, and distributed team leadership.
            </p>
            <p>
              At{' '}
              <span className="font-medium text-ink-high">
                Domino&apos;s Pizza Enterprises
              </span>
              , I pioneered GenAI QA agent infrastructure from the ground up —
              cutting manual test-authoring by ~40% per sprint while enforcing
              WCAG 2.1 AA, EN 301 549, and GDPR-aligned data governance across
              30+ country storefronts.
            </p>
            <p>
              Before that, at{' '}
              <span className="font-medium text-ink-high">Solve.Care</span>, I
              built a 10-engineer QA function from scratch in blockchain
              healthcare — delivering IEC 62304-compliant testing on a live
              patient-facing platform with near-zero defect escape rate.
            </p>
            <p className="text-ink-muted">
              I&apos;m now open to senior QA architect, automation lead, or
              AI-augmented testing roles at companies where quality engineering
              drives product velocity.
            </p>
          </div>

          {/* Awards */}
          <div>
            <p className={`reveal-item stagger-2 ${bv} mb-5 text-[40px] font-bold uppercase tracking-[0.1em] text-ink-muted`}>
              Awards &amp; Recognition
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map(({ Icon, title, org, desc }, i) => (
                <li key={title} className={`reveal-scale stagger-${i + 3} ${bv} glass-card p-5`}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-[14.5px] font-bold leading-tight text-ink-high">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-accent">{org}</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                        {desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
