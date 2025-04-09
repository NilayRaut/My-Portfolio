"use client"

import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 px-3 py-1 text-sm font-pixel text-primary mb-3 border-2 border-primary">
            <Mail className="mr-1 h-4 w-4" />
            CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel glow-text">GET IN TOUCH</h2>
          <p className="max-w-[700px] text-xl text-muted-foreground font-pixel">
            FEEL FREE TO REACH OUT FOR COLLABORATIONS OR JUST A FRIENDLY CHAT
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card border-4 border-primary/50 hover:border-primary transition-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-pixel">CONTACT INFO</CardTitle>
              <CardDescription className="text-lg font-pixel">HERE'S HOW YOU CAN REACH ME</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 border-2 border-primary">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-pixel text-xl">EMAIL</p>
                  <a
                    href="mailto:raut.ni@northeastern.edu"
                    className="text-lg hover:text-primary transition-none font-pixel"
                  >
                    RAUT.NI@NORTHEASTERN.EDU
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 border-2 border-primary">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-pixel text-xl">LOCATION</p>
                  <p className="text-lg text-muted-foreground font-pixel">BOSTON, MASSACHUSETTS</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-4 border-secondary/50 hover:border-secondary transition-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-pixel">SEND MESSAGE</CardTitle>
              <CardDescription className="text-lg font-pixel">I'LL GET BACK TO YOU SOON</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you for your message! I'll get back to you soon.")
                  // In a real application, you would handle form submission here
                  const form = e.target as HTMLFormElement
                  form.reset()
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-lg font-pixel leading-none">
                      NAME
                    </label>
                    <Input
                      id="name"
                      placeholder="YOUR NAME"
                      required
                      className="text-base h-12 bg-card border-4 border-primary/50 focus:border-primary font-pixel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-lg font-pixel leading-none">
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="YOUR EMAIL"
                      required
                      className="text-base h-12 bg-card border-4 border-primary/50 focus:border-primary font-pixel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-lg font-pixel leading-none">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    placeholder="MESSAGE SUBJECT"
                    required
                    className="text-base h-12 bg-card border-4 border-primary/50 focus:border-primary font-pixel"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-pixel leading-none">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    placeholder="YOUR MESSAGE"
                    className="min-h-[150px] text-base bg-card border-4 border-primary/50 focus:border-primary font-pixel"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-pixel border-4 border-primary/70"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
