import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akash Simon | Software Engineer | QA Lead & GenAI Automation Engineer',
  description:
    'GenAI-powered Software Engineer, QA Lead with 8+ years of enterprise test automation, European regulatory compliance, and distributed team leadership. Built GenAI QA agent infrastructure at Domino\'s Pizza Enterprises covering 30+ EU country storefronts.',
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
    title: 'Akash Simon | QA Lead & GenAI Automation Engineer',
    description:
      'Building quality systems that scale — from GenAI agent infrastructure to European regulatory compliance.',
    url: 'https://akashsimon.com',
    siteName: 'Akash Simon Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Simon | Software Engineer | QA Lead & GenAI Automation Engineer',
    description:
      '8+ years engineering quality at scale. Currently at Domino\'s Pizza Enterprises — 30+ EU storefronts.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0f1e',
  alternates: {
    canonical: 'https://akashsimon.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
