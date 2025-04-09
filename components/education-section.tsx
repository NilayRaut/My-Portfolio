import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 px-3 py-1 text-sm font-pixel text-primary mb-3 border-2 border-primary">
            <GraduationCap className="mr-1 h-4 w-4" />
            EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel glow-text">ACADEMIC BACKGROUND</h2>
          <p className="max-w-[700px] text-xl text-muted-foreground font-pixel">
            MY EDUCATIONAL JOURNEY IN COMPUTER SCIENCE AND INFORMATION SYSTEMS
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card border-4 border-primary/50 hover:border-primary transition-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-pixel">NORTHEASTERN UNIVERSITY</CardTitle>
              <CardDescription className="text-base font-pixel">BOSTON, MA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-pixel text-lg">MASTER OF SCIENCE IN INFORMATION SYSTEMS</p>
              <p className="text-base text-muted-foreground font-pixel">SEPTEMBER 2024 — PRESENT</p>
              <div className="mt-6">
                <p className="font-pixel text-lg mb-2">RELEVANT COURSES:</p>
                <ul className="list-none text-base space-y-1 text-muted-foreground font-pixel">
                  <li>→ PROMPT ENGINEERING AND AI</li>
                  <li>→ APPLICATION ENGINEERING AND DEVELOPMENT</li>
                  <li>→ DATA SCIENCE ENGINEERING METHODS AND TOOLS</li>
                  <li>→ ACCOUNTING AND BUDGETARY SYSTEMS</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-4 border-secondary/50 hover:border-secondary transition-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-pixel">RTMNU</CardTitle>
              <CardDescription className="text-base font-pixel">NAGPUR, MH, INDIA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-pixel text-lg">BACHELOR OF ENGINEERING, COMPUTER SCIENCE</p>
              <p className="text-base text-muted-foreground font-pixel">AUGUST 2019 — JUNE 2023</p>
              <div className="mt-6">
                <p className="font-pixel text-lg mb-2">RELEVANT COURSES:</p>
                <ul className="list-none text-base space-y-1 text-muted-foreground font-pixel">
                  <li>→ DISTRIBUTED SYSTEMS, DISCRETE MATHEMATICS</li>
                  <li>→ DESIGN AND ANALYSIS OF ALGORITHMS</li>
                  <li>→ DATA MINING AND DATA WAREHOUSING</li>
                  <li>→ OBJECT ORIENTED PROGRAMMING</li>
                  <li>→ SOFTWARE ENGINEERING AND PROJECT MANAGEMENT</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
