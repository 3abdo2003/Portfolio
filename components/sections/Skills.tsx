import React from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, Cloud, Terminal, Layers } from "lucide-react"

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Light theme background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
            >
              Technical Arsenal
            </motion.h2>
           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
             My expertise spans the entire development lifecycle, from training neural networks to deploying containerized microservices.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Terminal,
              title: "Programming Languages",
              skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
            },
            {
              icon: Brain,
              title: "AI & ML",
              skills: ["Pipecat", "MONAI", "PyTorch", "TensorFlow", "OpenCV", "LLMs (Llama 3.2)", "RAG", "DICOM/NIfTI"],
            },
            {
              icon: Database,
              title: "Backend",
              skills: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Prisma", "REST & GraphQL"],
            },
            {
              icon: Code,
              title: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
            },
            {
              icon: Cloud,
              title: "DevOps",
              skills: ["MLOps", "AWS", "Docker", "Kubernetes", "Kafka", "CI/CD Actions"],
            },
            {
              icon: Layers,
              title: "Methodologies",
              skills: ["RESTful APIs", "Microservices", "Agile/Scrum", "TDD", "Design Patterns", "UML"],
            }
          ].map((cat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className={`px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default ${skill === "Pipecat" ? "bg-blue-50 text-blue-700 border-blue-200 font-medium" : ""}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}