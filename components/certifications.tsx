import { Award, CheckCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Microsoft Certified: .NET Developer",
      issuer: "Microsoft",
      date: "2022",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Angular Certified Developer",
      issuer: "Google",
      date: "2022",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2021",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Certifications</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Credentials</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industry certifications and professional qualifications that validate my expertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2 flex flex-col items-center">
                {cert.icon}
                <CardTitle className="mt-4 text-center">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm font-medium mt-2">{cert.date}</p>
                <div className="flex items-center justify-center mt-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Verified</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
