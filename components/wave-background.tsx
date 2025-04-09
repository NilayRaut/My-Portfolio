"use client"

import { useRef, useEffect } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * devicePixelRatio
      canvas.height = canvas.clientHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()

    // Wave parameters
    const waves = [
      { amplitude: 20, frequency: 0.02, speed: 0.01, color: "rgba(0, 100, 255, 0.1)" },
      { amplitude: 15, frequency: 0.03, speed: 0.015, color: "rgba(0, 150, 255, 0.1)" },
      { amplitude: 10, frequency: 0.04, speed: 0.02, color: "rgba(0, 200, 255, 0.1)" },
    ]

    let time = 0

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      waves.forEach((wave) => {
        drawWave(ctx, wave, time)
      })

      time += 0.01
      requestAnimationFrame(animate)
    }

    // Draw a single wave
    const drawWave = (
      ctx: CanvasRenderingContext2D,
      wave: { amplitude: number; frequency: number; speed: number; color: string },
      time: number,
    ) => {
      const { amplitude, frequency, speed, color } = wave
      const height = canvas.clientHeight
      const width = canvas.clientWidth

      ctx.beginPath()
      ctx.moveTo(0, height)

      for (let x = 0; x < width; x++) {
        const y = height - 50 + Math.sin(x * frequency + time * speed) * amplitude
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-64 pointer-events-none" aria-hidden="true" />
  )
}
