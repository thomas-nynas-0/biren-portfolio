"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" onClick={() => scrollToSection("home")} className="font-bold text-xl">
          Biren Patel | .NET Engineer
        </Link>
        <nav className="hidden md:flex gap-6">
          {["home", "services", "portfolio", "skills", "education", "testimonials", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                activeSection === section
                  ? "bg-primary text-white dark:bg-primary/80"
                  : "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Hire Me</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t dark:border-gray-800">
          <nav className="flex flex-col gap-4">
            {["home", "services", "portfolio", "skills", "education", "testimonials", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md text-left ${
                  activeSection === section
                    ? "bg-primary text-white dark:bg-primary/80"
                    : "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div className="flex items-center justify-between mt-2 pt-2 border-t dark:border-gray-800">
              <ThemeToggle />
              <Button asChild className="w-auto">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
