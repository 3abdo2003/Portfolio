import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              I'm currently pushing the boundaries of Medical AI. Whether you need deep learning expertise or robust software architecture, let's connect.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button 
                size="lg" 
                onClick={() => window.open("mailto:abdulsamea2003@gmail.com")}
                className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 rounded-full text-lg font-bold shadow-lg w-full sm:w-auto"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send me an Email
              </Button>
              <div className="flex gap-4">
                 <Button 
                   size="icon" 
                   className="bg-white/10 hover:bg-white/20 text-white rounded-full h-14 w-14 border border-white/20"
                   onClick={() => window.open("http://www.linkedin.com/in/abdelsamie-elazazy-439917210")}
                 >
                   <Linkedin className="w-6 h-6" />
                 </Button>
                 <Button 
                   size="icon" 
                   className="bg-white/10 hover:bg-white/20 text-white rounded-full h-14 w-14 border border-white/20"
                   onClick={() => window.open("https://github.com/3abdo2003")}
                 >
                   <Github className="w-6 h-6" />
                 </Button>
                 <Button 
                   size="icon" 
                   className="bg-white/10 hover:bg-white/20 text-white rounded-full h-14 w-14 border border-white/20"
                   onClick={() => window.open("tel:+201016032475")}
                 >
                   <Phone className="w-6 h-6" />
                 </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}