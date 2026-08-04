'use client'
import { Trophy, Star, Award, BadgeCheck } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

const awards = [
  {
    Icon: Star,
    title: 'Best Sprinter',
    org: "Domino's Pizza Enterprises · 2024",
    desc: 'Cross platform application release and UAT co-ordination, enabling on-time release across 12+ Markets',
  },
   {
    Icon: BadgeCheck,
    title: 'Best Team Player',
    org: "Solve.Care · 2023",
    desc: '300+ automated test cases in 3 sprints, meeting the project deadline on-time',
  },
  {
    Icon: Trophy,
    title: 'Best Employee',
    org: 'Quinta Systems PVT LTD · 2021',
    desc: 'Established the best structured QA functioning practices across platforms',
  },
  {
    Icon: Award,
    title: 'Client Appreciation',
    org: 'Quinta Systems PVT LTD · 2019',
    desc: 'Personally recognized for sole ownership of End-to-End automation  under a compressed 6-week deadline.',
  },
]

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 })
  const { ref: bodyRef, visible: bodyVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const bv = bodyVisible ? 'is-visible' : ''

  return (
    <section id="about" className="section">
      <SectionFX variant="orbits" />
      <SectionFX variant="starfield" />
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
                QA Lead &amp; GenAI Automation Engineer
              </span>{' '}
              with nearly 10 years across manual and automation testing for web
              and mobile applications.
            </p>
            <p>
              I specialize in end-to-end UI testing, API and contract testing,
              test planning, requirements elicitation, and full test-cycle
              ownership within Agile delivery. I own end-to-end test architecture
              using{' '}
              <span className="font-medium text-ink-high">Playwright (Python)</span> and{' '}
              <span className="font-medium text-ink-high">Selenium (Java)</span>, and
              integrate AI-augmented and GenAI workflows to modernize quality
              practices in high-growth, high-stakes environments.
            </p>
            <p>
              I&apos;ve delivered quality programs across{' '}
              <span className="font-medium text-ink-high">blockchain healthcare</span>,
              enterprise software, and food-tech — with hands-on strength in
              defect management, independent verification, and shift-left quality
              strategy. Recognized with a Siemens client appreciation award and
              three internal excellence awards.
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
