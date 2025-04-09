import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-card border-t-4 border-primary">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-base text-muted-foreground font-pixel">
          &copy; {new Date().getFullYear()} NILAY RAUT. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="mailto:raut.ni@northeastern.edu"
            className="text-muted-foreground hover:text-primary transition-none"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-none"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-none"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
