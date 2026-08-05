'use client'
import { useState, useRef, useEffect } from 'react'
import { Download, X } from 'lucide-react'
import { trackResumeDownload } from '@/lib/analytics'

type Country = 'IN' | 'MY'

const RESUME_FILES: Record<Country, { url: string; filename: string; label: string; flag: string }> = {
  IN: { url: '/resume/Akash_CV.pdf', filename: 'Akash_CV.pdf', label: 'India', flag: '🇮🇳' },
  MY: { url: '/resume/Akash_Simon_CV.pdf', filename: 'Akash_Simon_CV.pdf', label: 'Malaysia', flag: '🇲🇾' },
}

type Heart = { id: number; x: number; delay: number; scale: number; emoji: string }

const POP_EMOJI = '👍'

/**
 * Download Resume button. On click it downloads the PDF and releases a
 * short burst of floating thumbs-up emojis from the button.
 */
export default function DownloadResume({
  className = '',
  fullWidth = false,
  iconOnly = false,
  label = 'Download Resume',
  onDownload,
}: {
  className?: string
  fullWidth?: boolean
  iconOnly?: boolean
  label?: string
  onDownload?: () => void
}) {
  const [hearts, setHearts] = useState<Heart[]>([])
  const seed = useRef(0)
  const rootRef = useRef<HTMLSpanElement>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [askEmail, setAskEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Close the picker / email popover when clicking anywhere outside this component.
  useEffect(() => {
    if (!showPicker && !askEmail) return
    const onDocPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setShowPicker(false)
        setAskEmail(false)
      }
    }
    document.addEventListener('mousedown', onDocPointer)
    return () => document.removeEventListener('mousedown', onDocPointer)
  }, [showPicker, askEmail])

  const burst = () => {
    const batch: Heart[] = Array.from({ length: 8 }, () => {
      seed.current += 1
      return {
        id: seed.current,
        x: Math.random() * 80 - 40,
        delay: Math.random() * 0.25,
        scale: 0.7 + Math.random() * 0.7,
        emoji: POP_EMOJI,
      }
    })
    setHearts((prev) => [...prev, ...batch])
    // Clean up this batch after the animation finishes.
    const ids = batch.map((h) => h.id)
    window.setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !ids.includes(h.id)))
    }, 1500)
  }

  // Main button opens the country picker rather than downloading directly.
  const openPicker = () => {
    setAskEmail(false)
    setShowPicker((s) => !s)
  }

  const download = (country: Country) => {
    const file = RESUME_FILES[country]
    burst()
    onDownload?.()
    // Always fire the anonymous download event.
    trackResumeDownload(null)
    const a = document.createElement('a')
    a.href = file.url
    a.download = file.filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    // Non-blocking: the PDF has already downloaded; email sharing is optional.
    setShowPicker(false)
    setSubmitted(false)
    setEmail('')
    setAskEmail(true)
  }

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = email.trim()
    if (!value) return
    trackResumeDownload(value)
    setSubmitted(true)
    window.setTimeout(() => setAskEmail(false), 1800)
  }

  // In the full-width (mobile drawer) case, open upward so the options stay on-screen.
  const popoverPos = fullWidth ? 'bottom-full mb-3 left-0' : 'top-full mt-3 right-0'

  return (
    <span ref={rootRef} className={`relative leading-none ${fullWidth ? 'flex w-full' : 'inline-flex'}`}>
      <button
        type="button"
        onClick={openPicker}
        aria-label={iconOnly ? label : undefined}
        title={iconOnly ? label : undefined}
        {...{ 'aria-expanded': showPicker }}
        className={`inline-flex items-center justify-center gap-1.5 leading-none ${fullWidth ? 'w-full' : ''} ${className}`}
      >
        <Download size={iconOnly ? 18 : 15} strokeWidth={2.4} />
        {!iconOnly && label}
      </button>

      {/* Emoji burst — anchored below the button so it bursts downward and never overlays the click area */}
      <span className="pointer-events-none absolute inset-x-0 top-full h-0 overflow-visible" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="heart-pop absolute left-1/2 top-0 text-lg"
            style={{
              // CSS custom props consumed by the .heart-pop keyframes
              ['--hx' as string]: `${h.x}px`,
              ['--hs' as string]: h.scale,
              animationDelay: `${h.delay}s`,
            }}
          >
            {h.emoji}
          </span>
        ))}
      </span>

      {/* Country picker — choose which resume to download */}
      {showPicker && (
        <span
          className={`glass-card no-tilt absolute z-[70] ${popoverPos} w-[min(280px,calc(100vw-2rem))] bg-bg-raised/40 p-5 text-center backdrop-blur-2xl backdrop-saturate-150`}
        >
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setShowPicker(false)}
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-ink-muted transition-colors hover:text-ink-high"
          >
            <X size={15} />
          </button>
          <p className="text-[14px] font-semibold text-ink-high">Choose your region</p>
          <p className="mx-auto mt-1 max-w-[220px] text-[12px] leading-relaxed text-ink-muted">
            Pick the resume with the right contact details.
          </p>
          <div className="mt-4 flex flex-col items-center gap-2.5">
            {(Object.keys(RESUME_FILES) as Country[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => download(key)}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-surface/40 px-5 py-2.5 text-[14px] font-semibold text-ink-high transition-all hover:border-accent/40 hover:bg-accent/[0.12] hover:text-accent"
              >
                <span className="text-xl leading-none">{RESUME_FILES[key].flag}</span>
                {RESUME_FILES[key].label}
              </button>
            ))}
          </div>
        </span>
      )}

      {/* Optional, non-blocking email capture — the PDF is already downloaded */}
      {askEmail && (
        <span
          className={`absolute z-50 ${popoverPos} w-[min(300px,calc(100vw-2rem))] rounded-2xl border border-line bg-bg-raised p-4 text-left shadow-2xl`}
        >
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setAskEmail(false)}
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-ink-muted transition-colors hover:text-ink-high"
          >
            <X size={15} />
          </button>
          {submitted ? (
            <p className="py-2 text-[13px] font-medium text-ink-high">
              Thanks! I&apos;ll keep you posted. 🙌
            </p>
          ) : (
            <>
              <p className="pr-6 text-[13px] font-semibold text-ink-high">
                Thanks for downloading!
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
                Optional — Questions or opportunities? Leave your email, and I'll get back to you soon.
              </p>
              <form onSubmit={submitEmail} className="mt-3 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Your email (optional)"
                  className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-[13px] text-ink-high placeholder:text-ink-subtle focus:border-accent/40 focus:outline-none"
                />
                <button type="submit" className="btn-primary !py-2 !px-3 text-[12px]">
                  Send
                </button>
              </form>
            </>
          )}
        </span>
      )}
    </span>
  )
}
