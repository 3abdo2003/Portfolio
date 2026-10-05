import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

// Extracted Sections
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/sections/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const { scrollY } = useScroll()
  const scrollYProgress = useTransform(scrollY, [0, 5000], [0, 1])
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Simulate data fetching or initial load time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <Hero scrollY={scrollY} scrollToSection={scrollToSection} />
      
      <About />
      
      <Experience isLoading={isLoading} scrollY={scrollY} />
      
      <Projects isLoading={isLoading} />
      
      <Skills />
      
      <Contact />
      
      <Footer scrollToSection={scrollToSection} />

    </div>
  )
}