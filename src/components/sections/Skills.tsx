'use client'
import {
  Bot,
  Cog,
  ShieldCheck,
  GitBranch,
  Webhook,
  ClipboardCheck,
} from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const groups = [
  {
    Icon: Cog,
    title: 'Automation',
    tags: [
      'Playwright (Python)',
      'Selenium (Java)',
      'Appium',
      'WebDriverIO',
      'REST Assured',
      'TestNG',
      'Cucumber BDD',
      'Maven',
    ],
  },
  {
    Icon: Bot,
    title: 'AI & GenAI',
    tags: [
      'GenAI QA Agents',
      'AI-Driven Automation',
      'Prompt Engineering',
      'Synthetic Data Generation',
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Accessibility & Compliance',
    tags: ['Axe-core', 'WCAG 2.1 AA', 'EN 301 549', 'EAA', 'GDPR', 'IEC 62304'],
  },
  {
    Icon: GitBranch,
    title: 'CI/CD & DevOps',
    tags: [
      'GitHub Actions',
      'Jenkins',
      'Git',
      'Pipeline Management',
      'Deployment Oversight',
    ],
  },
  {
    Icon: Webhook,
    title: 'API & Integration',
    tags: [
      'Postman',
      'Swagger',
      'REST Automation',
      'Blockchain API',
      'Smart Contract Testing',
      'API Contract Testing',
    ],
  },
  {
    Icon: ClipboardCheck,
    title: 'Management & Quality',
    tags: [
      'Jira',
      'TestRail',
      'Shift-Left Strategy',
      'JMeter',
      'MySQL',
      'PostgreSQL',
      'Risk Assessment',
    ],
  },
]

export default function Skills() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const { ref: gridRef, visible: gridVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const gv = gridVisible ? 'is-visible' : ''

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Tech Stack</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-5 text-ink-high`}>
            A battle-tested toolkit.
          </h2>
          <p className={`reveal-item stagger-3 ${hv} text-pretty mb-14 max-w-2xl text-[15px] leading-relaxed text-ink-muted`}>
            Spanning automation, AI, accessibility, CI/CD, and enterprise QA
            leadership.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ Icon, title, tags }, i) => (
            <div key={title} className={`group reveal-scale stagger-${i + 1} ${gv} glass-card p-6`}>
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/[0.08] text-accent transition-colors duration-300 group-hover:border-accent/45 group-hover:bg-accent/[0.16]">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <p className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink-high transition-colors duration-300 group-hover:text-accent">
                  {title}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
