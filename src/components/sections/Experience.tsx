'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    period: 'Aug 2023 – Present',
    role: 'Software Quality Engineer',
    company: 'Domino\'s Pizza Enterprises Limited',
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
        bold: '',
        rest: 'Established European Quality Systems documentation, GDPR-aligned test data governance, and regulatory compliance standards.',
      },
    ],
  },
  {
    period: 'Apr 2022 – Aug 2023',
    role: 'Senior Automation QA Engineer',
    company: 'Solve.Care',
    location: 'Bangalore, India',
    tag: 'Blockchain Healthcare Platform',
    current: false,
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
    period: 'Oct 2017 – Mar 2022',
    role: 'Senior Test Engineer',
    company: 'Quinta Systems Pvt. Ltd.',
    location: 'Bangalore, India',
    tag: 'Enterprise Software & Client Services · incl. Siemens',
    current: false,
    bullets: [
      {
        bold: 'Architected a hybrid Selenium + TestNG + Appium framework from scratch',
        rest: ' — web, Android, and iOS coverage for 5+ enterprise clients, reducing regression run time by ~35%.',
      },
      {
        bold: '',
        rest: 'Delivered full-stack QA coverage: API (Postman, REST Assured), data validation (MySQL, PostgreSQL), Jenkins CI/CD — zero critical defect escapes across all client releases.',
      },
      {
        bold: '',
        rest: 'Authored comprehensive Test Strategies, Plans, Scenarios, and Cases — full requirements traceability across 10+ concurrent enterprise engagements.',
      },
    ],
  },
  {
    period: 'Feb 2017 – Sep 2017',
    role: 'Application Support Engineer',
    company: 'Pole To Win International',
    location: 'Bangalore, India',
    tag: '',
    current: false,
    bullets: [
      {
        bold: '',
        rest: 'Executed structured manual and regression testing across multiple game platforms; maintained TestRail repositories with full traceability to functional specs.',
      },
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#00d4aa] mb-3">
            Career
          </p>
          <h2
            className="font-jakarta font-extrabold leading-[1.1] mb-4 section-heading"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Professional Experience
          </h2>
          <p className="text-[#8892a4] max-w-lg text-[15px] leading-relaxed mb-12">
            Eight years of progressive QA leadership across food-tech, blockchain
            healthcare, and enterprise software.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative pl-8 pb-10 border-l border-white/[0.08] last:border-transparent last:pb-0"
            >
              {/* dot */}
              <div
                className={`absolute left-[-6px] top-1 w-3 h-3 rounded-full border-2 border-[#00d4aa] ${
                  exp.current ? 'bg-[#00d4aa]' : 'bg-[#0a0f1e]'
                }`}
              />

              <span className="text-[11px] text-[#00d4aa] font-semibold uppercase tracking-widest">
                {exp.period}
              </span>
              <h3 className="font-jakarta font-bold text-[1.15rem] text-[#f0f4ff] mt-1 mb-0.5">
                {exp.role}
              </h3>
              <p className="text-[13px] text-[#8892a4] mb-0.5">
                {exp.company} · {exp.location}
              </p>
              {exp.tag && (
                <p className="text-[11px] text-[#00d4aa] mb-4">{exp.tag}</p>
              )}
              <ul className="space-y-2 mt-3">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-[13.5px] text-[#aab4c4] leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 top-[5px] text-[#00d4aa] text-[10px]">
                      ▸
                    </span>
                    {b.bold && (
                      <strong className="text-white font-medium">{b.bold}</strong>
                    )}
                    {b.rest}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
