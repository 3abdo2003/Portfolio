import React, { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "../SectionHeading"

import { Briefcase, ExternalLink, Globe, RefreshCw } from "lucide-react"

interface FreelanceProject {
  title: string
  description: string
  url: string
  tags: string[]
}

const freelanceProjects: FreelanceProject[] = [
  {
    title: "Manasah",
    description:
      "A website developed for a creative and media production agency using WordPress, PHP, HTML, and CSS. Focused heavily on custom HTML and CSS to refine the design, improve responsiveness, and optimize the website through WordPress configuration and customization.",
    url: "https://manasah.net/",
    tags: ["WordPress", "PHP", "HTML", "CSS", "Website Optimization"],
  },
  {
    title: "Novara Labs",
    description:
      "A custom peptides e-commerce store designed and developed from scratch using JavaScript, Next.js, and modern web technologies. Built the storefront and e-commerce workflows, configured the GoDaddy domain and CDN, and implemented the application architecture and integrations to deliver a complete online shopping experience.",
    url: "https://novaralabs.eu/",
    tags: ["JavaScript", "Next.js", "E-commerce", "CDN", "Domain Configuration"],
  },
]

const BrowserCard = ({ project, index }: { project: FreelanceProject; index: number }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
    >
      {/* Browser Chrome / Title Bar */}
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200 px-4 py-3">
        {/* Traffic light dots + Title row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400 group-hover:bg-red-500 transition-colors shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-amber-400 group-hover:bg-amber-500 transition-colors shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-green-400 group-hover:bg-green-500 transition-colors shadow-inner" />
            </div>
            <span className="text-xs font-semibold text-slate-700 ml-2 truncate max-w-[150px] sm:max-w-[200px]">
              {project.title}
            </span>
          </div>

        </div>

        {/* URL Bar */}
        <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-1.5 group-hover:border-red-300 transition-colors">
          <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-xs text-slate-500 truncate flex-1 font-mono">
            {displayUrl}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-red-600 transition-colors shrink-0"
            onClick={(e) => e.stopPropagation()}
            title="Open in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Live Website Preview */}
      <div className="relative w-full aspect-[16/10] bg-white overflow-hidden">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-6 h-6 text-red-400" />
            </motion.div>
            <span className="text-xs text-slate-400 mt-2">Loading preview…</span>
          </div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
            <Globe className="w-10 h-10 text-slate-300 mb-2" />
            <p className="text-sm text-slate-500 font-medium">Preview unavailable</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
            >
              Visit site directly <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ) : (
          <iframe
            src={project.url}
            title={`${project.title} preview`}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setHasError(true)
            }}
            style={{
              transform: "scale(0.5)",
              transformOrigin: "top left",
              width: "200%",
              height: "200%",
            }}
          />
        )}

        {/* Overlay gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Card Info */}
      <div className="p-5 sm:p-6 border-t border-slate-100">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 rounded-xl bg-slate-50 text-slate-700 font-semibold text-sm hover:bg-red-600 hover:text-white transition-all group-hover:shadow-lg"
        >
          Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

export const Freelance = () => {
  if (freelanceProjects.length === 0) {
    return null
  }

  return (
    <section id="freelance" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" role="presentation">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#e60000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          icon={Briefcase}
          badge="Freelance"
          title="Client Projects"
          subtitle="Websites and applications I've built for real clients, delivered with precision and care."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {freelanceProjects.map((project, idx) => (
            <BrowserCard key={project.url} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
