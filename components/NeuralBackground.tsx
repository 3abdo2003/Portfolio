import React, { useEffect, useRef, useState } from "react"
import { motion, useTransform, MotionValue } from "framer-motion"

export const NeuralBackground = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Parallax transforms for background blobs
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, 300])
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: {x: number, y: number, vx: number, vy: number}[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw Particles and Connections
      ctx.fillStyle = "rgba(37, 99, 235, 0.5)" // Blue
      ctx.lineWidth = 0.5

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Connect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 120)})`
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })
      
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })
    
    resize()
    createParticles()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 opacity-[0.03] bg-white"></div>
      
      {/* Canvas Network */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Dynamic Orbs for Ambient Color with Parallax */}
      <motion.div 
        style={{ y: yBlob1 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] pointer-events-none"
      >
        <motion.div 
           animate={{ 
            x: mousePos.x * 0.02, 
            y: mousePos.y * 0.02,
           }}
           transition={{ type: "spring", damping: 100, stiffness: 50 }}
           className="w-full h-full bg-blue-500/10 rounded-full blur-[120px]"
        />
      </motion.div>
      
      <motion.div 
        style={{ y: yBlob2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] pointer-events-none"
      >
         <motion.div 
          animate={{ 
            x: mousePos.x * -0.02, 
            y: mousePos.y * -0.02,
          }}
          transition={{ type: "spring", damping: 100, stiffness: 50 }}
          className="w-full h-full bg-blue-400/10 rounded-full blur-[120px]"
        />
      </motion.div>
    </div>
  )
}