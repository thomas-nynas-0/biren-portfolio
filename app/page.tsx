import { Certifications } from "@/components/certifications"
import { ContactForm } from "@/components/contact-form"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Skills />
        <Education />
        {/* <Certifications /> */}
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
