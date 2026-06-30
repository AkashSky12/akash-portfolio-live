'use client'
import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

// Original brand-colored SVGs. Most come from the simple-icons CDN (auto brand color);
// a few use devicon's full-color originals where simple-icons lacks the icon or renders
// it pure-white (invisible on the light theme). All vector — crisp at any resolution (4K).
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const tools = [
  { name: 'Playwright', slug: 'playwright', color: '2EAD33', src: `${DEVICON}/playwright/playwright-original.svg` },
  { name: 'Selenium', slug: 'selenium', color: '43B02A' },
  { name: 'Cypress', slug: 'cypress', color: '69D3A7' },
  { name: 'Appium', slug: 'appium', color: 'EE376C' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'Java', slug: 'openjdk', color: 'FFFFFF', src: `${DEVICON}/java/java-original.svg` },
  { name: 'GitHub Actions', slug: 'githubactions', color: '2088FF' },
  { name: 'Jenkins', slug: 'jenkins', color: 'D24939' },
  { name: 'Postman', slug: 'postman', color: 'FF6C37' },
  { name: 'Jira', slug: 'jira', color: '0052CC' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'JMeter', slug: 'apachejmeter', color: 'D22128' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'Cucumber', slug: 'cucumber', color: '23D96C' },
  { name: 'Swagger', slug: 'swagger', color: '85EA2D' },
]

function Logo({ name, slug, color, src }: { name: string; slug: string; color: string; src?: string }) {
  return (
    <div className="group flex shrink-0 flex-col items-center gap-2.5 px-7">
      <Image
        src={src ?? `https://cdn.simpleicons.org/${slug}/${color}`}
        alt={name}
        width={40}
        height={40}
        unoptimized
        className="h-10 w-10 opacity-85 drop-shadow-[0_0_1px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
      />
      <span className="text-[11px] font-medium tracking-wide text-ink-subtle transition-colors group-hover:text-accent">
        {name}
      </span>
    </div>
  )
}

export default function ToolMarquee() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const v = visible ? 'is-visible' : ''
  const row = [...tools, ...tools]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <SectionFX variant="tunnel" />
      <div className="container">
        <p className={`reveal-item stagger-1 ${v} mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-subtle`}>
          Daily-driven tooling
        </p>
      </div>

      <div ref={ref} className={`reveal-item stagger-2 ${v} relative`}>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
        <div className="marquee flex w-max items-start gap-2">
          {row.map((t, i) => (
            <Logo key={`${t.slug}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
