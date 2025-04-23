import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AdvancedTechSymbol } from "@/components/advanced-tech-symbol"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
          <Image
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
            alt="Tech Background"
            fill
            className="object-cover dark:brightness-[0.4] brightness-[0.9]"
            priority
            
            // style={{ height: "90%", width: "auto" }}
          />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/60 dark:from-background/90 dark:via-background/80 dark:to-background/70" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-row gap-12 items-center">
          <div className="flex flex-col justify-left space-y-4 animate-fade-in text-left max-w-3xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-10">
                Senior Software Architect
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Specializing in building enterprise-grade applications with .NET, Azure Cloud, and modern web
                technologies. Transforming business requirements into scalable, maintainable software solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-10 justify-left">
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                .NET Core
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">C#</span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                Azure
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                Angular
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                React
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                SQL Server
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20">
                DevOps
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-left">
              <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background/50 backdrop-blur-sm hover:bg-background/70 dark:bg-background/30 dark:hover:bg-background/50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex gap-4 mt-4 justify-left">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto animate-scale-in animate-delay-300">
            <AdvancedTechSymbol />
          </div>
        </div>
      </div>
    </section>
  )
}
