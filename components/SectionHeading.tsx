import React from "react"
import { motion } from "framer-motion"

export const SectionHeading = ({ icon: Icon, badge, title, subtitle }: { icon: any, badge: string, title: string, subtitle: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 sm:mb-16"
  >
    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 shadow-sm">
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
      <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase text-[10px] sm:text-xs">{badge}</span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2">{title}</h2>
    <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
      {subtitle}
    </p>
  </motion.div>
)