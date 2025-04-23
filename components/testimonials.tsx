"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As our Lead .NET Engineer, this developer transformed our legacy systems into a modern, scalable architecture. Their expertise in both .NET and Angular allowed us to deliver a seamless user experience while maintaining robust backend performance.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "FinTech Innovations",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with this engineer was a game-changer for our financial platform. They architected a complex system that handles millions of transactions daily with 99.99% uptime. Their technical leadership and mentoring of junior developers was invaluable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of Engineering",
    company: "HealthTech Systems",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "This developer led the complete overhaul of our patient management system. Their deep knowledge of .NET, Angular, and healthcare data security standards ensured we delivered a HIPAA-compliant solution that exceeded our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    company: "E-commerce Ventures",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We hired this engineer to build our e-commerce platform from scratch. Their ability to work across the full stack with .NET and React allowed us to launch quickly with a scalable, feature-rich solution that has supported our growth from zero to thousands of daily users.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Client Feedback</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What clients and colleagues say about my technical leadership and development expertise.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0 && totalPages === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex === totalPages - 1}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
