import React from "react"
import { motion, useTransform, MotionValue } from "framer-motion"
import { Badge } from "../ui/badge"
import { Briefcase, Code, Shield, Brain } from "lucide-react"
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
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#e60000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading 
          icon={Briefcase}
          badge="Experience"
          title="Professional Journey"
          subtitle="Building a career at the intersection of leadership and technology, currently delivering excellence at VOIS."
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
           {/* Job 1 - VOIS */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-red-600 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-16 h-10 sm:w-24 sm:h-14 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 mt-1 sm:mt-0 overflow-hidden p-1.5">
                  <img 
                    src="/vois-logo.jpg" 
                    alt="VOIS Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">Customer Delivery Project Coordinator</h3>
                      <p className="text-red-600 font-medium text-sm sm:text-base">VOIS (Discover Program)</p>
                    </div>
                    <Badge className="bg-red-50 text-red-700 hover:bg-red-100 w-fit border border-red-200 text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Nov 2025 – Present</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Coordinating cross-functional delivery teams to ensure high-quality solution implementation for global customers.",
                       "Managing project lifecycles using Agile methodologies, bridging the gap between technical requirements and business goals.",
                       "Optimizing internal workflows and delivery pipelines to reduce time-to-market for digital services.",
                       "Collaborating with stakeholders to define technical roadmaps and ensure alignment with VOIS strategic initiatives."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
                         <span className="leading-snug">{item}</span>
                       </li>
                     ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                      {["Project Management", "Agile", "Customer Delivery", "Stakeholder Management", "Strategic Operations"].map(tech => (
                          <Badge key={tech} variant="outline" className="text-[10px] sm:text-xs bg-slate-50">{tech}</Badge>
                      ))}
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Job 2 - Millensys */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-slate-300 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">AI Engineer Intern</h3>
                      <p className="text-slate-500 font-medium text-sm sm:text-base">Millensys, Cairo, Egypt (Remote – U.S. Time Zone)</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Nov 2025 – April 2026</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Develop and optimize deep learning models for medical image analysis using PyTorch and MONAI.",
                       "Preprocess and manage medical imaging datasets (DICOM, NIfTI) to support robust model training.",
                       "Contribute to end-to-end AI lifecycle including experimentation, validation, deployment, and MLOps practices.",
                       "Collaborate with cross-functional teams to integrate AI models into production-grade healthcare solutions."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
                         <span className="leading-snug">{item}</span>
                       </li>
                     ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                      {["PyTorch", "MONAI", "Deep Learning", "Medical Imaging", "MLOps", "DICOM", "NIfTI"].map(tech => (
                          <Badge key={tech} variant="outline" className="text-[10px] sm:text-xs bg-slate-50">{tech}</Badge>
                      ))}
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Job 3 - Double Shot */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-slate-300 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">Software Developer</h3>
                      <p className="text-slate-500 font-medium text-sm sm:text-base">Double Shot Digital Marketing</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Aug 2025 – Nov 2025</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Shipped custom full-stack websites utilizing Next.js, Shopify, and WordPress ecosystems.",
                       "Translated marketing briefs into high-performance technical specifications.",
                       "Optimized web vitals for SEO, speed, and fluid motion using Framer Motion.",
                       "Managed complex DNS transitions, hosting infrastructure, and CI/CD automation."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
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
             className="group relative bg-white rounded-3xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300"
           >
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-slate-400 rounded-l-3xl"></div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">IT Risk Intern</h3>
                      <p className="text-slate-500 font-medium text-sm sm:text-base">Banque du Caire</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-[10px] sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-0.5">Feb 2025 - July 2025</Badge>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                     {[
                       "Conducted thorough IT risk assessments for critical banking systems and payroll software.",
                       "Performed security testing to identify vulnerabilities in internal financial applications.",
                       "Drafted comprehensive IT risk policies to ensure readiness for external audits.",
                       "Strengthened access control mechanisms across distributed company devices."
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-slate-600 text-sm sm:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2.5 sm:mr-3 shrink-0"></span>
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
