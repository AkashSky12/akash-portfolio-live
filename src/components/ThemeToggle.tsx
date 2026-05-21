'use client'

import { Moon, Sun } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  return 'dark'
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(getInitialTheme())
    setMounted(true)
  }, [])

  const apply = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* ignore */ }
    setTheme(next)
  }, [])

  const toggle = useCallback(() => {
    apply(theme === 'dark' ? 'light' : 'dark')
  }, [theme, apply])

  // Follow OS changes only when the user has not made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return
      } catch { /* ignore */ }
      apply(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [apply])

  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      {...{ 'aria-pressed': !isDark }}
      suppressHydrationWarning
      className={
        'grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-high transition-colors hover:text-accent hover:border-accent/40 ' +
        className
      }
    >
      <span className="sr-only">{label}</span>
      {mounted ? (
        isDark ? <Moon size={16} strokeWidth={2} aria-hidden /> : <Sun size={16} strokeWidth={2} aria-hidden />
      ) : (
        <span aria-hidden className="block h-4 w-4" />
      )}
    </button>
  )
}
