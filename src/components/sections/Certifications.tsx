'use client'
import { BadgeCheck, BrainCircuit, ClipboardList, GraduationCap } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

const certs = [
  {
    Icon: BadgeCheck,
    name: 'ISTQB Foundation Level',
    body: 'ISTQB / UKITB',
    status: 'Certified',
  },
  {
    Icon: BrainCircuit,
    name: 'AI Fundamentals Certification',
    body: 'Applied GenAI Workflows & Principles',
    status: 'Certified',
  },
  {
    Icon: ClipboardList,
    name: 'ISTQB Advanced — Test Manager',
    body: 'ISTQB',
    status: 'In Progress',
  },
]

export default function Certifications() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const { ref: gridRef, visible: gridVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const { ref: eduRef, visible: eduVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const gv = gridVisible ? 'is-visible' : ''
  const ev = eduVisible ? 'is-visible' : ''

  return (
    <section id="certs" className="section scroll-mt-16">
      <SectionFX variant="cubes" />
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Credentials</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-12 text-ink-high`}>
            Certifications &amp; education.
          </h2>
        </div>

        <div ref={eduRef} className="mb-10">
          <h3 className="mb-4 font-display text-[16px] font-bold uppercase tracking-[0.16em] text-ink-muted">
            Education
          </h3>
          <div className={`reveal-scale stagger-1 ${ev} glass-card flex items-start gap-4 p-6`}>
            <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
              <GraduationCap size={20} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="font-display text-[14.5px] font-bold leading-tight text-ink-high">
                B.E. Computer Science Engineering
              </p>
              <p className="mt-1 text-[12.5px] text-ink-muted">
                Visvesvaraya Technological University
              </p>
              <span className="mt-2.5 inline-block rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider bg-accent/10 text-accent ring-1 ring-accent/20">
                Graduated
              </span>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
          {certs.map(({ Icon, name, body, status }, i) => (
            <div key={name} className={`reveal-scale stagger-${i + 1} ${gv} glass-card flex items-start gap-4 p-6`}>
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="font-display text-[14.5px] font-bold leading-tight text-ink-high">
                  {name}
                </p>
                <p className="mt-1 text-[12.5px] text-ink-muted">{body}</p>
                <span
                  className={`mt-2.5 inline-block rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider ${
                    status === 'In Progress'
                      ? 'status-progress'
                      : 'bg-accent/10 text-accent ring-1 ring-accent/20'
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
