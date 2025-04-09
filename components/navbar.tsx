"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-none ${
        scrolled ? "bg-card border-b-4 border-primary" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-pixel text-2xl text-primary glow-text">
          NILAY RAUT
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="pixel-btn">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-lg font-pixel hover:text-primary">
            ABOUT
          </Link>
          <Link href="#education" className="text-lg font-pixel hover:text-primary">
            EDUCATION
          </Link>
          <Link href="#projects" className="text-lg font-pixel hover:text-primary">
            PROJECTS
          </Link>
          <Link href="#skills" className="text-lg font-pixel hover:text-primary">
            SKILLS
          </Link>
          <Link href="#publications" className="text-lg font-pixel hover:text-primary">
            PAPERS
          </Link>
          <Link href="#contact" className="text-lg font-pixel hover:text-primary">
            CONTACT
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-card border-b-4 border-primary md:hidden">
            <nav className="flex flex-col p-6">
              <Link href="#about" className="py-3 text-lg font-pixel hover:text-primary">
                ABOUT
              </Link>
              <Link href="#education" className="py-3 text-lg font-pixel hover:text-primary">
                EDUCATION
              </Link>
              <Link href="#projects" className="py-3 text-lg font-pixel hover:text-primary">
                PROJECTS
              </Link>
              <Link href="#skills" className="py-3 text-lg font-pixel hover:text-primary">
                SKILLS
              </Link>
              <Link href="#publications" className="py-3 text-lg font-pixel hover:text-primary">
                PAPERS
              </Link>
              <Link href="#contact" className="py-3 text-lg font-pixel hover:text-primary">
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
