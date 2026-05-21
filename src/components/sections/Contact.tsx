'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Send } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const details = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'akash.simon@outlook.com',
    href: 'mailto:akash.simon@outlook.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+60 12-747 4204',
    href: 'tel:+60127474204',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Kuala Lumpur, Malaysia',
    href: null as string | null,
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akash-simon',
    href: 'https://www.linkedin.com/in/akash-simon/',
  },
]

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const subject = String(data.get('subject') || 'Opportunity from your portfolio')
    const message = String(data.get('message') || '')

    // Open user's mail client with pre-filled message (works offline / no backend)
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    )
    window.location.href = `mailto:akash.simon@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="heading-lg text-balance mb-5 text-ink-high">
            Let&apos;s build something{' '}
            <span className="accent-text">exceptional</span>.
          </h2>
          <p className="text-pretty mb-12 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            Open to senior QA architect, automation lead, or AI-augmented testing
            roles globally. I respond within 24 hours.
          </p>
        </div>

        <div className="glass-card grid gap-10 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
          {/* Details */}
          <div className="space-y-5">
            <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.1em] text-ink-high">
              Contact details
            </h3>
            <ul className="space-y-4">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-accent">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-[14px] text-ink-high transition-colors hover:text-accent"
                        >
                          {value}
                          {href.startsWith('http') && (
                            <ArrowUpRight
                              size={13}
                              className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            />
                          )}
                        </a>
                      ) : (
                        <p className="text-[14px] text-ink-high">{value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.1em] text-ink-high">
              Send a message
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field name="name" placeholder="Your name" type="text" required />
              <Field name="email" placeholder="Your email" type="email" required />
            </div>
            <Field name="subject" placeholder="Subject" type="text" required />
            <textarea
              name="message"
              placeholder="Tell me about the opportunity..."
              rows={5}
              required
              className="resize-y rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-[14px] text-ink-high placeholder:text-ink-subtle transition-colors focus:border-accent/40"
            />
            <button type="submit" className="btn-primary mt-1 w-full sm:w-auto sm:self-start">
              {sent ? '✓ Opening your mail client…' : (
                <>
                  Send message
                  <Send size={14} />
                </>
              )}
            </button>
            <p className="mt-1 text-[12px] text-ink-muted">
              Prefer direct?{' '}
              <a
                href="mailto:akash.simon@outlook.com"
                className="text-accent hover:underline"
              >
                akash.simon@outlook.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  name,
  placeholder,
  type,
  required,
}: {
  name: string
  placeholder: string
  type: string
  required?: boolean
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-[14px] text-ink-high placeholder:text-ink-subtle transition-colors focus:border-accent/40"
    />
  )
}
