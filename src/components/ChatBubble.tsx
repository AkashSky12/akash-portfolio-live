'use client'
import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

/**
 * Floating live-chat style bubble (bottom-right). Shows a pulsing notification
 * dot until opened; the popover CTA scrolls to the contact section.
 */
export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [showDot, setShowDot] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Reveal the bubble a moment after load so it feels like an incoming message.
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  const toggle = () => {
    setOpen((o) => !o)
    setShowDot(false)
  }

  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-7 sm:right-7 ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {/* Popover card */}
      <div
        className={`w-[min(320px,calc(100vw-2.5rem))] origin-bottom-right rounded-2xl border border-line bg-bg-raised p-5 shadow-2xl transition-all duration-300 ${
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        }`}
        role="dialog"
        aria-label="Contact Akash"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-lg">👋</span>
          <div>
            <p className="text-[14px] font-semibold text-ink-high">Hi, I&apos;m Akash</p>
            <p className="text-[12px] text-ink-muted">Usually replies within 24 hours</p>
          </div>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
          Looking for a QA lead or automation engineer? Let&apos;s talk about your team.
        </p>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="btn-primary mt-4 w-full !py-2.5 text-[13px]"
        >
          Start a conversation
        </a>
      </div>

      {/* Bubble toggle */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Close chat' : 'Open chat'}
        {...{ 'aria-expanded': open }}
        className="pointer-events-auto relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[rgb(var(--accent-bright))] via-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] text-[rgb(var(--accent-ink))] shadow-[0_10px_30px_-6px_rgb(var(--accent)/0.7)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
        {showDot && !open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  )
}
