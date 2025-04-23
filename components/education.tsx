import { GraduationCap, Calendar, Award, BookOpen, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Holy Names University",
      location: "Oakland, CA",
      period: "2012 - 2015",
      description: "Focused on software development methodologies and programming fundamentals.",
      achievements: [
        "Senior Project: Developed a cloud-based inventory management system",
        "Dean's List for all semesters",
        "President of the Computer Science Club",
      ],
    },
    {
      degree: "Associate Degree of Science in Computer Science",
      institution: " MacMurray College",
      location: "Jacksonville, WA",
      period: "2010 - 2012",
      description: "Specialized in Software Engineering and Cloud Computing. Graduated with honors.",
      achievements: [
        "Thesis: 'Scalable Microservices Architecture for Enterprise Applications'",
        "GPA: 3.9/4.0",
        "Teaching Assistant for Advanced .NET Programming",
      ],
    },
  ]

  const certifications = [
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2023",
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2022",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Academic Background</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational journey and academic qualifications that built the foundation for my technical expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {education.map((item, index) => (
            <Card
              key={item.degree}
              className="animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="font-medium">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-sm">{item.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-primary mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center">
            <Award className="h-5 w-5 mr-2 text-primary" />
            Additional Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "AWS Certified Solutions Architect",
              "Certified Kubernetes Administrator",
              "Certified Scrum Master",
              "CompTIA Security+",
              "MCSD: App Builder",
              "Azure Data Engineer Associate",
              "Azure AI Engineer Associate",
              "Professional Scrum Developer",
            ].map((cert, index) => (
              <div
                key={cert}
                className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary animate-fade-in dark:border-gray-800"
                style={{ animationDelay: `${index * 50 + 600}ms` }}
              >
                <Award className="h-5 w-5 text-primary group-hover:text-white flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
