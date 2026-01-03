"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Cpu, Wrench, Lightbulb, Star } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "React / Next.js", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, icon: "📘", color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-700 to-blue-500" },
    { name: "Tailwind CSS", level: 95, icon: "🎨", color: "from-cyan-500 to-blue-500" },
    { name: "Git / GitHub", level: 90, icon: "📚", color: "from-gray-600 to-gray-400" },
  ]

  const tools = ["VS Code", "Figma", "Docker", "Vercel", "Supabase", "Prisma"]

  return (
    <section id="competences" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Mes <span className="gradient-text">compétences</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Technologies et outils que je maîtrise pour créer des solutions web performantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Technologies principales</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <Card key={skill.name} className="p-6 bg-card border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-card-foreground text-lg">{skill.name}</span>
                          <Badge variant="secondary" className="bg-muted/20 text-foreground border-border">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress value={skill.level} className="h-3" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10">
                <Wrench className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Outils & Technologies</h3>
              </div>
              <div className="grid gap-4 mb-8">
                {tools.map((tool) => (
                  <Card key={tool} className="p-4 bg-card border-border">
                    <span className="font-medium text-card-foreground">{tool}</span>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Toujours en apprentissage</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Le développement web évolue constamment. Je reste à jour avec les dernières technologies et
                      meilleures pratiques pour offrir des solutions modernes et efficaces.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
