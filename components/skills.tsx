import { CheckCircle2, Server, Database, Cloud, Code, Lock, Cpu, GitBranch } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const dotnetSkills = [
    { name: "C# / .NET Core", level: 95 },
    { name: "ASP.NET Web API", level: 90 },
    { name: "Entity Framework Core", level: 85 },
    { name: "Blazor", level: 80 },
  ]

  const azureSkills = [
    { name: "Azure App Services", level: 90 },
    { name: "Azure Functions", level: 85 },
    { name: "Azure DevOps", level: 90 },
    { name: "Azure SQL / Cosmos DB", level: 85 },
  ]

  const frontendSkills = [
    { name: "Angular", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React / Next.js", level: 80 },
    { name: "HTML5 / CSS3 / SCSS", level: 85 },
  ]

  const skillCategories = [
    {
      title: "Azure Cloud Services",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: [
        "Azure App Services",
        "Azure Functions",
        "Azure Logic Apps",
        "Azure Service Bus",
        "Azure API Management",
        "Azure Key Vault",
        "Azure Active Directory B2C",
        "Azure Cognitive Services",
      ],
    },
    {
      title: ".NET Ecosystem",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        ".NET 6/7/8",
        "ASP.NET Core",
        "Entity Framework Core",
        "Blazor WebAssembly/Server",
        "gRPC Services",
        "MAUI",
        "SignalR",
        "Minimal APIs",
      ],
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        "SQL Server",
        "Azure SQL",
        "Cosmos DB",
        "Redis Cache",
        "Entity Framework Core",
        "Dapper",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: [
        "Azure DevOps",
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
    {
      title: "Architecture Patterns",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: [
        "Microservices",
        "Event-Driven Architecture",
        "CQRS Pattern",
        "Repository Pattern",
        "Clean Architecture",
        "Domain-Driven Design",
        "Serverless Architecture",
        "API Gateway Pattern",
      ],
    },
    {
      title: "Security & Authentication",
      icon: <Lock className="h-6 w-6 text-primary" />,
      skills: [
        "OAuth 2.0 / OpenID Connect",
        "JWT Authentication",
        "Identity Server",
        "Azure AD B2C",
        "Role-Based Access Control",
        "API Security",
        "Data Encryption",
        "Security Best Practices",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Proficiency</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical skills and expertise in .NET, Azure, and full-stack development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="animate-slide-left">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Server className="h-5 w-5 mr-2 text-primary" />
              .NET Development
            </h3>
            <div className="space-y-6">
              {dotnetSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-primary" />
              Azure Cloud
            </h3>
            <div className="space-y-6">
              {azureSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-right">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in animate-delay-500">
          <h3 className="text-xl font-semibold mb-8 text-center">Specialized Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="border dark:border-gray-800 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100 + 600}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm"
                        style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50 + 700}ms` }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
