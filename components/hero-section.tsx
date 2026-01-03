"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative min-h-[70vh] flex items-center pt-8 overflow-hidden">
      
      {/* Lignes de fond esthétiques */}
  

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-0">
          
          {/* Contenu texte - À gauche */}
          <div className="space-y-4 max-w-lg ml-12">
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-2">
                Hi, I'm Peace. 👋
              </h1>
              <h2 className="text-sm md:text-base text-[#F5F5F5]/80 font-medium">
                I design and build elegant digital solutions.
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm text-[#F5F5F5]/70 leading-relaxed">
                Passionate about creating beautiful, functional web experiences that solve real problems.
              </p>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121010] px-6 py-2 font-medium"
              >
                Contact
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://github.com/solangeadokpo" target="_blank" rel="noopener noreferrer" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/peace-solange-houéfa" target="_blank" rel="noopener noreferrer" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ahouefa05@gmail.com" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Éléments décoratifs - À droite */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Illustration minimaliste et professionnelle */}
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                  </filter>
                </defs>
                
                {/* Fond subtil avec accent */}
                <circle cx="320" cy="80" r="60" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.2" />
                
                {/* Courbe principale fluide - très lisse */}
                <path 
                  d="M 50 200 Q 100 100 200 120 T 380 180" 
                  stroke="url(#curveGrad)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Deuxième courbe */}
                <path 
                  d="M 40 280 Q 120 200 240 240 T 400 260" 
                  stroke="#D4AF37" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.6"
                />
                
                {/* Éléments géométriques principaux */}
                {/* Cercle principal - contour uniquement */}
                <circle cx="300" cy="100" r="45" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.8" />
                
                {/* Petit cercle plein - accent */}
                <circle cx="200" cy="160" r="20" fill="#D4AF37" opacity="0.75" />
                
                {/* Deuxième cercle plein */}
                <circle cx="280" cy="200" r="18" fill="#F5F5F5" opacity="0.6" />
                
                {/* Arc/Demi-cercle sophistiqué */}
                <path 
                  d="M 80 300 A 50 50 0 0 1 150 270" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="2.5" 
                  opacity="0.7"
                  strokeLinecap="round"
                />
                
                {/* Petits accents minimalistes */}
                <line x1="100" y1="50" x2="130" y2="80" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
                <line x1="320" y1="280" x2="340" y2="260" stroke="#F5F5F5" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
                
                {/* Points discrets */}
                <circle cx="75" cy="60" r="2.5" fill="#D4AF37" opacity="0.6" />
                <circle cx="360" cy="320" r="2" fill="#F5F5F5" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
