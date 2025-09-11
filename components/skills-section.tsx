"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Cpu, Wrench, Lightbulb, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "React / Next.js", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, icon: "📘", color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-700 to-blue-500" },
    { name: "Tailwind CSS", level: 95, icon: "🎨", color: "from-cyan-500 to-blue-500" },
    { name: "Git / GitHub", level: 90, icon: "📚", color: "from-gray-600 to-gray-400" },
  ]

  const tools = ["VS Code", "Figma", "Docker", "Vercel", "Supabase", "Prisma"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({ ...prev, [skill.name]: skill.level }))
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="competences" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Mes <span className="gradient-text">compétences</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Technologies et outils que je maîtrise pour créer des solutions web performantes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-10">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Technologies principales</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift glass-effect group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-card-foreground text-lg">{skill.name}</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {animatedSkills[skill.name] || 0}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={animatedSkills[skill.name] || 0} className="h-3 bg-muted/50" />
                          <div
                            className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-10">
                <Wrench className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Outils & Workflow</h3>
              </div>

              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 mb-8 glass-effect hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-card-foreground">Outils favoris</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={tool}
                      className={`px-4 py-3 bg-muted/20 text-foreground rounded-lg text-center text-sm border border-border hover:border-primary/40 transition-all duration-300 hover-lift transform ${isVisible ? "scale-100" : "scale-0"}`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 glass-effect hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-card-foreground">Méthodologies</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Développement Agile / Scrum",
                    "Test-Driven Development (TDD)",
                    "CI/CD avec GitHub Actions",
                    "Design System & Atomic Design",
                  ].map((method, index) => (
                    <li
                      key={method}
                      className={`flex items-center gap-4 transform transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
                      style={{ transitionDelay: `${1000 + index * 150}ms` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{method}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
