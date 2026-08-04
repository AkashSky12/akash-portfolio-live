'use client'
import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'
import SectionFX from '@/components/SectionFX'

// Original brand-colored SVGs. Most come from the simple-icons CDN (auto brand color);
// a few use devicon's full-color originals where simple-icons lacks the icon or renders
// it pure-white (invisible on the light theme). All vector — crisp at any resolution (4K).
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const tools = [
  { name: 'Playwright', slug: 'playwright', color: '2EAD33', src: `${DEVICON}/playwright/playwright-original.svg`, url: 'https://playwright.dev/' },
  { name: 'Selenium', slug: 'selenium', color: '43B02A', url: 'https://www.selenium.dev/' },
  { name: 'Cypress', slug: 'cypress', color: '69D3A7', url: 'https://www.cypress.io/' },
  { name: 'Appium', slug: 'appium', color: 'EE376C', url: 'https://appium.io/' },
  { name: 'Python', slug: 'python', color: '3776AB', url: 'https://www.python.org/' },
  { name: 'Java', slug: 'openjdk', color: 'FFFFFF', src: `${DEVICON}/java/java-original.svg`, url: 'https://openjdk.org/' },
  { name: 'GitHub Actions', slug: 'githubactions', color: '2088FF', url: 'https://github.com/features/actions' },
  { name: 'Jenkins', slug: 'jenkins', color: 'D24939', url: 'https://www.jenkins.io/' },
  { name: 'Postman', slug: 'postman', color: 'FF6C37', url: 'https://www.postman.com/' },
  { name: 'Jira', slug: 'jira', color: '0052CC', url: 'https://www.atlassian.com/software/jira' },
  { name: 'Docker', slug: 'docker', color: '2496ED', url: 'https://www.docker.com/' },
  { name: 'JMeter', slug: 'apachejmeter', color: 'D22128', url: 'https://jmeter.apache.org/' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', url: 'https://www.postgresql.org/' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1', url: 'https://www.mysql.com/' },
  { name: 'Cucumber', slug: 'cucumber', color: '23D96C', url: 'https://cucumber.io/' },
  { name: 'Swagger', slug: 'swagger', color: '85EA2D', url: 'https://swagger.io/' },
]

function Logo({ name, slug, color, src, url }: { name: string; slug: string; color: string; src?: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex shrink-0 flex-col items-center gap-3 px-3 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      aria-label={`Visit ${name} official website`}
    >
      <Image
        src={src ?? `https://cdn.simpleicons.org/${slug}/${color}`}
        alt={name}
        width={72}
        height={72}
        unoptimized
        className="h-[72px] w-[72px] object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,165,31,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_24px_rgba(255,165,31,0.8)]"
      />
      <span className="text-[13px] font-semibold tracking-wide text-ink-subtle transition-colors group-hover:text-accent">
        {name}
      </span>
    </a>
  )
}

export default function ToolMarquee() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const v = visible ? 'is-visible' : ''
  const row = [...tools, ...tools]

  return (
    <section className="relative overflow-hidden py-[60px]">
      <SectionFX variant="starfield" />
      <div className="container">
        <p className={`reveal-item stagger-1 ${v} mb-7 text-center text-[26px] font-black uppercase tracking-[0.3em] text-accent`}>
          Daily-driven tooling
        </p>
      </div>

      <div ref={ref} className={`reveal-item stagger-2 ${v} relative py-3`}>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
        <div className="marquee flex w-max items-start gap-3">
          {row.map((t, i) => (
            <Logo key={`${t.slug}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
