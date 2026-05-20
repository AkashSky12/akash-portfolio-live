'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certs = [
  { icon: '🏅', name: 'ISTQB Foundation Level', body: 'ISTQB / UKITB', status: 'Certified' },
  { icon: '🤖', name: 'AI Fundamentals Certification', body: 'Applied GenAI Workflows & Principles', status: 'Certified' },
  { icon: '📋', name: 'ISTQB Advanced Level — Test Manager', body: 'ISTQB', status: 'In Progress' },
  { icon: '🎓', name: 'B.E. Computer Science Engineering', body: 'Visvesvaraya Technological University', status: 'Graduated' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certs" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#00d4aa] mb-3">
            Credentials
          </p>
          <h2
            className="font-jakarta font-extrabold leading-[1.1] mb-10 section-heading"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Certifications & Education
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="text-2xl flex-shrink-0 w-11 h-11 bg-[#00d4aa]/10 rounded-xl flex items-center justify-center">
                {c.icon}
              </div>
              <div>
                <p className="font-jakarta font-bold text-[14px] text-[#f0f4ff] leading-tight mb-1">
                  {c.name}
                </p>
                <p className="text-[12px] text-[#00d4aa] mb-1">{c.body}</p>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    c.status === 'In Progress'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-[#00d4aa]/10 text-[#00d4aa]'
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
