"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="particle" style={{ top: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 glass-effect hover-lift">
              <Sparkles className="w-4 h-4" />
              Salut, je suis développeur
            </span>
          </div>

          <div
            className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance">
              <span className="block text-foreground mb-2">Développeur</span>
              <span className="block gradient-text glow-effect">Full-Stack</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Code className="w-8 h-8" />
              <span className="text-lg font-mono">{"< créateur d'expériences />"}</span>
            </div>
          </div>

          <div
            className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Je transforme vos idées en <span className="text-primary font-semibold">applications web modernes</span>{" "}
              et performantes avec React, Next.js et les dernières technologies
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projets")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full pulse-glow hover-lift group"
            >
              <span className="flex items-center gap-2">
                Découvrir mes projets
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full glass-effect hover-lift"
            >
              Collaborons ensemble
            </Button>
          </div>

          <div
            className={`flex justify-center gap-8 mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-card border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 magnetic-hover"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-card border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 magnetic-hover"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </div>
            </a>
            <a
              href="mailto:contact@example.com"
              className="group relative w-14 h-14 bg-card border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 magnetic-hover"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </div>
            </a>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <button
              onClick={() => scrollToSection("apropos")}
              className="group flex flex-col items-center gap-2 animate-bounce hover:animate-none"
            >
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Découvrir plus
              </span>
              <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-all">
                <ArrowDown className="w-4 h-4 text-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
