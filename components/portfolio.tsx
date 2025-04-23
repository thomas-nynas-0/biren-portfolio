"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Maximize2, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const portfolioItems = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    category: "dotnet",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/ERP_system_3-63v3KAD6BdQZma0vXbBb796BUb4DAw.png",
    description:
      "A comprehensive ERP solution built with .NET Core and Angular, featuring modules for inventory management, HR, and finance with role-based access control.",
    link: "https://www.dolibarr.org/",
    github: "#",
    tech: [".NET 7", "Angular 15", "SQL Server", "Azure DevOps", "Identity Server"],
  },
  {
    id: 2,
    title: "Healthcare Patient Portal",
    category: "angular",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/Healthcare_Patient_Portal_1-sodnqXcYoUIZxLYjtDgRYb9dRS5jlT.png",
    description:
      "HIPAA-compliant patient portal allowing secure access to medical records, appointment scheduling, and communication with healthcare providers.",
    link: "https://www.bes.au/products/tamanu/",
    github: "#",
    tech: ["Angular 16", "NgRx", "ASP.NET Core", "Entity Framework", "Azure B2C"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "angular",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/E-commerce_Platform_4-HfNDKOCf0noLTvg195iRJbYGa10hiG.png",
    description:
      "Fully responsive e-commerce platform with product catalog, shopping cart, payment processing, and admin dashboard for inventory management.",
    link: "https://corecommerce.com/",
    github: "#",
    tech: ["Angular16", "ASP.NET Core", ".NET Minimal API", "MongoDB", "Azure"],
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    category: "angular",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/Financial_Analytics_Dashboard_2-ihD7JMw3XnttLlGTEI43LY1gdxYfgQ.png",
    description:
      "Real-time financial analytics dashboard with interactive charts, data visualization, and reporting capabilities for enterprise clients.",
    link: "https://www.klipfolio.com/",
    github: "#",
    tech: ["Angular 15", "D3.js", "SignalR", ".NET 7", "SQL Server"],
  },
  {
    id: 5,
    title: "Inventory Management System",
    category: "dotnet",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/Inventory_Management_System_1-iigVflTJxcCb4w75TFMG29nVfmQ9zN.png",
    description:
      "Cloud-based inventory management system with barcode scanning, real-time stock updates, and automated reordering functionality.",
    link: "https://www.zoho.com/us/inventory/",
    github: "#",
    tech: [".NET 6", "Blazor", "Entity Framework Core", "Azure Functions", "SQL Server"],
  },
  {
    id: 6,
    title: "Real Estate Listing Platform",
    category: "react",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/Real_Estate_Listing_Platform_3-1x8PRU8O93F8RYxKTdaW9BDdAkVJ27.png",
    description:
      "Feature-rich real estate platform with property listings, advanced search, virtual tours, and agent portal for listing management.",
    link: "https://Homes.com/",
    github: "#",
    tech: ["React", "Next.js", "ASP.NET Core", "Entity Framework", "Azure Maps"],
  },
  {
    id: 7,
    title: "Fintech Platform",
    category: "angular",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/fintech_platform_3-zmGz9k5pTYLp6zYYX0f5TXgEG4yL5n.png",
    description:
      "Feature-rich real estate platform with property listings, advanced search, virtual tours, and agent portal for listing management.",
    link: "https://www.acorns.com/early/",
    github: "#",
    tech: ["Angular17", "ASP.NET Core", "Entity Framework", "Azure Maps"],
  },
  {
    id: 8,
    title: "SaaS platform",
    category: "react",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/SaaS_platform_6-kPqzNFU1MhXINSvl59AtkPWlmuI4Xl.png",
    description:
      "Feature-rich real estate platform with property listings, advanced search, virtual tours, and agent portal for listing management.",
    link: "https://www.wrike.com/",
    github: "#",
    tech: ["React", "Next.js", "ASP.NET Core", "Entity Framework", "Azure Maps"],
  },
  {
    id: 9,
    title: "Travel Platform",
    category: "react",
    image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/Main%28.NET%29/travel5-K65W1LQmsnNOqOfOuYU6Nj351LZ7pq.png",
    description:
      "Feature-rich real estate platform with property listings, advanced search, virtual tours, and agent portal for listing management.",
    link: "https://hotwire.com",
    github: "#",
    tech: ["React", "Next.js", "ASP.NET Core", "Entity Framework", "Azure Maps"],
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems =
    activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section id="portfolio" className="py-16 md:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
          alt="Tech Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of enterprise applications and solutions I've architected and developed.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="dotnet">.NET</TabsTrigger>
              <TabsTrigger value="angular">Angular</TabsTrigger>
              <TabsTrigger value="react">React/Next.js</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in dark:border-gray-800`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className=" overflow-hidden ">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">+{item.tech.length - 3}</span>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(item)
                          setOpen(true)
                        }}
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Maximize2 className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      {/* <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                        disabled
                      >
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button> */}
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {selectedItem && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl animate-scale-in dark:border-gray-800">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              {/* <Button variant="outline" asChild>
                <a href={selectedItem.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button> */}
              <Button asChild>
                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
