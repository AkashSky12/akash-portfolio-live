'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const awards = [
  {
    icon: '🏆',
    title: 'Best Sprinter',
    org: 'Domino\'s Pizza Enterprises · 2023',
    desc: '300+ automated test cases in 3 sprints, enabling on-time release across 12+ EU storefronts.',
  },
  {
    icon: '⭐',
    title: 'Best Employee',
    org: 'Solve.Care · 2021',
    desc: 'Established the first structured QA function in company history — pioneering blockchain + healthcare device testing.',
  },
  {
    icon: '🎖',
    title: 'Client Appreciation',
    org: 'Siemens Limited · 2019',
    desc: 'Personally recognised for sole ownership of CI/CD pipeline and delivery under a compressed 6-week deadline.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#00d4aa] mb-3">
            Who I Am
          </p>
          <h2 className="font-syne font-extrabold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Quality as a Competitive Advantage
          </h2>
          <p className="text-[#8892a4] max-w-lg text-[15px] leading-relaxed mb-12">
            I don&apos;t just find bugs — I architect systems that prevent them, and
            now I build AI agents that redefine how testing happens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-[15px] text-[#c8d3e5] leading-[1.8]"
          >
            <p>
              I&apos;m a{' '}
              <span className="text-[#00d4aa] font-medium">
                GenAI-powered QA Lead
              </span>{' '}
              with 8+ years of enterprise test automation, European regulatory
              compliance, and distributed team leadership.
            </p>
            <p>
              At{' '}
              <span className="text-[#00d4aa] font-medium">
                Domino&apos;s Pizza Enterprises
              </span>
              , I pioneered GenAI QA agent infrastructure from the ground up —
              cutting manual test-authoring by ~40% per sprint while enforcing
              WCAG 2.1 AA, EN 301 549, and GDPR-aligned data governance across
              30+ country storefronts in Europe, ANZ, and APAC.
            </p>
            <p>
              Before that, at{' '}
              <span className="text-[#00d4aa] font-medium">Solve.Care</span>, I
              built a 10-engineer QA function from scratch in the blockchain
              healthcare space — delivering IEC 62304-compliant testing on a
              live patient-facing platform with near-zero defect escape rate.
            </p>
            <p>
              I&apos;m now open to senior QA architect, automation lead, or
              AI-augmented testing roles at companies where quality engineering
              drives product velocity.
            </p>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#8892a4] mb-4">
              Awards & Recognition
            </p>
            {awards.map((a) => (
              <div
                key={a.title}
                className="glass-card p-5 hover:border-[#00d4aa]/30 transition-colors"
              >
                <div className="font-syne font-bold text-[13px] text-white mb-1">
                  {a.icon} {a.title}
                </div>
                <div className="text-[12px] text-[#00d4aa] mb-2">{a.org}</div>
                <div className="text-[12px] text-[#8892a4] leading-relaxed">
                  {a.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
