import React from "react"
import { motion, useTransform, MotionValue } from "framer-motion"
import { Badge } from "../ui/badge"
import { Briefcase, Microscope, Code, Shield } from "lucide-react"
import { SectionHeading } from "../SectionHeading"
import { ExperienceSkeleton } from "../Skeletons"

interface ExperienceProps {
  isLoading: boolean
  scrollY: MotionValue<number>
}

export const Experience = ({ isLoading, scrollY }: ExperienceProps) => {
  const yExperienceGrid = useTransform(scrollY, [0, 2000], [0, 200])

  return (
    <section id="experience" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Grid with Parallax */}
      <motion.div 
        style={{ y: yExperienceGrid }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        role="presentation"
      >
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading 
          icon={Briefcase}
          badge="Experience"
          title="Professional Journey"
          subtitle="Delivering value through code in fast-paced environments, from digital marketing tech to healthcare AI infrastructure."
        />

        <div className="space-y-6 max-w-4xl mx-auto">
           {isLoading ? (
             <>
               <ExperienceSkeleton />
               <ExperienceSkeleton />
               <ExperienceSkeleton />
             </>
           ) : (
           <>
           {/* Job 1 - Millensys */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-blue-600 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">Junior AI Engineer</h3>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">MILLENSYS Healthcare Solutions</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 w-fit border border-blue-200 text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Nov 2025 – Present</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Developing deep learning models for medical image analysis (MONAI, PyTorch, TensorFlow).",
                       "Implementing full AI SDLC: problem definition, data sourcing, training, deployment, and MLOps.",
                       "Preparing and preprocessing medical datasets (DICOM, NIfTI) for large-scale training.",
                       "Ensuring HIPAA compliance and optimizing model inference for clinical production environments."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
                         <span className="leading-snug">{item}</span>
                       </li>
                     ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                      {["MONAI", "PyTorch", "DICOM", "MLOps", "HIPAA"].map(tech => (
                          <React.Fragment key={tech}>
                            <Badge variant="outline" className="text-[10px] sm:text-xs bg-slate-50">{tech}</Badge>
                          </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Job 2 - Double Shot */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-blue-500 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">Software Developer</h3>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">Double Shot Digital Marketing</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 w-fit border border-blue-200 text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Aug 2025 – Nov 2025</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Ship custom full-stack websites (Next.js, Shopify, WordPress).",
                       "Translate marketing briefs into high-performance technical specs.",
                       "Optimize web vitals for SEO, speed, and motion (Framer Motion).",
                       "Manage DNS, hosting infrastructure, and CI/CD pipelines."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
                         <span className="leading-snug">{item}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </div>
           </motion.div>

           {/* Job 3 - Bank */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-blue-700 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">IT Risk Intern</h3>
                      <p className="text-blue-800 font-medium text-sm sm:text-base">Banque du Caire</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 w-fit border border-blue-200 text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Feb 2025 - July 2025</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Conducted IT risk assessments for critical banking systems.",
                       "Performed security testing on internal payroll software.",
                       "Drafted comprehensive IT risk policies for audit readiness.",
                       "Strengthened access control mechanisms across company devices."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
                         <span className="leading-snug">{item}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </div>
           </motion.div>
           </>
           )}
        </div>
      </div>
    </section>
  )
}