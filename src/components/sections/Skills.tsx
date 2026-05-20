'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'Automation',
    tags: ['Playwright (Python)', 'Selenium (Java)', 'Appium', 'WebDriverIO', 'REST Assured', 'TestNG', 'Cucumber BDD', 'Maven'],
  },
  {
    title: 'AI & GenAI',
    tags: ['GenAI QA Agents', 'AI-Driven Automation', 'Prompt Engineering', 'Synthetic Data Generation'],
  },
  {
    title: 'Accessibility & Compliance',
    tags: ['Axe-core', 'WCAG 2.1 AA', 'EN 301 549', 'EAA', 'GDPR', 'IEC 62304'],
  },
  {
    title: 'CI/CD & DevOps',
    tags: ['GitHub Actions', 'Jenkins', 'Git', 'Build Pipeline Management', 'Deployment Oversight'],
  },
  {
    title: 'API & Integration',
    tags: ['Postman', 'Swagger', 'REST Automation', 'Blockchain API', 'Smart Contract Testing', 'API Contract Testing'],
  },
  {
    title: 'Management & Quality',
    tags: ['Jira', 'TestRail', 'Shift-Left Strategy', 'JMeter', 'MySQL', 'PostgreSQL', 'Risk Assessment'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#00d4aa] mb-3">
            Tech Stack
          </p>
          <h2
            className="font-jakarta font-extrabold leading-[1.1] mb-4 section-heading"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Skills & Technology
          </h2>
          <p className="text-[#8892a4] max-w-lg text-[15px] leading-relaxed mb-12">
            A battle-tested toolkit spanning automation, AI, accessibility, CI/CD, and enterprise QA leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 * i }}
              className="glass-card p-5"
            >
              <p className="text-[12px] tracking-[0.10em] uppercase font-bold text-[#00d4aa] mb-4">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
