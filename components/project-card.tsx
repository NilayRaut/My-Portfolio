import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px] border border-border/40 dark:bg-card/80">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-base text-muted-foreground line-clamp-4">{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-2">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <Badge variant="outline" className="text-sm">
            +{project.technologies.length - 3}
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}
