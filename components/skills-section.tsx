import { Cpu, Database, Code, Braces, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 px-3 py-1 text-sm font-pixel text-primary mb-3 border-2 border-primary">
            <Cpu className="mr-1 h-4 w-4" />
            SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel glow-text">TECHNICAL SKILLS</h2>
          <p className="max-w-[700px] text-xl text-muted-foreground font-pixel">
            MY TECHNICAL EXPERTISE AND PROFICIENCIES
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card border-4 border-primary/50 hover:border-primary transition-none">
            <CardContent className="p-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 border-2 border-primary">
                    <Braces className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-pixel">MACHINE LEARNING</h3>
                </div>
                <p className="text-lg text-muted-foreground font-pixel">
                  CLUSTERING, REGRESSION, KNN, SVM, NEURAL NETWORKS, REINFORCEMENT LEARNING
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-4 border-secondary/50 hover:border-secondary transition-none">
            <CardContent className="p-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 border-2 border-secondary">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-pixel">NLP</h3>
                </div>
                <p className="text-lg text-muted-foreground font-pixel">NAIVE BAYES CLASSIFIER, VECTOR SPACE MODELS</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-4 border-accent/50 hover:border-accent transition-none">
            <CardContent className="p-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 border-2 border-accent">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-pixel">PROGRAMMING</h3>
                </div>
                <p className="text-lg text-muted-foreground font-pixel">PYTHON, C++, JAVASCRIPT, SQL, JAVA, R</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-4 border-primary/50 hover:border-primary transition-none">
            <CardContent className="p-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 border-2 border-primary">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-pixel">TOOLS</h3>
                </div>
                <p className="text-lg text-muted-foreground font-pixel">
                  TENSORFLOW, KERAS, SCIKIT-LEARN, OPENCV, NUMPY, PANDAS, NLTK, NODE.JS, NEXT.JS
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-card border-4 border-secondary/50 hover:border-secondary transition-none">
          <CardContent className="p-6">
            <h3 className="text-2xl font-pixel mb-6">LEADERSHIP & CERTIFICATIONS</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 border-2 border-primary mt-1">
                  <div className="h-3 w-3 bg-primary"></div>
                </div>
                <div>
                  <p className="font-pixel text-xl">ACM VICE PRESIDENT</p>
                  <p className="text-lg mt-1 text-muted-foreground font-pixel">
                    REPRESENTATIVE FOR THE UNIVERSITY'S STUDENT CHAPTER
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 border-2 border-primary mt-1">
                  <div className="h-3 w-3 bg-primary"></div>
                </div>
                <div>
                  <p className="font-pixel text-xl">MACHINE LEARNING A-Z</p>
                  <p className="text-lg mt-1 text-muted-foreground font-pixel">AI, PYTHON, AND R (UDEMY) – DEC 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 border-2 border-primary mt-1">
                  <div className="h-3 w-3 bg-primary"></div>
                </div>
                <div>
                  <p className="font-pixel text-xl">IIT BOMBAY TECHFEST</p>
                  <p className="text-lg mt-1 text-muted-foreground font-pixel">BUILT AN ARDUINO-BASED ROBOT</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
