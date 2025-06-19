"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Database,
  Cloud,
  Shield,
  Phone,
  ExternalLink,
  Download,
  Star,
  Award,
  Briefcase,
  MoreHorizontal,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100
      setScrollY(window.scrollY)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const downloadCV = () => {
    window.open("https://drive.google.com/file/d/106kEcCESWVELODi8-HCde68iZCwqK_n6/view?usp=drive_link", "_blank")
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation with Subtle Color */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Blue Accent */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-black">Abdelsamie Elazazy</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 ${
                    activeSection === item.id ? "text-blue-600" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Meaningful Colors */}
      <section id="hero" className="pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-blue-700">Available for opportunities</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                  Hi, I'm
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Abdelsamie Elazazy
                  </span>
                </h1>

                <div className="space-y-2 lg:space-y-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">Software Engineer</h2>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600">& IT Risk Specialist</h3>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Computer Science student at German International University Cairo, specializing in Software Engineering.
                Currently gaining valuable experience as an IT Risk Intern at Banque du Caire, with expertise in
                <span className="font-semibold text-blue-600"> AI solutions</span>,
                <span className="font-semibold text-blue-700"> full-stack development</span>, and
                <span className="font-semibold text-blue-800"> security practices</span>.
              </p>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => scrollToSection("projects")}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={downloadCV}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Resume
                </Button>
              </div>

              {/* Enhanced Contact Info Cards with Hover States */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 lg:pt-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Cairo, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 cursor-pointer group">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                      Phone
                    </p>
                    <a
                      href="tel:+201016032475"
                      className="font-medium text-gray-900 hover:text-green-600 transition-colors duration-300 text-sm sm:text-base group-hover:underline"
                    >
                      +20 101 603 2475
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 cursor-pointer group sm:col-span-3 lg:col-span-1">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                      Email
                    </p>
                    <a
                      href="mailto:abdulsamea2003@gmail.com"
                      className="font-medium text-gray-900 text-sm break-all hover:text-purple-600 transition-colors duration-300 group-hover:underline"
                    >
                      abdulsamea2003@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Picture with Color Accents */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Abdelsamie-lAGWyA6LallY1H1taIALUorrfW9ijf.jpeg"
                  alt="Abdelsamie Elazazy - Software Engineer and IT Risk Specialist"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-white" />
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Blue Theme */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Education & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Academic Excellence</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Building a comprehensive foundation in computer science and software engineering through rigorous
              coursework and hands-on experience with cutting-edge technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-lg bg-white transform hover:scale-105">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg mx-auto sm:mx-0 flex-shrink-0">
                    <Database className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <CardTitle className="text-xl sm:text-2xl mb-2">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                      Major in Software Engineering
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-600">
                      <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-sm sm:text-base">German International University Cairo</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-sm sm:text-base">2021 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg flex items-center justify-center sm:justify-start">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      "Data Structures & Algorithms",
                      "Software Design",
                      "Cloud Computing (AWS)",
                      "Information Security",
                      "Distributed Systems",
                      "Software Testing",
                      "Project Management (PMP)",
                      "Operating Systems",
                    ].map((course) => (
                      <div
                        key={course}
                        className="flex items-center text-xs sm:text-sm text-gray-700 bg-white rounded-lg p-2 border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mr-3 flex-shrink-0"></div>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* University Logo with Enhanced Hover */}
            <div className="relative flex items-center justify-center">
              <div className="group relative">
                <a
                  href="https://giu-uni.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full max-w-sm sm:max-w-md h-60 sm:h-80 bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 sm:p-8 flex items-center justify-center transform hover:scale-105 transition-all duration-500 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl block"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GIULogo-dGgB0L2VYwTzPFjNY8COmcmM8roo2T.png"
                    alt="German International University Cairo Logo"
                    width={400}
                    height={200}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                {/* Enhanced Tooltip */}
                <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-xl shadow-lg whitespace-nowrap relative">
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium text-xs sm:text-sm">Visit University Website</span>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Green Theme */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Professional Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Industry Expertise</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gaining invaluable real-world experience in IT risk management, security assessments, and regulatory
              compliance within the dynamic banking sector
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-lg bg-white transform hover:scale-105">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg mx-auto sm:mx-0 flex-shrink-0">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <CardTitle className="text-xl sm:text-2xl mb-2">IT Risk Intern</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
                      Banque du Caire, Cairo, Egypt
                    </CardDescription>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium border border-blue-200"
                    >
                      Feb 2025 - July 2025
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg flex items-center justify-center sm:justify-start">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      {
                        title: "IT Risk Assessments",
                        desc: "Conducted comprehensive assessments for banking systems, ensuring full compliance with security and CBE regulations",
                      },
                      {
                        title: "Security Testing",
                        desc: "Performed thorough security testing on software and payroll systems, identifying critical vulnerabilities",
                      },
                      {
                        title: "Security Enhancement",
                        desc: "Evaluated and strengthened security measures for company devices and access control mechanisms",
                      },
                      {
                        title: "Policy Documentation",
                        desc: "Created detailed IT risk policies, supporting enterprise risk management and audit readiness",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="bg-white rounded-lg p-3 sm:p-4 border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mt-1 mr-3 sm:mr-4 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-black mb-1 text-sm sm:text-base">{item.title}</h5>
                            <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section with Purple Theme */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Innovation Showcase</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Demonstrating expertise across AI/ML, full-stack development, and scalable system architecture through
              innovative, real-world solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Colorful Project Cards */}
            {[
              {
                title: "AI Tool for Architectural Education",
                desc: "Advanced AI-driven analysis and improvement of architectural floorplans using computer vision, OCR technology, and generative models for enhanced design visualization",
                fullDesc:
                  "Developed an innovative AI tool that analyzes architectural floorplans using OCR and computer vision, providing real-time conversational feedback and generating enhanced visualizations with Stable Diffusion and Llama 3.2.",
                tech: ["Python", "OpenCV", "PaddleOCR", "FAISS", "Stable Diffusion", "Llama 3.2"],
                badge: "AI/ML",
                badgeColor: "bg-blue-600",
                borderColor: "border-blue-100 hover:border-blue-300",
                bgColor: "bg-blue-50",
                iconColor: "from-blue-600 to-blue-700",
                buttonColor: "hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700",
                url: "https://github.com/3abdo2003/Architecture_Ai",
                category: "AI & Machine Learning",
                subtitle: "Architectural Analysis",
              },
              {
                title: "Scalable E-commerce Platform",
                desc: "Enterprise-grade e-commerce solution built with microservices architecture, featuring real-time event-driven communication and comprehensive payment processing",
                fullDesc:
                  "Built a comprehensive e-commerce platform using microservices architecture with Kafka for event-driven communication, featuring robust inventory management and secure authentication workflows.",
                tech: ["NestJS", "Next.js", "Kafka", "Microservices"],
                badge: "Full-Stack",
                badgeColor: "bg-blue-700",
                borderColor: "border-blue-200 hover:border-blue-400",
                bgColor: "bg-blue-100",
                iconColor: "from-blue-700 to-blue-800",
                buttonColor: "hover:border-blue-600 hover:bg-blue-100 hover:text-blue-800",
                url: "https://github.com/3abdo2003/FinalRep",
                category: "E-commerce Platform",
                subtitle: "Microservices Architecture",
              },
              {
                title: "Book Store Website",
                desc: "Full-featured online bookstore with integrated payment processing, role-based access control, and comprehensive testing suite for reliability",
                fullDesc:
                  "Complete bookstore solution featuring RESTful APIs, JWT-based authentication, Stripe payment integration, automated email notifications, and comprehensive testing with Jest and Cypress.",
                tech: ["Node.js", "React", "MongoDB", "Stripe", "Jest", "Cypress"],
                badge: "Web App",
                badgeColor: "bg-blue-500",
                borderColor: "border-blue-100 hover:border-blue-300",
                bgColor: "bg-blue-50",
                iconColor: "from-blue-500 to-blue-600",
                buttonColor: "hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600",
                url: "https://github.com/3abdo2003/BookWebsite-Testing",
                category: "Book Store",
                subtitle: "Full-Stack Web App",
              },
              {
                title: "Metro System Website",
                desc: "Dynamic transit management system with intelligent route planning, ticketing functionality, and secure user authentication for seamless user experience",
                fullDesc:
                  "Comprehensive metro system platform enabling ticket purchases, dynamic route management, and interactive journey planning with PostgreSQL database integration and secure session management.",
                tech: ["Node.js", "Express.js", "PostgreSQL", "JavaScript"],
                badge: "Transportation",
                badgeColor: "bg-blue-800",
                borderColor: "border-blue-200 hover:border-blue-400",
                bgColor: "bg-blue-100",
                iconColor: "from-blue-800 to-blue-900",
                buttonColor: "hover:border-blue-700 hover:bg-blue-100 hover:text-blue-800",
                url: null,
                category: "Metro System",
                subtitle: "Transportation Platform",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-500 border-2 ${project.borderColor} overflow-hidden bg-white transform hover:scale-105`}
              >
                <div
                  className={`relative h-48 sm:h-56 lg:h-64 overflow-hidden ${project.bgColor} flex items-center justify-center border-b border-gray-200`}
                >
                  <div className="text-center z-10">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${project.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}
                    >
                      <Database className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-black">{project.category}</h4>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">{project.subtitle}</p>
                  </div>
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <Badge
                      className={`${project.badgeColor} text-white px-3 py-2 sm:px-4 font-medium shadow-lg text-xs sm:text-sm`}
                    >
                      {project.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {project.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.fullDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.url ? (
                      <Button
                        variant="outline"
                        className={`w-full border-2 border-gray-300 ${project.buttonColor} transition-all duration-300`}
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                      </Button>
                    ) : (
                      <div className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gray-100 border-2 border-gray-200 rounded-xl text-center">
                        <span className="text-gray-700 font-semibold flex items-center justify-center text-sm sm:text-base">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Private Repository
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced "And Many More" Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 sm:px-6 bg-gray-50 text-gray-500">Featured Projects</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white rounded-2xl lg:rounded-3xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <MoreHorizontal className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  And Many More...
                </span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
                These featured projects represent just a glimpse of my diverse portfolio. I've worked on numerous other
                exciting projects spanning <span className="font-semibold text-blue-600">web development</span>,
                <span className="font-semibold text-blue-600"> mobile applications</span>,
                <span className="font-semibold text-blue-600"> data analysis</span>, and
                <span className="font-semibold text-blue-600"> automation tools</span> - each contributing to my
                comprehensive understanding of modern software development.
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  { name: "Web Development", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "Mobile Apps", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "Data Analysis", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "Automation Tools", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "API Development", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "Database Design", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "UI/UX Projects", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                  { name: "Security Tools", color: "text-blue-600 border-blue-300 hover:bg-blue-50" },
                ].map((category, index) => (
                  <Badge
                    key={category.name}
                    variant="outline"
                    className={`${category.color} transition-colors px-3 py-2 sm:px-4 text-xs sm:text-sm`}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Colorful Icons */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive expertise across modern technologies, frameworks, and development methodologies with a focus
              on scalable, secure, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Programming Languages",
                color: "from-blue-600 to-blue-700",
                borderColor: "border-blue-100 hover:border-blue-300",
                bgColor: "hover:bg-blue-50",
                skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
              },
              {
                icon: Database,
                title: "Frameworks & Libraries",
                color: "from-blue-500 to-blue-600",
                borderColor: "border-blue-100 hover:border-blue-300",
                bgColor: "hover:bg-blue-50",
                skills: ["React", "Node.js", "Next.js", "NestJS", "Angular", "Laravel", "Kafka", "Mongoose"],
              },
              {
                icon: Cloud,
                title: "Tools & Platforms",
                color: "from-blue-700 to-blue-800",
                borderColor: "border-blue-200 hover:border-blue-400",
                bgColor: "hover:bg-blue-100",
                skills: ["AWS", "GitHub", "VS Code", "Figma", "Jest", "Cypress", "PostgreSQL", "MongoDB"],
              },
              {
                icon: Shield,
                title: "Methodologies",
                color: "from-blue-800 to-blue-900",
                borderColor: "border-blue-200 hover:border-blue-400",
                bgColor: "hover:bg-blue-100",
                skills: ["RESTful APIs", "Microservices", "Agile/Scrum", "TDD", "Design Patterns", "UML"],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-500 border-2 ${category.borderColor} ${category.bgColor} bg-white transform hover:scale-105`}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Interactivity */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Let's Connect</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Let's
              create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open("mailto:abdulsamea2003@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open("http://www.linkedin.com/in/abdelsamie-elazazy-439917210", "_blank")}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open("https://github.com/3abdo2003", "_blank")}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nasr City, Cairo, Egypt",
                    color: "blue",
                    clickable: false,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+20 101 603 2475",
                    href: "tel:+201016032475",
                    color: "blue",
                    clickable: true,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "abdulsamea2003@gmail.com",
                    href: "mailto:abdulsamea2003@gmail.com",
                    color: "blue",
                    clickable: true,
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl lg:rounded-2xl border-2 border-gray-200 shadow-sm transition-all duration-300 group ${
                      contact.clickable
                        ? `hover:border-${contact.color}-300 hover:bg-${contact.color}-50 hover:shadow-md cursor-pointer transform hover:scale-105`
                        : "hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-${contact.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        contact.clickable ? `group-hover:bg-${contact.color}-200 transition-colors duration-300` : ""
                      }`}
                    >
                      <contact.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-${contact.color}-600 ${
                          contact.clickable ? `group-hover:scale-110 transition-transform duration-300` : ""
                        }`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                          contact.clickable ? `text-gray-500 group-hover:text-${contact.color}-600` : "text-gray-500"
                        }`}
                      >
                        {contact.label}
                        {contact.clickable && (
                          <span
                            className={`ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-${contact.color}-600`}
                          >
                            (Click to {contact.label === "Phone" ? "call" : "email"})
                          </span>
                        )}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className={`font-semibold text-black text-base sm:text-lg transition-colors duration-300 block break-all group-hover:text-${contact.color}-600 ${
                            contact.clickable ? "group-hover:underline" : ""
                          }`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-black text-base sm:text-lg break-all">{contact.value}</p>
                      )}
                    </div>
                    {contact.clickable && (
                      <ExternalLink
                        className={`w-4 h-4 text-${contact.color}-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20illustration-f3RyCbkxP14Xop1A0ko64v2byzeFnD.png"
                  alt="Contact and communication with person and email symbol"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Color Accents */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Abdelsamie Elazazy</h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
                Software Engineer & IT Risk Specialist passionate about building innovative solutions, ensuring robust
                security practices, and creating meaningful impact through technology.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-white">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform mx-auto sm:mx-0 text-sm sm:text-base"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-white">Connect</h4>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {[
                  { icon: Github, url: "https://github.com/3abdo2003", color: "hover:bg-gray-700" },
                  {
                    icon: Linkedin,
                    url: "http://www.linkedin.com/in/abdelsamie-elazazy-439917210",
                    color: "hover:bg-blue-600",
                  },
                  { icon: Mail, url: "mailto:abdulsamea2003@gmail.com", color: "hover:bg-blue-700" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`${social.color} transition-all duration-300 transform hover:scale-110 w-10 h-10 sm:w-auto sm:h-auto text-gray-400 hover:text-white`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Abdelsamie Elazazy. Crafted with passion using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
