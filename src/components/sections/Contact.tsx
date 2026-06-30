'use client'
import { useState } from 'react'
import { Mail, MapPin, Linkedin, ArrowUpRight, Send } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

/** WhatsApp brand glyph (lucide has no WhatsApp icon). */
function WhatsApp({ size = 20 }: { size?: number | string; strokeWidth?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

type Detail = {
  Icon: React.ComponentType<{ size?: number | string; strokeWidth?: number | string }>
  label: string
  value: string
  href: string | null
  brand?: 'whatsapp'
}

const locations: Record<string, { label: string; flag: string; details: Detail[] }> = {
  IN: {
    label: 'India',
    flag: '🇮🇳',
    details: [
      { Icon: Mail, label: 'Email', value: 'akash.mosey99@gmail.com', href: 'mailto:akash.mosey99@gmail.com' },
      { Icon: WhatsApp, label: 'WhatsApp', value: '+91 81058 44868', href: 'https://wa.me/918105844868', brand: 'whatsapp' },
      { Icon: MapPin, label: 'Location', value: 'Bangalore, India', href: null },
      { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/akash-simon', href: 'https://www.linkedin.com/in/akash-simon/' },
    ],
  },
  MY: {
    label: 'Malaysia',
    flag: '🇲🇾',
    details: [
      { Icon: Mail, label: 'Email', value: 'akash.mosey99@gmail.com', href: 'mailto:akash.mosey99@gmail.com' },
      { Icon: WhatsApp, label: 'WhatsApp', value: '+60 12-747 4204', href: 'https://wa.me/60127474204', brand: 'whatsapp' },
      { Icon: MapPin, label: 'Location', value: 'Kuala Lumpur, Malaysia', href: null },
      { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/akash-simon', href: 'https://www.linkedin.com/in/akash-simon/' },
    ],
  },
}

type CountryKey = keyof typeof locations

export default function Contact() {
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()
  const { ref: cardRef, visible: cardVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const hv = headerVisible ? 'is-visible' : ''
  const cv = cardVisible ? 'is-visible' : ''
  const [sent, setSent] = useState(false)
  const [country, setCountry] = useState<CountryKey>('MY')
  const details = locations[country].details

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
    window.location.href = `mailto:akash.mosey99@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <SectionFX variant="beams" />
      <SectionFX variant="code" />
      <div className="container">
        <div ref={headerRef}>
          <p className={`reveal-item stagger-1 ${hv} eyebrow mb-4`}>Get In Touch</p>
          <h2 className={`reveal-item stagger-2 ${hv} heading-lg text-balance mb-5 text-ink-high`}>
            Let&apos;s build something{' '}
            <span className="accent-text">exceptional</span>.
          </h2>
          <p className={`reveal-item stagger-3 ${hv} text-pretty mb-12 max-w-2xl text-[15px] leading-relaxed text-ink-muted`}>
            Open to senior QA architect, automation lead, or AI-augmented testing
            roles globally. I respond within 24 hours.
          </p>
        </div>

        <div ref={cardRef} className={`reveal-scale stagger-1 ${cv} glass-card grid gap-10 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:gap-12`}>
          {/* Details */}
          <div className="space-y-5">
            <h3 className="font-display text-[20px] font-bold uppercase tracking-[0.1em] text-ink-high">
              Contact details
            </h3>

            {/* Country toggle */}
            <div className="flex gap-2">
              {(Object.keys(locations) as CountryKey[]).map((key) => {
                const active = country === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCountry(key)}
                    {...{ 'aria-pressed': active }}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                      active
                        ? 'border-accent/50 bg-accent/[0.12] text-accent'
                        : 'border-line bg-surface text-ink-muted hover:border-accent/30 hover:text-ink-high'
                    }`}
                  >
                    <span className="text-base leading-none">{locations[key].flag}</span>
                    {locations[key].label}
                  </button>
                )
              })}
            </div>

            <ul key={country} className="space-y-4 animate-fade-in">
              {details.map(({ Icon, label, value, href, brand }) => {
                const isWhatsApp = brand === 'whatsapp'
                return (
                  <li key={label}>
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border ${
                          isWhatsApp
                            ? 'border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366]'
                            : 'border-line bg-surface text-accent'
                        }`}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`group inline-flex items-center gap-1.5 text-[16px] font-semibold text-ink-high transition-colors sm:text-[17px] ${
                              isWhatsApp ? 'hover:text-[#25D366]' : 'hover:text-accent'
                            }`}
                          >
                            {value}
                            {href.startsWith('http') && (
                              <ArrowUpRight
                                size={15}
                                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                              />
                            )}
                          </a>
                        ) : (
                          <p className="text-[16px] font-semibold text-ink-high sm:text-[17px]">{value}</p>
                        )}
                      </div>
                    </div>
                  </li>
                )
              })}
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
              aria-label="Message"
              placeholder="Tell me about the opportunity..."
              rows={5}
              required
              className="resize-y rounded-xl border border-line bg-surface px-4 py-3 text-[14px] text-ink-high placeholder:text-ink-subtle transition-colors focus:border-accent/40"
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

      {/* Flammini-style oversized scrolling “Let’s talk” CTA */}
      <a
        href="mailto:akash.mosey99@gmail.com?subject=Let%E2%80%99s%20talk"
        aria-label="Let’s talk — send me an email"
        className="cta-ticker mt-16 sm:mt-24"
      >
        <div className="cta-ticker-track" aria-hidden="true">
          {[0, 1].map((g) => (
            <div className="cta-ticker-group" key={g}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`cta-ticker-item ${i % 2 ? 'cta-ticker-item--outline' : ''}`}
                >
                  Let’s talk
                  <ArrowUpRight className="cta-ticker-arrow" strokeWidth={1.5} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </a>
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
      aria-label={placeholder}
      required={required}
      className="rounded-xl border border-line bg-surface px-4 py-3 text-[14px] text-ink-high placeholder:text-ink-subtle transition-colors focus:border-accent/40"
    />
  )
}
