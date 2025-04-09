import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen py-20 md:py-32 overflow-hidden data-grid">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="pixel-star"></div>
                <div className="pixel-star"></div>
                <div className="pixel-star"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-pixel uppercase glow-text tracking-wider leading-tight">
                NILAY RAUT
              </h1>
              <p className="max-w-[600px] text-xl mt-8 text-muted-foreground font-pixel">
                I'm a Data Scientist and Machine Learning enthusiast with a strong interest in predictive modeling and
                natural language processing. Currently pursuing my Master's in Information Systems at Northeastern
                University, I enjoy using data to solve real-world problems and build smart, data-driven solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="btn-8bit bg-primary text-primary-foreground border-4 border-primary/70"
                asChild
              >
                <Link href="#projects">VIEW PROJECTS</Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-8bit border-4 border-primary text-primary" asChild>
                <Link href="#contact">CONTACT ME</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <Link
                href="mailto:raut.ni@northeastern.edu"
                className="text-muted-foreground hover:text-primary p-2 pixel-btn"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-2 pixel-btn"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-2 pixel-btn"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] bg-card border-4 border-primary p-6 flex items-center justify-center pixel-borders">
              <div className="font-pixel text-4xl md:text-5xl text-center text-primary glow-text pixel-float">
                <div className="mb-4">DATA</div>
                <div>SCIENCE</div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent pixel-blink"></div>
                <div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-secondary pixel-blink"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
