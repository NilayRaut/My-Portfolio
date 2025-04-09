import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicationsSection() {
  return (
    <section id="publications" className="relative py-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-3">
            <FileText className="mr-1 h-4 w-4" />
            Publications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel glow-text">Research Publications</h2>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            My contributions to academic research and publications
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">E-Commerce Product Price Tracker using Dynamic Pricing Algorithm</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Divya Khairkar, Shreya Dambhare, Om Gupta, Vedant Thakre,{" "}
              <span className="font-medium text-primary">Nilay Raut</span>, Prof. S. N. Dagadkar
            </p>
            <p className="text-base text-muted-foreground">
              Volume 11, Issue V, International Journal for Research in Applied Science and Engineering Technology
              (IJRASET)
            </p>
            <p className="text-base text-muted-foreground">Page No: 216-222, ISSN: 2321-9653</p>
            <a
              href="https://doi.org/10.22214/ijraset.2023.51478"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary hover:underline inline-block mt-2"
            >
              https://doi.org/10.22214/ijraset.2023.51478
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
