"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function BrainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDarkMode = theme === "dark"
    const primaryColor = isDarkMode ? "0, 255, 255" : "0, 150, 255"

    const devicePixelRatio = window.devicePixelRatio || 1
    const setCanvasDimensions = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    setCanvasDimensions()

    class Node {
      x: number
      y: number
      size: number
      glowIntensity: number
      glowDirection: number
      connections: Node[]
      originalX: number
      originalY: number
      velocityX = 0
      velocityY = 0

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = size
        this.glowIntensity = Math.random()
        this.glowDirection = Math.random() > 0.5 ? 1 : -1
        this.connections = []
      }

      draw(ctx: CanvasRenderingContext2D) {
        const glow = this.glowIntensity * 0.8
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.shadowColor = `rgba(${primaryColor}, ${glow})`
        ctx.shadowBlur = 15
        ctx.fillStyle = `rgba(${primaryColor}, ${0.7 + glow * 0.3})`
        ctx.fill()

        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = `rgba(${primaryColor}, ${0.15 + glow * 0.2})`
          ctx.lineWidth = 0.6
          ctx.shadowBlur = 8
          ctx.shadowColor = `rgba(${primaryColor}, ${glow * 0.8})`
          ctx.stroke()
        })
      }

      update() {
        this.glowIntensity += 0.01 * this.glowDirection
        if (this.glowIntensity > 1 || this.glowIntensity < 0.3) {
          this.glowDirection *= -1
          this.glowIntensity = Math.max(0.3, Math.min(1, this.glowIntensity))
        }

        // Apply velocity
        this.x += this.velocityX
        this.y += this.velocityY

        // Dampen velocity
        this.velocityX *= 0.95
        this.velocityY *= 0.95
      }

      rotate(angle: number, centerX: number, centerY: number) {
        const dx = this.originalX - centerX
        const dy = this.originalY - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const originalAngle = Math.atan2(dy, dx)
        const newAngle = originalAngle + angle
        const targetX = centerX + distance * Math.cos(newAngle)
        const targetY = centerY + distance * Math.sin(newAngle)

        // Smooth transition to the rotated position
        this.x = targetX
        this.y = targetY
      }

      applyForce(mouseX: number, mouseY: number) {
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 500
          const angle = Math.atan2(dy, dx)
          this.velocityX += Math.cos(angle) * force
          this.velocityY += Math.sin(angle) * force
        }
      }
    }

    const createBrain = () => {
      const nodes: Node[] = []
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const centerX = width / 2
      const centerY = height / 2
      const outerNodeCount = 100
      const innerClusterCount = 6
      const clusterNodeCount = 10
      const outerRadius = Math.min(width, height) * 0.35

      for (let i = 0; i < outerNodeCount; i++) {
        const angle = (i / outerNodeCount) * 2 * Math.PI
        const x = centerX + Math.cos(angle) * outerRadius
        const y = centerY + Math.sin(angle) * outerRadius
        nodes.push(new Node(x, y, 2))
      }

      for (let i = 0; i < innerClusterCount; i++) {
        const angle = (i / innerClusterCount) * 2 * Math.PI
        const clusterCenterX = centerX + Math.cos(angle) * (outerRadius * 0.4)
        const clusterCenterY = centerY + Math.sin(angle) * (outerRadius * 0.4)

        for (let j = 0; j < clusterNodeCount; j++) {
          const theta = Math.random() * 2 * Math.PI
          const r = Math.random() * 40
          const x = clusterCenterX + Math.cos(theta) * r
          const y = clusterCenterY + Math.sin(theta) * r
          nodes.push(new Node(x, y, 1.5 + Math.random()))
        }
      }

      nodes.forEach((node) => {
        const nearby = nodes
          .filter((n) => n !== node)
          .sort((a, b) => {
            const da = Math.hypot(a.x - node.x, a.y - node.y)
            const db = Math.hypot(b.x - node.x, b.y - node.y)
            return da - db
          })
          .slice(0, 2 + Math.floor(Math.random() * 3))
        node.connections = nearby
      })

      return nodes
    }

    const nodes = createBrain()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
      ctx.globalCompositeOperation = "lighter"

      const rotationSpeed = 0.0001
      const angle = scrollY * rotationSpeed
      const centerX = canvas.clientWidth / 2
      const centerY = canvas.clientHeight / 2

      nodes.forEach((node) => {
        node.update()
        node.rotate(angle, centerX, centerY)
        node.applyForce(mousePosition.x, mousePosition.y)
        node.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)
    requestAnimationFrame(animate)
    return () => window.removeEventListener("resize", handleResize)
  }, [scrollY, mousePosition, theme, mounted])

  return <canvas ref={canvasRef} className="w-full h-full brain-animation" aria-hidden="true" />
}
