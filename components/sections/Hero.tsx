import React from "react"
import { motion, useTransform, MotionValue } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowRight, Download, Briefcase, Code } from "lucide-react"
import { NeuralBackground } from "../NeuralBackground"
import { TypewriterText } from "../TypewriterText"

interface HeroProps {
  scrollY: MotionValue<number>
  scrollToSection: (section: string) => void
}

export const Hero = ({ scrollY, scrollToSection }: HeroProps) => {
  // Parallax Values
  const yHeroText = useTransform(scrollY, [0, 500], [0, 100])
  const yHeroImage = useTransform(scrollY, [0, 500], [0, -80])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-12 sm:pt-32 overflow-hidden bg-white">
      <NeuralBackground scrollY={scrollY} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            style={{ y: yHeroText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Hello, I'm <br/>
                <span className="text-red-600">Abdelsamie.</span>
              </h1>

              <div className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-600">
                <span>I am a </span>
                <TypewriterText texts={["Project Coordinator", "Software Engineer", "AI Engineer"]} />
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                Computer Science graduate from GIU, now driving excellence as a Customer Delivery Project Coordinator at VOIS. I bridge the gap between complex software engineering principles and streamlined project delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full h-12 px-8 shadow-red-100 shadow-xl transition-transform hover:scale-105 w-full sm:w-auto"
              >
                View My Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://drive.google.com/file/d/1nvJJgVrdZ8mTWRW-fdIGj-Byjs4kmaZI/view?usp=sharing", "_blank")}
                className="border-2 border-slate-200 text-slate-700 hover:border-red-600 hover:text-red-600 rounded-full h-12 px-8 bg-transparent transition-all w-full sm:w-auto"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>


          </motion.div>

          {/* Right Image */}
          <motion.div 
            style={{ y: yHeroImage }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-400 rounded-[2rem] opacity-20 blur-2xl"
              />
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Abdelsamie-lAGWyA6LallY1H1taIALUorrfW9ijf.jpeg" 
                  alt="Abdelsamie Elazazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 sm:-right-6 top-6 sm:top-10 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 z-10"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Project Coord.</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-2 sm:-left-6 bottom-16 sm:bottom-20 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 z-10"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Software Eng.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
