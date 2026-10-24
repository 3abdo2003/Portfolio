import React, { useEffect, useState, lazy, Suspense, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

// PERFORMANCE: Eagerly load above-the-fold components
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"

// PERFORMANCE: Lazy-load below-the-fold sections — they're not needed until the user scrolls
const About = lazy(() => import("./components/sections/About").then(m => ({ default: m.About })))
const Experience = lazy(() => import("./components/sections/Experience").then(m => ({ default: m.Experience })))
const Projects = lazy(() => import("./components/sections/Projects").then(m => ({ default: m.Projects })))
const Freelance = lazy(() => import("./components/sections/Freelance").then(m => ({ default: m.Freelance })))
const Skills = lazy(() => import("./components/sections/Skills").then(m => ({ default: m.Skills })))
const Contact = lazy(() => import("./components/sections/Contact").then(m => ({ default: m.Contact })))
const Footer = lazy(() => import("./components/sections/Footer").then(m => ({ default: m.Footer })))

// PERFORMANCE: Lightweight inline skeleton for Suspense fallbacks
const SectionFallback = () => (
  <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <div className="inline-block w-24 h-7 bg-red-50 rounded-full skeleton-pulse mb-4"></div>
      <div className="w-64 h-10 bg-slate-100 rounded-xl mx-auto mb-4 skeleton-pulse"></div>
      <div className="w-96 max-w-full h-6 bg-slate-100 rounded-lg mx-auto skeleton-pulse"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white rounded-3xl border border-slate-100 p-6 space-y-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl skeleton-pulse"></div>
          <div className="w-3/4 h-6 bg-slate-100 rounded-lg skeleton-pulse"></div>
          <div className="w-full h-4 bg-slate-50 rounded skeleton-pulse"></div>
          <div className="w-5/6 h-4 bg-slate-50 rounded skeleton-pulse"></div>
        </div>
      ))}
    </div>
  </div>
)

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  const { scrollY } = useScroll()
  const scrollYProgress = useTransform(scrollY, [0, 5000], [0, 1])
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Reliable active-section tracking
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "experience",
      "projects",
      "freelance",
      "skills",
      "contact",
    ]

    let ticking = false

    const updateActiveSection = () => {
      const activationPoint = 150
      const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10

      if (pageBottom) {
        setActiveSection("contact")
        ticking = false
        return
      }

      let currentSection = sections[0]

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)

        if (!element) continue

        const top = element.getBoundingClientRect().top

        if (top <= activationPoint) {
          currentSection = sectionId
        } else {
          break
        }
      }

      setActiveSection(currentSection)
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(updateActiveSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    // Set the correct section on initial load and refresh
    updateActiveSection()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
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
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <Hero scrollY={scrollY} scrollToSection={scrollToSection} />

      {/* PERFORMANCE: Lazy-loaded sections with skeleton fallbacks */}
      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <About />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <Experience scrollY={scrollY} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <Projects />
        </div>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <Freelance />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <Skills />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <div className="lazy-section">
          <Contact />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="py-12" />}>
        <Footer scrollToSection={scrollToSection} />
      </Suspense>

    </div>
  )
}