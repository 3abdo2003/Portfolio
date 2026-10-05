import React from "react"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { Award, Briefcase, Terminal, Brain } from "lucide-react"
import { SectionHeading } from "../SectionHeading"

const coursework = [
  "Data Structures & Algorithms",
  "Software Design",
  "Cloud Computing (AWS)",
  "Information Security",
  "Distributed Systems",
  "Software Testing",
  "Project Management (PMP)",
  "Operating Systems"
]

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          icon={Award}
          badge="About Me"
          title="Education & Background"
          subtitle="Combining academic excellence in Computer Science with professional leadership in project delivery at VOIS."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
           {/* Text Content */}
           <div className="space-y-4 sm:space-y-6 flex flex-col lg:h-full min-w-0">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-8 relative overflow-hidden group hover:border-red-100 transition-all flex-1 min-w-0 w-full shadow-sm"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-50 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 transition-transform group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-red-600 shrink-0">
                       <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="min-w-0">
                       <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">German International University</h3>
                       <p className="text-red-600 font-medium text-sm sm:text-base">B.Sc. Computer Science</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                      Graduated with a strong foundation in software engineering principles. My studies at GIU provided deep theoretical and practical understanding of distributed systems, software design, and project management—skills I now apply to deliver high-impact solutions at VOIS.
                    </p>
                    
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Relevant Coursework:</p>
                      <div className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                        <motion.div 
                          className="flex gap-2 sm:gap-3 w-max"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 35 
                          }}
                        >
                          {[...coursework, ...coursework].map((item, idx) => (
                             <Badge key={`${item}-${idx}`} variant="secondary" className="bg-slate-50 border border-slate-200 text-slate-700 py-1 px-2.5 whitespace-nowrap text-[10px] sm:text-sm font-medium">
                               {item}
                             </Badge>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <motion.div whileHover={{ y: -5 }} className="p-4 sm:p-6 rounded-3xl bg-red-50 border border-red-100 flex flex-col justify-center h-full">
                  <Terminal className="w-5 h-5 sm:w-8 sm:h-8 text-red-600 mb-2 sm:mb-3" />
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base leading-tight">Project Management</h4>
                  <p className="text-[10px] sm:text-sm text-slate-600 leading-snug">Customer delivery & project coordination.</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="p-4 sm:p-6 rounded-3xl bg-red-50 border border-red-100 flex flex-col justify-center h-full">
                  <Brain className="w-5 h-5 sm:w-8 sm:h-8 text-red-600 mb-2 sm:mb-3" />
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base leading-tight">Software Eng.</h4>
                  <p className="text-[10px] sm:text-sm text-slate-600 leading-snug">Technical architecture & systems design.</p>
                </motion.div>
              </div>
           </div>

           {/* University Logo Card */}
           <motion.a 
            href="https://giu-uni.de/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-lg group border border-slate-100 flex flex-col lg:block h-auto lg:h-full bg-white w-full"
           >
              <div className="relative h-72 sm:h-80 lg:absolute lg:inset-0 w-full p-4 bg-white flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GIULogo-dGgB0L2VYwTzPFjNY8COmcmM8roo2T.png"
                  alt="GIU Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="relative p-5 sm:p-6 lg:absolute lg:inset-0 lg:flex lg:items-end lg:p-8 border-t lg:border-0 border-slate-100 bg-white lg:bg-transparent">
                <div className="text-slate-900 bg-white/80 lg:backdrop-blur-sm p-4 rounded-2xl lg:border border-slate-200 lg:shadow-xl w-full lg:w-auto inline-block">
                  <p className="font-bold text-base sm:text-lg">German International University</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Cairo, Egypt</p>
                </div>
              </div>
           </motion.a>
        </div>
      </div>
    </section>
  )
}
