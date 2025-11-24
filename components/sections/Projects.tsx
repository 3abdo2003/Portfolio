import React from "react"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { Zap, Brain, Database, Network, Github, MoreHorizontal } from "lucide-react"
import { SectionHeading } from "../SectionHeading"
import { ProjectSkeleton } from "../Skeletons"
import { BookStoreIcon } from "../BookStoreIcon"

interface ProjectsProps {
  isLoading: boolean
}

export const Projects = ({ isLoading }: ProjectsProps) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          icon={Zap}
          badge="Portfolio"
          title="Featured Projects"
          subtitle="A curated selection of my best work, ranging from AI-powered architectural tools to enterprise-grade microservices."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
             <>
               <ProjectSkeleton />
               <ProjectSkeleton />
               <ProjectSkeleton />
             </>
          ) : (
          <>
          {[
            {
              title: "AI Architect Tool",
              desc: "Computer vision & GenAI tool for analyzing architectural floorplans.",
              tags: ["Python", "OpenCV", "Stable Diffusion", "Llama 3.2"],
              category: "AI Engineering",
              color: "blue",
              icon: Brain,
              link: "https://github.com/3abdo2003/Architecture_Ai"
            },
            {
              title: "StockSight",
              desc: "Real-time inventory management with visual analytics and alerts.",
              tags: ["React", "Node.js", "MongoDB", "Chart.js"],
              category: "Full Stack",
              color: "blue",
              icon: Database,
              link: "https://github.com/3abdo2003/StockSight"
            },
            {
              title: "Microservices E-com",
              desc: "Event-driven e-commerce platform using Kafka and NestJS.",
              tags: ["NestJS", "Kafka", "Docker", "Microservices"],
              category: "Backend Architecture",
              color: "blue",
              icon: Network,
              link: "https://github.com/3abdo2003/FinalRep"
            },
            {
              title: "Secure Bookstore",
              desc: "Online bookstore with Stripe payments and rigorous testing suite.",
              tags: ["MERN Stack", "Stripe", "Jest", "Cypress"],
              category: "Web Application",
              color: "blue",
              icon: BookStoreIcon,
              link: "https://github.com/3abdo2003/BookWebsite-Testing"
            }
          ].map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header with Icon */}
              <div className={`h-24 sm:h-32 bg-gradient-to-br from-blue-500 to-blue-600 p-5 sm:p-6 flex justify-between items-start`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md text-xs">
                  {project.category}
                </Badge>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 rounded-xl bg-slate-50 text-slate-700 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all group-hover:shadow-lg"
                >
                  View Code <Github className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* More Projects Card */}
           <motion.div 
              whileHover={{ scale: 1.03 }}
              className="group relative flex flex-col justify-center items-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer min-h-[250px]"
              onClick={() => window.open("https://github.com/3abdo2003", "_blank")}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <MoreHorizontal className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">View More on GitHub</h3>
              <p className="text-slate-500 text-sm">Explore my repositories for more experiments and tools.</p>
           </motion.div>
           </>
          )}

        </div>
      </div>
    </section>
  )
}