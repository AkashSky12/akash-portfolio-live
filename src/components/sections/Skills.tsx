'use client'
import {
  Bot,
  Cog,
  ShieldCheck,
  GitBranch,
  Webhook,
  ClipboardCheck,
  Database,
  Layers3,
} from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

const domains = [
  'E-Commerce',
  'Omnichannel Retail Tech',
  'Blockchain Healthcare',
  'Medical Device Integration',
  'Supply Chain Management',
  'WIP Enterprise Software',
  'Enterprise Software & Client Services',
  'Game Testing',
]

const groups = [
  {
    Icon: Cog,
    title: 'Automation',
    tags: [
      'Playwright (Python)',
      'Selenium (Java)',
      'Appium (Android/iOS)',
      'WebDriverIO',
      'REST Assured',
      'TestNG',
      'Cucumber (BDD)',
      'Maven',
    ],
  },
  {
    Icon: Bot,
    title: 'AI & GenAI',
    tags: [
      'Custom GenAI QA Agent',
      'AI-Driven Automation',
      'Prompt Engineering for QA',
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Accessibility',
    tags: [
      'Axe-core',
      'WCAG 2.1 AA Compliance',
      'Playwright-Axe Integration',
      'Accessibility Defect Tracking in CI Pipelines',
    ],
  },
  {
    Icon: GitBranch,
    title: 'CI/CD & DevOps',
    tags: [
      'GitHub Actions',
      'Jenkins',
      'Git',
      'CI/CD Pipeline Integration',
      'Build Pipeline Management',
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
      'Blockchain API / Smart Contract Testing',
      'API Contract Testing',
    ],
  },
  {
    Icon: ClipboardCheck,
    title: 'Test Management',
    tags: [
      'Jira',
      'TestRail',
      'Test Strategy & Planning',
      'Shift-Left Testing',
      'SDLC / STLC',
      'Defect Management',
      'Risk Assessment',
    ],
  },
  {
    Icon: Database,
    title: 'Databases',
    tags: [
      'MySQL',
      'PostgreSQL',
      'Data Validation',
      'Front-End / Back-End Integrity Testing',
    ],
  },
]

export default function Skills() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const { ref: gridRef, visible: gridVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const { ref: domainsRef, visible: domainsVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const gv = gridVisible ? 'is-visible' : ''
  const dv = domainsVisible ? 'is-visible' : ''

  return (
    <section id="skills" className="section">
      <SectionFX variant="code" />
      <SectionFX variant="waves" />
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Skills &amp; Technology</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-5 text-ink-high`}>
            A battle-tested toolkit.
          </h2>
          <p className={`reveal-item stagger-3 ${hv} text-pretty mb-10 max-w-2xl text-[15px] leading-relaxed text-ink-muted`}>
            Core competencies spanning test automation architecture,
            AI-augmented QA, accessibility, API and contract testing, CI/CD, and
            cross-functional QA leadership.
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

        <div ref={domainsRef} className={`reveal-scale stagger-4 ${dv} glass-card mt-10 p-6`}>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/[0.08] text-accent">
              <Layers3 size={16} strokeWidth={2} />
            </div>
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink-high">
              Domains
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {domains.map((domain) => (
              <span key={domain} className="chip">
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
