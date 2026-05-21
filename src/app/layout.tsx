import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#12100a' },
    { media: '(prefers-color-scheme: light)', color: '#f3ede0' },
  ],
  colorScheme: 'dark light',
}

/**
 * Inlined in <head> so the correct theme is applied before paint.
 * Reads stored preference, falls back to OS preference, defaults to dark.
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`

export const metadata: Metadata = {
  metadataBase: new URL('https://akashsimon.com'),
  title: 'Akash Simon — QA Lead & GenAI Automation Engineer',
  description:
    'GenAI-powered Software Engineer and QA Lead with 9+ years engineering quality at scale. Built GenAI QA agent infrastructure at Domino\'s Pizza Enterprises across 30+ EU storefronts.',
  keywords: [
    'Akash Simon',
    'QA Lead',
    'Test Automation',
    'GenAI QA',
    'Playwright',
    'Selenium',
    'WCAG',
    'GDPR',
    'Accessibility Testing',
    'CI/CD',
    'GitHub Actions',
  ],
  authors: [{ name: 'Akash Simon', url: 'https://akashsimon.com' }],
  openGraph: {
    title: 'Akash Simon — QA Lead & GenAI Automation Engineer',
    description:
      'Building quality systems that scale — from GenAI agent infrastructure to European regulatory compliance.',
    url: 'https://akashsimon.com',
    siteName: 'Akash Simon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Simon — QA Lead & GenAI Automation Engineer',
    description:
      '9+ years engineering quality at scale. Currently at Domino\'s Pizza Enterprises — 30+ EU storefronts.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://akashsimon.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
