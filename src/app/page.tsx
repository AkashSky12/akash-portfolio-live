import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import ToolMarquee from '@/components/sections/ToolMarquee'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import MotionEffects from '@/components/MotionEffects'

export default function Home() {
  return (
    <>
      <MotionEffects />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ToolMarquee />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
