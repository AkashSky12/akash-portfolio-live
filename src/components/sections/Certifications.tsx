'use client'
import { BadgeCheck, BrainCircuit, ClipboardList, GraduationCap } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

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
  {
    Icon: GraduationCap,
    name: 'B.E. Computer Science Engineering',
    body: 'Visvesvaraya Technological University',
    status: 'Graduated',
  },
]

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="certs" className="section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow mb-4">Credentials</p>
          <h2 className="heading-lg text-balance mb-12 text-ink-high">
            Certifications &amp; education.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certs.map(({ Icon, name, body, status }) => (
            <div key={name} className="glass-card flex items-start gap-4 p-6">
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
                      ? 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20'
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
