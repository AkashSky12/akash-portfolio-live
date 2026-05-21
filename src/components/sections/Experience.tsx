'use client'
import { useReveal } from '@/lib/useReveal'

type Bullet = { bold?: string; rest: string }
type Job = {
  period: string
  role: string
  company: string
  location: string
  tag?: string
  current?: boolean
  bullets: Bullet[]
}

const experiences: Job[] = [
  {
    period: 'Aug 2023 — Present',
    role: 'Software Quality Engineer',
    company: "Domino's Pizza Enterprises Limited",
    location: 'Kuala Lumpur, Malaysia',
    tag: 'European Market QA · 30+ Country Storefronts',
    current: true,
    bullets: [
      {
        bold: 'Pioneered GenAI QA agent infrastructure from zero',
        rest: ' — custom AI agents automating test case generation, synthetic data creation, and exploratory workflows, cutting manual test-authoring by ~40% per sprint.',
      },
      {
        bold: 'Architected a Playwright (Python) automation framework',
        rest: ' for 30+ EU country storefronts, achieving ~85% regression coverage and reducing release validation cycle time by 30%.',
      },
      {
        bold: 'Engineered automated accessibility testing via Axe-core',
        rest: ' — enforcing WCAG 2.1 AA and EN 301 549 compliance; violations surface as first-class defects in the CI pipeline.',
      },
      {
        bold: 'Built GitHub Actions CI/CD pipelines',
        rest: ' on every PR — saving 8+ hours/week in manual execution and enforcing zero-defect gates before deployment.',
      },
      {
        rest: 'Established European Quality Systems documentation, GDPR-aligned test data governance, and regulatory compliance standards.',
      },
    ],
  },
  {
    period: 'Apr 2022 — Aug 2023',
    role: 'Senior Automation QA Engineer',
    company: 'Solve.Care',
    location: 'Bangalore, India',
    tag: 'Blockchain Healthcare Platform',
    bullets: [
      {
        bold: 'Built a full Selenium (Java) + TestNG framework from zero',
        rest: ', with automated reporting pipelines integrated with TestRail and Jira — saving 3+ hours of manual reporting per sprint.',
      },
      {
        bold: 'Managed a cross-functional QA team of 10 engineers across 3 geographies',
        rest: ', owning sprint planning, defect triage, acceptance criteria, and release sign-off.',
      },
      {
        bold: 'Delivered blockchain API contract testing and healthcare device interoperability testing',
        rest: ' — validating IEC 62304 compliance and clinical data integrity on a live patient-facing platform.',
      },
      {
        bold: 'Reduced defect escape rate to near-zero',
        rest: ' across 6 production releases via shift-left BDD coverage and mandatory pre-build acceptance criteria sign-off.',
      },
    ],
  },
  {
    period: 'Oct 2017 — Mar 2022',
    role: 'Senior Test Engineer',
    company: 'Quinta Systems Pvt. Ltd.',
    location: 'Bangalore, India',
    tag: 'Enterprise Software & Client Services · incl. Siemens',
    bullets: [
      {
        bold: 'Architected a hybrid Selenium + TestNG + Appium framework from scratch',
        rest: ' — web, Android, and iOS coverage for 5+ enterprise clients, reducing regression run time by ~35%.',
      },
      {
        rest: 'Delivered full-stack QA coverage: API (Postman, REST Assured), data validation (MySQL, PostgreSQL), Jenkins CI/CD — zero critical defect escapes across all client releases.',
      },
      {
        rest: 'Authored comprehensive Test Strategies, Plans, Scenarios, and Cases — full requirements traceability across 10+ concurrent enterprise engagements.',
      },
    ],
  },
  {
    period: 'Feb 2017 — Sep 2017',
    role: 'Application Support Engineer',
    company: 'Pole To Win International',
    location: 'Bangalore, India',
    bullets: [
      {
        rest: 'Executed structured manual and regression testing across multiple game platforms; maintained TestRail repositories with full traceability to functional specs.',
      },
    ],
  },
]

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow mb-4">Career</p>
          <h2 className="heading-lg text-balance mb-5 text-ink-high">
            A track record of shipping quality at scale.
          </h2>
          <p className="text-pretty mb-16 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            Nine years of progressive QA leadership across food-tech, blockchain
            healthcare, and enterprise software.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-line to-transparent"
          />
          <ol>
          {experiences.map((exp) => (
            <li key={exp.role + exp.company} className="relative pl-10 pb-14 last:pb-0">
              {/* Dot */}
              <span
                aria-hidden
                className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 ${
                  exp.current
                    ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(62,224,184,0.18)]'
                    : 'border-accent/60 bg-bg'
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Now
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-[1.2rem] font-bold leading-tight text-ink-high sm:text-[1.35rem]">
                {exp.role}
              </h3>
              <p className="mt-1 text-[13.5px] text-ink-muted">
                <span className="text-ink">{exp.company}</span>
                <span className="text-ink-subtle"> · {exp.location}</span>
              </p>
              {exp.tag && (
                <p className="mt-1 text-[12px] text-accent/90">{exp.tag}</p>
              )}

              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-[14px] leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[10px] h-1 w-1 rounded-full bg-accent/70"
                    />
                    {b.bold && (
                      <strong className="font-semibold text-ink-high">
                        {b.bold}
                      </strong>
                    )}
                    <span className="text-ink-muted">{b.rest}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
