'use client'
import { useEffect, useRef, useState } from 'react'
import { Linkedin, Mail, ArrowUp } from 'lucide-react'
import SectionFX from '@/components/SectionFX'

/** WhatsApp brand glyph (lucide has no WhatsApp icon). */
function WhatsApp({ size = 16 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

const whatsappContacts = [
  { code: 'IN', label: 'India', flag: '🇮🇳', number: '+91 81058 44868', href: 'https://wa.me/918105844868' },
  { code: 'MY', label: 'Malaysia', flag: '🇲🇾', number: '+60 12-747 4204', href: 'https://wa.me/60127474204' },
]

function WhatsAppPicker() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (href: string) => {
    setOpen(false)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        aria-haspopup="menu"
        {...{ 'aria-expanded': open }}
        className="grid h-10 w-10 place-items-center rounded-full border border-[#25D366]/30 bg-[#25D366]/[0.08] text-[#25D366] transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/15"
      >
        <WhatsApp size={16} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-12 left-0 z-50 w-56 overflow-hidden rounded-xl border border-line bg-bg-raised shadow-xl sm:left-auto sm:right-0"
        >
          <p className="border-b border-line px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
            Choose a country
          </p>
          {whatsappContacts.map((c) => (
            <button
              key={c.code}
              type="button"
              role="menuitem"
              onClick={() => choose(c.href)}
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-[#25D366]/10"
            >
              <span className="text-lg leading-none">{c.flag}</span>
              <span className="flex flex-1 flex-col">
                <span className="text-[13px] font-semibold text-ink-high">{c.label}</span>
                <span className="text-[12px] text-ink-muted">{c.number}</span>
              </span>
              <span className="text-[#25D366]">
                <WhatsApp size={15} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line py-10">
      <SectionFX variant="starfield" />
      <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-[15px] font-extrabold text-ink-high">
            Assured Quality<span className="text-accent"></span>
          </p>
          <p className="mt-1 text-[12.5px] text-ink-muted">
            © {new Date().getFullYear()} Akash Simon · Built with precision, deployed with confidence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <WhatsAppPicker />
          <a
            href="https://www.linkedin.com/in/akash-simon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/[0.08] text-[#0A66C2] transition-all hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15"
          >
            <Linkedin size={16} strokeWidth={2} />
          </a>
          <a
            href="mailto:akash.simon@outlook.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#EA4335]/30 bg-[#EA4335]/[0.08] text-[#EA4335] transition-all hover:border-[#EA4335]/50 hover:bg-[#EA4335]/15"
          >
            <Mail size={16} strokeWidth={2} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 bg-accent/[0.08] text-accent transition-all hover:border-accent/50 hover:bg-accent/15"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  )
}
