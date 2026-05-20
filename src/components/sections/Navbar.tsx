'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[60px] transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <div className="font-jakarta font-extrabold text-[18px] text-[#f0f4ff]">
        Akash<span className="text-[#00d4aa]">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[#c8d3e5] text-[13px] font-medium tracking-widest uppercase transition-colors hover:text-[#00d4aa]"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="mailto:akash.simon@outlook.com"
        className="hidden md:inline-block text-[13px] font-jakarta font-semibold bg-[#00d4aa] text-[#0a0f1e] px-4 py-2 rounded-lg hover:bg-[#00a88a] transition-colors"
      >
        Hire Me
      </a>
    </nav>
  )
}
