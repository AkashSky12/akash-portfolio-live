'use client'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <hr className="border-white/[0.08]" />
      <About />
      <hr className="border-white/[0.08]" />
      <Experience />
      <hr className="border-white/[0.08]" />
      <Skills />
      <hr className="border-white/[0.08]" />
      <Certifications />
      <hr className="border-white/[0.08]" />
      <Contact />
      <Footer />
    </main>
  )
}
