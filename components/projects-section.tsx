import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Complete e-commerce platform with shopping cart, Stripe payments and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and notifications.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations and SEO optimizations.",
      image: "/elegant-portfolio-website-design.jpg",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard with geolocation and interactive forecasts.",
      image: "/weather-dashboard.png",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Data analytics dashboard with charts and customizable reports.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "D3.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "Blog platform with Markdown editor and user authentication.",
      image: "/placeholder.svg",
      technologies: ["Django", "PostgreSQL", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-[#F5F5F5]/70 max-w-3xl mx-auto text-balance">
              Explore some of my recent projects that demonstrate my technical skills and expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-[#1A1A1A] border border-[#333333] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/50 to-transparent" />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-[#F5F5F5]">{project.title}</h3>
                  <p className="text-sm text-[#F5F5F5]/70 mb-3 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-medium border border-[#D4AF37]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button asChild size="sm" className="flex-1 bg-[#D4AF37] hover:bg-[#B8860B] text-[#121010] font-semibold">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1 border-[#333333] hover:border-[#D4AF37]/50 text-[#F5F5F5]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10">
                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA to GitHub */}
          <div className="text-center mt-20">
            <Button
              asChild
              variant="outline"
              className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-3 text-base"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All My Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
