"use client"

import { useEffect, useRef } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import PublicationsSection from "@/components/publications-section"

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set animation delay based on section index
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll(".section-card")
      sections.forEach((section, index) => {
        ;(section as HTMLElement).style.setProperty("--section-index", index.toString())
      })
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const sections = document.querySelectorAll(".section-card")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background data-grid">
      <Navbar />
      <main className="flex-1" ref={sectionsRef}>
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
