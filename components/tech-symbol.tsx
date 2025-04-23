"use client"

import { useEffect, useRef } from "react"

export function TechSymbol() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Center coordinates
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Colors
    const primaryColor = "#3b82f6" // Blue
    const accentColor = "#0ea5e9" // Sky blue
    const dotColor = "#60a5fa" // Lighter blue
    const glowColor = "rgba(59, 130, 246, 0.5)" // Blue with transparency

    // Particles
    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = radius * 1.2

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * radius * 0.8
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: dotColor,
        alpha: Math.random() * 0.5 + 0.5,
      })
    }

    // Orbital rings
    const rings: Ring[] = [
      { radius: radius * 0.4, speed: 0.005, width: 2, color: primaryColor, alpha: 0.6 },
      { radius: radius * 0.6, speed: -0.003, width: 1.5, color: accentColor, alpha: 0.4 },
      { radius: radius * 0.8, speed: 0.002, width: 1, color: primaryColor, alpha: 0.3 },
    ]

    // Orbital objects
    const orbitals: Orbital[] = [
      { ring: 0, angle: 0, size: 6, color: primaryColor, alpha: 1, symbol: "C#" },
      { ring: 1, angle: Math.PI, size: 6, color: accentColor, alpha: 1, symbol: "NET" },
      { ring: 2, angle: Math.PI / 2, size: 6, color: primaryColor, alpha: 1, symbol: "AZ" },
    ]

    // Code lines
    const codeLines = [
      "using Microsoft.Azure;",
      "namespace CloudApp {",
      "  public class Program {",
      "    static async Task Main() {",
      "      var app = WebApplication.Create();",
      '      app.MapGet("/", () => "Hello World");',
      "      await app.RunAsync();",
      "    }",
      "  }",
      "}",
    ]

    // Animation variables
    let animationFrame: number
    let rotation = 0
    let pulsePhase = 0

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update pulse phase
      pulsePhase += 0.02
      const pulse = Math.sin(pulsePhase) * 0.2 + 0.8

      // Draw outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius * 1.2)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2)
      ctx.fill()

      // Draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Keep particles within bounds
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > maxDistance) {
          const angle = Math.atan2(dy, dx)
          particle.x = centerX + Math.cos(angle) * maxDistance
          particle.y = centerY + Math.sin(angle) * maxDistance
          particle.speedX = -particle.speedX * 0.5
          particle.speedY = -particle.speedY * 0.5
        }

        // Draw particle
        ctx.globalAlpha = particle.alpha * (0.5 + Math.sin(pulsePhase + distance * 0.05) * 0.5)
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
        ctx.fill()
      })

      // Reset global alpha
      ctx.globalAlpha = 1

      // Draw rings
      rings.forEach((ring, i) => {
        rotation += ring.speed
        ctx.strokeStyle = ring.color
        ctx.lineWidth = ring.width
        ctx.globalAlpha = ring.alpha * (0.8 + Math.sin(pulsePhase) * 0.2)
        ctx.beginPath()
        ctx.arc(centerX, centerY, ring.radius * pulse, 0, Math.PI * 2)
        ctx.stroke()

        // Draw dashed ring
        ctx.setLineDash([5, 10])
        ctx.globalAlpha = ring.alpha * 0.5 * (0.8 + Math.sin(pulsePhase + 1) * 0.2)
        ctx.beginPath()
        ctx.arc(centerX, centerY, ring.radius * 1.05 * pulse, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Draw orbitals
      orbitals.forEach((orbital) => {
        const ring = rings[orbital.ring]
        orbital.angle += ring.speed * 2

        const x = centerX + Math.cos(orbital.angle) * ring.radius * pulse
        const y = centerY + Math.sin(orbital.angle) * ring.radius * pulse

        // Draw orbital glow
        ctx.globalAlpha = orbital.alpha * 0.3
        ctx.fillStyle = orbital.color
        ctx.beginPath()
        ctx.arc(x, y, orbital.size * 2 * pulse, 0, Math.PI * 2)
        ctx.fill()

        // Draw orbital
        ctx.globalAlpha = orbital.alpha
        ctx.fillStyle = orbital.color
        ctx.beginPath()
        ctx.arc(x, y, orbital.size * pulse, 0, Math.PI * 2)
        ctx.fill()

        // Draw orbital text
        ctx.font = `bold ${orbital.size * 1.2}px monospace`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(orbital.symbol, x, y)
      })

      // Reset global alpha
      ctx.globalAlpha = 1

      // Draw center circle
      ctx.fillStyle = primaryColor
      ctx.globalAlpha = 0.8 + Math.sin(pulsePhase) * 0.2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.25 * pulse, 0, Math.PI * 2)
      ctx.fill()

      // Draw center symbol
      ctx.globalAlpha = 1
      ctx.font = `bold ${radius * 0.15}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"
      ctx.fillText("</> .NET", centerX, centerY)

      // Draw code lines in background
      ctx.globalAlpha = 0.15
      ctx.font = `${radius * 0.06}px monospace`
      ctx.textAlign = "left"
      ctx.fillStyle = "#ffffff"

      codeLines.forEach((line, i) => {
        const y = centerY - radius * 0.5 + i * radius * 0.1
        const x = centerX - radius * 0.6
        ctx.fillText(line, x, y)
      })

      // Reset global alpha
      ctx.globalAlpha = 1

      // Continue animation
      animationFrame = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

// Types
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

interface Ring {
  radius: number
  speed: number
  width: number
  color: string
  alpha: number
}

interface Orbital {
  ring: number
  angle: number
  size: number
  color: string
  alpha: number
  symbol: string
}
