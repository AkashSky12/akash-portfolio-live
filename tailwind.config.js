/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1120px',
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT:  'rgb(var(--bg) / <alpha-value>)',
          raised:   'rgb(var(--bg-raised) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          muted:   'rgb(var(--ink-muted) / <alpha-value>)',
          subtle:  'rgb(var(--ink-subtle) / <alpha-value>)',
          high:    'rgb(var(--ink-high) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          bright:  'rgb(var(--accent-bright) / <alpha-value>)',
          dark:    'rgb(var(--accent-dark) / <alpha-value>)',
          ink:     'rgb(var(--accent-ink) / <alpha-value>)',
        },
        surface: 'rgb(var(--surface-1) / <alpha-value>)',
        line:    'rgb(var(--line) / <alpha-value>)',
      },
      borderColor: {
        /* default `border-line` renders at low alpha for hairline dividers */
        line: 'rgb(var(--line) / 0.10)',
      },
      backgroundColor: {
        /* convenience: `bg-surface` defaults to a faint tint (theme-aware) */
        surface: 'rgb(var(--surface-1) / 0.04)',
      },
      letterSpacing: {
        tightest: '-0.045em',
        display: '-0.03em',
        wider2: '0.18em',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgb(var(--accent) / 0.45)',
        card: '0 1px 0 0 rgb(var(--surface-1) / 0.04) inset, 0 24px 48px -24px rgb(0 0 0 / 0.6)',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':   'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in':  'scaleIn 0.7s cubic-bezier(0.34, 1.2, 0.64, 1) forwards',
        'slide-left':'slideLeft 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'aurora':    'aurora 22s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':     'float 5s ease-in-out infinite',
        'shimmer':   'shimmer 2.4s linear infinite',
        'bounce-y':  'bounceY 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.90) translateY(18px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(6%, -4%) scale(1.05)' },
          '66%':      { transform: 'translate(-4%, 6%) scale(0.97)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}
