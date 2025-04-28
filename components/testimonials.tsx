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
    role: "Lead Software engineer",
    company: "SKsoft",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Biren's work in transitioning our monolithic banking platform to microservices was nothing short of impressive. His deep understanding of .NET 8 and Azure helped us build a highly scalable, secure, and resilient infrastructure. By implementing OAuth2, JWT, and using Kubernetes for orchestration, we were able to achieve 99.99% uptime and drastically reduce system latency. The improvements he made not only optimized our operations but also reduced fraud-related losses by 30%. Highly recommend Biren for any complex fintech project!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Software Engineer",
    company: "Microsoft Corporation (Healthcare IT)",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Biren's expertise in HIPAA compliance and OAuth2 integration played a critical role in securing our healthcare platform. His work in optimizing data flows using RabbitMQ and Redis was essential in reducing latency and ensuring real-time telemetry data updates from medical devices. His contributions helped us streamline the processing of sensitive data while maintaining strict compliance standards. Biren’s dedication and deep technical knowledge were invaluable to our project’s success.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior Full Stack Engineer",
    company: "IBM (B2B SaaS)",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Biren's leadership in developing a scalable payment processing system was a game-changer for our business. His ability to design microservices with ASP.NET Core and optimize GraphQL/REST API performance helped us handle a high transaction load with ease. The real-time updates he enabled using Redis and WebSockets significantly enhanced user experience and performance. Biren was instrumental in setting up our CI/CD pipelines and ensuring system availability with AWS EKS and Docker.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "Square (FinTech)",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Biren was pivotal in migrating our legacy system from VB.NET to ASP.NET Core, improving both maintainability and performance. His ability to model data using EF Core and Dapper greatly reduced query latency, while his work on securing APIs with OAuth2 and JWT helped us ensure seamless partner integrations. His experience with RabbitMQ and Redis optimized our system, reducing SQL load and speeding up loan decision times by 40%. Biren’s expertise and efficiency were critical to our success.",
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
