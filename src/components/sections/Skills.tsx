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
  Trophy,
  Star,
  Award,
  BadgeCheck,
  GraduationCap,
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

const awards = [
  {
    Icon: Star,
    title: 'Best Sprinter',
    org: "Domino's Pizza Enterprises · 2025",
    desc: 'Cross platform application release and UAT co-ordination, enabling on-time release across 12+ Markets',
  },
  {
    Icon: BadgeCheck,
    title: 'Best Team Player',
    org: 'Solve.Care · 2023',
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
    org: 'Quinta Systems PVT LTD · 2020',
    desc: 'Personally recognized for sole ownership of End-to-End automation  under a compressed 6-week deadline.',
  },
]

export default function Skills() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const { ref: gridRef, visible: gridVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const { ref: domainsRef, visible: domainsVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const { ref: awardsRef, visible: awardsVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const gv = gridVisible ? 'is-visible' : ''
  const dv = domainsVisible ? 'is-visible' : ''
  const av = awardsVisible ? 'is-visible' : ''

  return (
    <section id="skills" className="section scroll-mt-16">
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

        <div ref={domainsRef} className="mt-6">
          <h3 className="mb-4 font-display text-[16px] font-bold uppercase tracking-[0.16em] text-ink-muted">
            Domains
          </h3>
          <div className={`reveal-scale stagger-1 ${dv} glass-card flex items-start gap-4 p-6`}>
            <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
              <GraduationCap size={20} strokeWidth={2} />
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

        <div ref={awardsRef} className="mt-16">
          <p className={`reveal-item stagger-1 ${av} mb-5 text-[40px] font-bold uppercase tracking-[0.1em] text-accent`}>
            Awards &amp; Recognition
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map(({ Icon, title, org, desc }, i) => (
              <li key={title} className={`reveal-scale stagger-${i + 1} ${av} glass-card p-5`}>
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
    </section>
  )
}
