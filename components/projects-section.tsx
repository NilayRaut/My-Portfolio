import { Code, LineChart, Palette, ShoppingCart, Film, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "REFUGEE TRENDS",
      description:
        "Analyzed refugee intake data using Python. Applied linear regression, generated heatmaps, and performed hypothesis testing.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      technologies: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-primary/20",
    },
    {
      title: "GAN ART GENERATOR",
      description: "Developed a GAN using TensorFlow and Keras to generate original artwork from text input.",
      icon: <Palette className="h-10 w-10 text-secondary" />,
      technologies: ["Python", "TensorFlow", "Keras", "GANs", "Git"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-secondary/20",
    },
    {
      title: "PRICE TRACKER",
      description: "Built a dynamic pricing tracker to monitor product prices on e-commerce platforms.",
      icon: <ShoppingCart className="h-10 w-10 text-accent" />,
      technologies: ["Python", "Django", "BeautifulSoup4", "Web Scraping"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-accent/20",
    },
    {
      title: "SUPPLY CHAIN APP",
      description: "Designed a Java Swing application connecting producers, suppliers, retailers, and consumers.",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      technologies: ["Java", "Swing", "OOP", "File I/O", "MongoDB", "Git"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-primary/20",
    },
    {
      title: "COMIC MOVIE MAKER",
      description:
        "Automated the transformation of 100+ images into a comic-style movie, reducing manual editing time by 40 Hours.",
      icon: <Film className="h-10 w-10 text-secondary" />,
      technologies: ["Python", "Pillow", "Image Processing"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-secondary/20",
    },
    {
      title: "PRICING MODEL",
      description:
        "Built a Java Swing application to analyze product price performance and simulate pricing adjustments.",
      icon: <LineChart className="h-10 w-10 text-accent" />,
      technologies: ["Java", "Swing", "OOP", "File I/O"],
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-accent/20",
    },
  ]

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 px-3 py-1 text-sm font-pixel text-primary mb-3 border-2 border-primary">
            <Code className="mr-1 h-4 w-4" />
            PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel glow-text">FEATURED PROJECTS</h2>
          <p className="max-w-[700px] text-xl text-muted-foreground font-pixel">
            A SHOWCASE OF MY TECHNICAL PROJECTS AND APPLICATIONS
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              <div className={`${project.color} p-6 flex justify-center items-center h-48 border-b-4 border-border`}>
                {project.icon}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-pixel mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 font-pixel text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-pixel bg-secondary px-2 py-1 border-2 border-secondary/70">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-pixel bg-secondary/50 px-2 py-1 border-2 border-secondary/30">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-4 border-primary text-primary font-pixel hover:bg-primary/10"
                  asChild
                >
                  <Link href="#projects">VIEW DETAILS</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
