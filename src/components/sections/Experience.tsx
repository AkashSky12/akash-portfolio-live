'use client'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

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
    tag: 'E-Commerce · Retail Tech',
    current: true,
    bullets: [
      {
        bold: 'Pioneered GenAI-powered QA agent infrastructure from zero',
        rest: ' — built custom agents for test case generation, synthetic data creation, and exploratory workflows; reduced manual test authoring effort by ~40% per sprint.',
      },
      {
        bold: 'Engineered accessibility automation with Axe-core in Playwright',
        rest: ' — enforced WCAG 2.1 AA across European web properties and surfaced accessibility violations directly in CI as first-class defects.',
      },
      {
        bold: 'Built and maintained GitHub Actions CI/CD pipelines',
        rest: ' to trigger automated test suites on pull requests and release branches, accelerating developer feedback and reducing manual execution overhead.',
      },
      {
        bold: 'Led end-to-end AI-augmented quality strategy',
        rest: ' as the primary automation engineer, defining quality gates, aligning QA milestones to business releases, and coordinating cross-functional product-engineering delivery.',
      },
      {
        bold: 'Managed QA coordination and release quality for 12+ customer-facing platforms',
        rest: ' across ANZ, APAC, and EU regions, ensuring consistent multi-region deployments and stable customer experience.',
      },
      {
        bold: 'Established global Quality Systems documentation and compliance standards',
        rest: ' and delivered executive-level QA reporting to senior program stakeholders across European markets.',
      },
      {
        bold: 'Drove performance and operational quality improvements',
        rest: ' by implementing Grafana K6 monitoring, strengthening production-readiness checks, and coaching teams on quality best practices.',
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
        bold: 'Built a Selenium (Java) + TestNG automation framework from the ground up',
        rest: ', integrating TestRail and Jira reporting to replace manual status tracking with real-time quality visibility for stakeholders.',
      },
      {
        bold: 'Led requirement elicitation in product and build grooming sessions',
        rest: ', translating specifications into structured test plans, traceable acceptance criteria, and sprint-ready QA deliverables.',
      },
      {
        bold: 'Automated functional and regression coverage across priority tickets',
        rest: ', improved suite reliability through targeted debugging, and accelerated pre-release validation cycles.',
      },
      {
        bold: 'Delivered blockchain API contract testing and healthcare device interoperability validation',
        rest: ' (BMI, heart rate, ECG), strengthening data integrity and release confidence for a live patient-facing platform.',
      },
      {
        bold: 'Managed and mentored a cross-functional QA team of 10 across 3 locations',
        rest: ', directing Agile test execution, defect triage, and release readiness with engineering and business teams.',
      },
      {
        bold: 'Presented automation demos and release-readiness reports before production deployments',
        rest: ', improving stakeholder alignment and enabling predictable, quality-driven go-live decisions.',
      },
      {
        bold: 'Defined organization-wide automation strategy, QA standards, and tooling best practices',
        rest: ', strengthening Agile quality workflows and delivery consistency across concurrent sprints.',
      },
      {
        bold: 'Improved test management maturity using TestRail and Jira',
        rest: ', standardizing traceability from requirements to execution results and accelerating defect lifecycle reporting.',
      },
      {
        bold: 'Conducted release-focused stakeholder walkthroughs',
        rest: ', demonstrating acceptance-criteria coverage and increasing confidence in production readiness decisions.',
      },
      {
        bold: 'Strengthened team capability through hands-on mentoring and process coaching',
        rest: ', enabling consistent QA execution across distributed contributors and mixed seniority levels.',
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
        bold: 'Architected a hybrid Selenium (Java) + TestNG + Appium automation framework from scratch',
        rest: ' — delivered end-to-end web, Android, and iOS coverage across concurrent enterprise client projects, including Siemens.',
      },
      {
        bold: 'Delivered a high-complexity Siemens engagement under compressed timelines',
        rest: ' with full ownership of CI/CD quality gates, deployment validation, and post-launch sign-off; recognized with a Client Appreciation Award.',
      },
      {
        bold: 'Authored and owned test strategy artifacts',
        rest: ' (test strategy, plans, scenarios, and test cases) from business and functional requirements, improving traceability and quality-focused execution across multiple projects.',
      },
      {
        bold: 'Delivered full-stack QA across UI, API, and data layers',
        rest: ' using Postman, Swagger, REST Assured, MySQL, and PostgreSQL, strengthening end-to-end validation before release.',
      },
      {
        bold: 'Integrated Jenkins and Git-driven automation execution pipelines',
        rest: ', standardizing build-level test reporting, logging, and release-quality visibility.',
      },
      {
        bold: 'Served as Scrum Master for QA delivery',
        rest: ', facilitating sprint ceremonies, backlog refinement, and cross-team coordination across SDLC/STLC workflows.',
      },
      {
        bold: 'Drove defect lifecycle quality with development teams',
        rest: ' through root cause analysis, requirement and design inconsistency resolution, and severity-based prioritization.',
      },
      {
        bold: 'Led training for in-house and offshore QA engineers',
        rest: ' on automation frameworks, testing standards, and execution practices, improving onboarding speed and consistency across distributed teams.',
      },
      {
        bold: 'Analyzed test results, quality metrics, and performance trends',
        rest: ', creating Jira-based reporting that improved defect visibility and accelerated risk-based release decisions.',
      },
      {
        bold: 'Owned end-to-end QA execution across the SDLC and STLC',
        rest: ', delivering quality outcomes under aggressive enterprise timelines through structured planning and execution control.',
      },
      {
        bold: 'Coordinated API validation with developers and business analysts',
        rest: ' using Postman, Swagger, and REST Assured, ensuring contract alignment and reducing integration issues before production.',
      },
      {
        bold: 'Supported client-facing delivery through project demos and release walkthroughs',
        rest: ', translating technical test outcomes into clear business-facing quality updates for stakeholders.',
      },
    ],
  },
  {
    period: 'Feb 2017 — Sep 2017',
    role: 'Application Support Engineer',
    company: 'Pole To Win International',
    location: 'Bangalore, India',
    tag: 'Rockstar Game Testing',
    bullets: [
      {
        bold: 'Executed structured manual testing across multiple gaming platforms',
        rest: ', validating gameplay, UI behavior, and platform compatibility to support launch-ready quality standards.',
      },
      {
        bold: 'Performed regression, smoke, and exploratory test cycles under tight release timelines',
        rest: ', identifying critical pre-launch defects and accelerating severity-based triage.',
      },
      {
        bold: 'Authored clear, reproducible defect reports with detailed evidence',
        rest: ', improving collaboration with developers and reducing issue turnaround time.',
      },
      {
        bold: 'Designed and maintained TestRail test repositories',
        rest: ', mapping test coverage to functional requirements and improving traceability across concurrent game titles.',
      },
      {
        bold: 'Standardized manual test case design and execution practices',
        rest: ' in a product-driven game testing environment, reducing regression coverage gaps and increasing release confidence.',
      },
      {
        bold: 'Coordinated with QA leads and engineering teams on high-impact issue prioritization',
        rest: ', helping ensure stable builds and consistent player experience at release.',
      },
    ],
  },
]

