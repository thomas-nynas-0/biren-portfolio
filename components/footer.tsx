import Link from "next/link"
import { Github, Linkedin, Twitter, FileText, MailIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="font-bold">
            Biren Patel | .NET Engineer
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {/* <Link href="#" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link> */}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FileText className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Resume</span>
          </Link>
          <Link href="mailto:contact@dotnetdev.tech" target="_blank" rel="noopener noreferrer">
            <MailIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
