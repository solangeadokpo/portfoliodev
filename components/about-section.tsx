"use client"

import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, User, Award, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section
      ref={sectionRef}
      id="apropos"
      className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <User className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                À propos de <span className="gradient-text">moi</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Passionné par le développement web, je transforme des idées en solutions digitales innovantes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Avec plus de <span className="text-primary font-semibold">5 ans d'expérience</span> dans le
                  développement web, je me spécialise dans la création d'applications modernes et performantes. Mon
                  expertise couvre l'ensemble du stack technologique, du front-end au back-end.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Je suis constamment à la recherche de nouvelles technologies et de meilleures pratiques pour offrir
                  des solutions optimales à mes clients. Mon approche combine{" "}
                  <span className="text-primary font-semibold">créativité</span>,
                  <span className="text-primary font-semibold"> performance</span> et expérience utilisateur
                  exceptionnelle.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Stack technique principal
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 glass-effect hover-lift transform transition-all duration-300 ${isVisible ? "scale-100" : "scale-0"}`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction client</div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift glass-effect group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground flex items-center gap-2">
                      Code de qualité
                      <Award className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      J'écris du code propre, maintenable et bien documenté pour assurer la pérennité des projets.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift glass-effect group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground flex items-center gap-2">
                      Design moderne
                      <Target className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Je crée des interfaces élégantes et intuitives qui offrent une expérience utilisateur optimale.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift glass-effect group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">Performance optimale</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      J'optimise chaque aspect pour garantir des applications rapides et efficaces.
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
