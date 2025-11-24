import React from "react"

interface FooterProps {
  scrollToSection: (section: string) => void
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900">© 2025 Abdelsamie Elazazy.</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600 transition-colors">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition-colors">Contact</button>
        </div>
      </div>
    </footer>
  )
}