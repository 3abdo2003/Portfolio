import React, { useEffect, useRef, useMemo, useCallback } from "react"
import { motion, useTransform, MotionValue } from "framer-motion"

// PERFORMANCE: Detect mobile once, outside component
const isMobileDevice = typeof window !== 'undefined' && (
  window.innerWidth < 768 || 
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
)

export const NeuralBackground = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Parallax transforms for background blobs
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, 300])
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 150])

  // PERFORMANCE: Use ref for mouse pos instead of state — avoids re-renders
  useEffect(() => {
    // Skip mouse tracking on mobile entirely
    if (isMobileDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
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
      // PERFORMANCE: Use devicePixelRatio of 1 on mobile to reduce canvas pixels
      const dpr = isMobileDevice ? 1 : Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    
    const createParticles = () => {
      particles = []
      // PERFORMANCE: Far fewer particles on mobile (1/3 density)
      const divisor = isMobileDevice ? 45000 : 15000
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / divisor),
        isMobileDevice ? 30 : 100
      )
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        })
      }
    }

    // PERFORMANCE: Throttle draw to ~30fps on mobile instead of 60fps
    let lastDrawTime = 0
    const targetInterval = isMobileDevice ? 33 : 16 // 30fps vs 60fps

    const draw = (timestamp: number) => {
      if (timestamp - lastDrawTime < targetInterval) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }
      lastDrawTime = timestamp

      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      
      // PERFORMANCE: Reduced connection distance on mobile
      const connectionDist = isMobileDevice ? 80 : 120
      const connectionDistSq = connectionDist * connectionDist

      ctx.fillStyle = "rgba(220, 38, 38, 0.5)" // Red-600
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Draw Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // PERFORMANCE: Use squared distance to avoid sqrt
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distSq = dx * dx + dy * dy

          if (distSq < connectionDistSq) {
            const distance = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.15 * (1 - distance / connectionDist)})`
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      createParticles()
    }

    window.addEventListener('resize', handleResize, { passive: true })
    
    resize()
    createParticles()
    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 opacity-[0.03] bg-white"></div>
      
      {/* Canvas Network */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Dynamic Orbs — simplified on mobile (no mouse tracking) */}
      <motion.div 
        style={{ y: yBlob1 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] pointer-events-none"
      >
        <div className="w-full h-full bg-red-500/10 rounded-full blur-[120px]" />
      </motion.div>
      
      <motion.div 
        style={{ y: yBlob2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] pointer-events-none"
      >
        <div className="w-full h-full bg-red-400/10 rounded-full blur-[120px]" />
      </motion.div>
    </div>
  )
}