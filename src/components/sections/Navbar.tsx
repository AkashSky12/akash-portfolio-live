'use client'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certs', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy
  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.href.slice(1))]
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (targets.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/95 md:bg-bg/80 md:backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="font-display text-[18px] font-extrabold tracking-tight text-ink-high"
        >
          GEN AI Engineer<span className="text-accent"></span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-accent' : 'text-ink-muted hover:text-ink-high'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px bg-accent/70" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !py-2 !px-5 text-[13px]">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            {...{ 'aria-expanded': open }}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-high"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 top-16 bg-bg/95 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`fixed inset-x-0 top-16 origin-top bg-bg-raised transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="container flex flex-col gap-1 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-base font-medium transition-colors ${
                    active === l.href
                      ? 'border-accent/20 bg-accent/10 text-accent'
                      : 'text-ink-high surface-1-hover'
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="text-ink-subtle">→</span>
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
