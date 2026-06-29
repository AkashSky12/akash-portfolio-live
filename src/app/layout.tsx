import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const display = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    { media: '(prefers-color-scheme: dark)',  color: '#060607' },
    { media: '(prefers-color-scheme: light)', color: '#fafafb' },
  ],
  colorScheme: 'dark light',
}

/**
 * Inlined in <head> so the correct theme is applied before paint.
 * Reads stored preference, falls back to OS preference, defaults to dark.
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`

/**
 * Always start a reload at the top of the page (desktop + mobile). Disables the
 * browser's scroll-position restoration and resets to top on load when there is
 * no in-page anchor to honor.
 */
const scrollResetScript = `(function(){try{if('scrollRestoration' in history){history.scrollRestoration='manual';}if(!window.location.hash){window.scrollTo(0,0);}window.addEventListener('load',function(){if(!window.location.hash){window.scrollTo(0,0);}});}catch(e){}})();`

export const metadata: Metadata = {
  metadataBase: new URL('https://akashsimon.com'),
  title: 'Akash Simon - Software Engineer — QA Lead & GenAI Automation Engineer',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.svg'],
  },
  openGraph: {
    title: 'Akash Simon — QA Lead & GenAI Automation Engineer',
    description:
      'Building quality systems that scale — from GenAI agent infrastructure to European regulatory compliance.',
    url: 'https://akashsimon.com',
    siteName: 'Akash Simon',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akash Simon — QA Lead & GenAI Automation Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Simon — QA Lead & GenAI Automation Engineer',
    description:
      '9+ years engineering quality at scale. Currently at Domino\'s Pizza Enterprises — 30+ EU storefronts.',
    images: ['/og-image.png'],
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
  manifest: '/site.webmanifest',
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
        <script dangerouslySetInnerHTML={{ __html: scrollResetScript }} />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
