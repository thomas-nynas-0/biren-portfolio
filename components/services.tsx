import { Code, Database, Server, Layers, Cloud, Shield, BarChart, Workflow } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-repeat"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Specialties</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized in building robust, scalable applications with modern technologies and best practices.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <Card className="animate-fade-in animate-delay-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Server className="h-12 w-12 text-primary mb-2" />
              <CardTitle>.NET Development</CardTitle>
              <CardDescription>
                Enterprise-grade backend solutions using the latest .NET technologies and architectural patterns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>.NET Core / .NET 8</li>
                <li>ASP.NET Web API</li>
                <li>C# / Entity Framework</li>
                <li>Microservices Architecture</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Cloud className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Azure Cloud Solutions</CardTitle>
              <CardDescription>
                Comprehensive cloud solutions leveraging the full power of Microsoft Azure services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Azure App Services</li>
                <li>Azure Functions & Logic Apps</li>
                <li>Azure DevOps & CI/CD</li>
                <li>Azure SQL & Cosmos DB</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Layers className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>
                Modern web applications with Angular, React and Next.js for optimal performance and user experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Angular & RxJS</li>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Responsive UI Design</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Database className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Database Solutions</CardTitle>
              <CardDescription>
                Efficient database design and implementation for optimal data management and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>SQL Server / Azure SQL</li>
                <li>Entity Framework Core</li>
                <li>MongoDB / Cosmos DB</li>
                <li>Database Optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <Card className="animate-fade-in animate-delay-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Security & Identity</CardTitle>
              <CardDescription>
                Implementing robust security solutions and identity management for enterprise applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>OAuth 2.0 / OpenID Connect</li>
                <li>Azure AD B2C</li>
                <li>Identity Server</li>
                <li>API Security</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Workflow className="h-12 w-12 text-primary mb-2" />
              <CardTitle>DevOps & CI/CD</CardTitle>
              <CardDescription>
                Streamlining development workflows with automated testing, deployment, and monitoring.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Docker & Kubernetes</li>
                <li>Infrastructure as Code</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <BarChart className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Performance Optimization</CardTitle>
              <CardDescription>
                Enhancing application performance through profiling, caching, and optimization techniques.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Application Profiling</li>
                <li>Caching Strategies</li>
                <li>Database Optimization</li>
                <li>Load Testing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800">
            <CardHeader className="pb-2">
              <Code className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Architecture Design</CardTitle>
              <CardDescription>
                Designing scalable, maintainable software architectures for complex enterprise applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Microservices</li>
                <li>Event-Driven Architecture</li>
                <li>Domain-Driven Design</li>
                <li>Clean Architecture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
