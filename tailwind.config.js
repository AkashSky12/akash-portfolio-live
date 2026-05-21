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
          DEFAULT: '#070b16',
          raised: '#0a0f1e',
          elevated: '#10162a',
        },
        ink: {
          DEFAULT: '#e8edf5',
          muted: '#8a96ac',
          subtle: '#5b6479',
          high: '#f4f7fc',
        },
        accent: {
          DEFAULT: '#3ee0b8',
          bright: '#5af0c8',
          dark: '#00a88a',
        },
        line: 'rgba(255, 255, 255, 0.08)',
      },
      letterSpacing: {
        tightest: '-0.045em',
        display: '-0.03em',
        wider2: '0.18em',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(62, 224, 184, 0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'aurora': 'aurora 18s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
