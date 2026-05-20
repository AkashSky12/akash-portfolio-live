'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const contactDetails = [
  { icon: '📧', label: 'Email', value: 'akash.simon@outlook.com', href: 'mailto:akash.simon@outlook.com' },
  { icon: '📱', label: 'Phone', value: '+60-127474204', href: 'tel:+60127474204' },
  { icon: '📍', label: 'Location', value: 'Kuala Lumpur, Malaysia', href: null },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/akash-simon', href: 'https://www.linkedin.com/in/akash-simon/' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire this to a form service like Formspree or EmailJS
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#00d4aa] mb-3">
            Get In Touch
          </p>
          <h2
            className="font-jakarta font-extrabold leading-[1.1] mb-4 section-heading"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Let&apos;s Build Something<br />Exceptional
          </h2>
          <p className="text-[#8892a4] max-w-lg text-[15px] leading-relaxed mb-10">
            Open to senior QA architect, automation lead, or AI-augmented testing roles globally. I respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-8 grid md:grid-cols-2 gap-10"
        >
          {/* Details */}
          <div className="space-y-5">
            <h3 className="font-jakarta font-bold text-[15px] text-[#f0f4ff] mb-6">Contact Details</h3>
            {contactDetails.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex-shrink-0 bg-[#00d4aa]/08 border border-white/[0.07] rounded-lg flex items-center justify-center text-[18px]">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[11px] text-[#8892a4] uppercase tracking-widest mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="text-[13px] text-white hover:text-[#00d4aa] transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-[13px] text-white">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h3 className="font-jakarta font-bold text-[15px] text-[#f0f4ff] mb-2">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#8892a4] outline-none focus:border-[#00d4aa]/40 transition-colors font-dm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#8892a4] outline-none focus:border-[#00d4aa]/40 transition-colors font-dm"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#8892a4] outline-none focus:border-[#00d4aa]/40 transition-colors font-dm"
            />
            <textarea
              placeholder="Tell me about the opportunity..."
              rows={4}
              required
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#8892a4] outline-none focus:border-[#00d4aa]/40 transition-colors resize-y font-dm"
            />
            <button
              type="submit"
              className="w-full font-jakarta font-semibold text-sm bg-[#00d4aa] text-[#0a0f1e] py-3 rounded-lg hover:bg-[#00a88a] transition-all active:scale-[0.98]"
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            <p className="text-[11px] text-[#8892a4] text-center">
              Or email directly:{' '}
              <a href="mailto:akash.simon@outlook.com" className="text-[#00d4aa] hover:underline">
                akash.simon@outlook.com
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