function TimelineItem({ exp }: { exp: Job }) {
  // Each company reveals on its own as it scrolls into view.
  const { ref, visible } = useReveal<HTMLLIElement>({ threshold: 0, rootMargin: '0px 0px -12% 0px' })
  return (
    <li
      ref={ref}
      className={`group reveal-left stagger-1 ${visible ? 'is-visible' : ''} relative pl-10 pb-14 last:pb-0`}
    >
      {/* Dot */}
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
          exp.current
            ? 'border-accent bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.18)]'
            : 'border-accent/60 bg-bg group-hover:border-accent group-hover:shadow-[0_0_0_5px_rgb(var(--accent)/0.18)]'
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

      <h3 className="mt-2 inline-flex items-center gap-2 font-display text-[1.2rem] font-bold leading-tight text-ink-high transition-colors duration-300 group-hover:text-accent sm:text-[1.35rem]">
        {exp.role}
        <ArrowUpRight
          size={18}
          strokeWidth={2}
          aria-hidden
          className="-translate-x-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
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
  )
}

export default function Experience() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const hv = headerVisible ? 'is-visible' : ''

  return (
    <section id="experience" className="section">
      <SectionFX variant="particles" />
      <SectionFX variant="helix" />
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Career</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-5 text-ink-high`}>
            A track record of shipping quality at scale.
          </h2>
          <p className={`reveal-item stagger-3 ${hv} text-pretty mb-16 max-w-2xl text-[15px] leading-relaxed text-ink-muted`}>
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
            <TimelineItem key={exp.role + exp.company} exp={exp} />
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
