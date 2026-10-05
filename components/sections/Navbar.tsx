import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

export const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [navScrollY, setNavScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
  ]

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`
            w-full max-w-4xl rounded-full transition-all duration-300
            ${navScrollY > 20 
              ? "bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl shadow-red-500/10 py-3 px-6" 
              : "bg-white/40 backdrop-blur-md border border-white/30 shadow-lg py-3 px-6"
            }
          `}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick("hero")}
            >
              <span className="font-bold text-slate-800 text-lg tracking-tight group-hover:text-red-600 transition-colors">
                Abdelsamie Elazazy
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-red-700"
                      : "text-slate-600 hover:text-red-600"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white shadow-sm rounded-full border border-slate-100"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 pr-4 border-r border-slate-200/50">
                 <motion.a 
                   whileHover={{ y: -2 }}
                   href="https://github.com/3abdo2003" 
                   target="_blank" 
                   className="text-slate-500 hover:text-slate-900 transition-colors"
                 >
                   <Github className="w-5 h-5" />
                 </motion.a>
                 <motion.a 
                   whileHover={{ y: -2 }}
                   href="http://www.linkedin.com/in/abdelsamie-elazazy-439917210" 
                   target="_blank" 
                   className="text-slate-500 hover:text-red-600 transition-colors"
                 >
                   <Linkedin className="w-5 h-5" />
                 </motion.a>
              </div>

              <Button
                onClick={() => handleNavClick("contact")}
                className="hidden md:inline-flex rounded-full bg-slate-900 hover:bg-red-600 text-white px-6 shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </Button>

              {/* Mobile Toggle */}
              <button
                className="md:hidden p-2 text-slate-700 hover:bg-slate-100/50 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-white/50 ring-1 ring-slate-900/5">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all font-medium text-lg ${
                      activeSection === item.id
                        ? "bg-red-50 text-red-600 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    )}
                  </button>
                ))}
                
                <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    className="w-full justify-center rounded-xl py-6 border-slate-200"
                    onClick={() => window.open("https://github.com/3abdo2003", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" /> GitHub
                  </Button>
                   <Button 
                    className="w-full justify-center bg-red-600 hover:bg-red-700 rounded-xl py-6 shadow-red-100 shadow-lg"
                    onClick={() => handleNavClick("contact")}
                  >
                    <Mail className="w-5 h-5 mr-2" /> Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
