import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme e-commerce complète avec panier, paiements Stripe et dashboard admin.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Site portfolio responsive avec animations fluides et optimisations SEO.",
      image: "/elegant-portfolio-website-design.jpg",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard météo avec géolocalisation et prévisions interactives.",
      image: "/weather-dashboard.png",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard d'analyse de données avec graphiques et rapports personnalisables.",
      image: "/placeholder.svg", // Placeholder image
      technologies: ["Vue.js", "D3.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "Plateforme de blog avec éditeur Markdown et authentification des utilisateurs.",
      image: "/placeholder.svg", // Placeholder image
      technologies: ["Django", "PostgreSQL", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projets" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Mes <span className="gradient-text">projets</span>
            </h2>
            <p className="text-lg text-[#F5F5F5]/70 max-w-3xl mx-auto text-balance">
              Découvrez quelques-uns de mes projets récents qui démontrent mes compétences techniques.
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
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-[#121010]/50 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-[#F5F5F5]">{project.title}</h3>
                  <p className="text-[#F5F5F5]/70 mb-4 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-medium border border-[#D4AF37]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm" className="flex-1 bg-[#D4AF37] hover:bg-[#B8860B] text-[#121010] font-semibold">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le projet
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1 border-[#333333] hover:border-[#D4AF37]/50 text-[#F5F5F5]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10">
                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code source
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
                Voir tous mes projets sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
