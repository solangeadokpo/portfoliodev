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
    <section id="accueil" className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      
      {/* Lignes de fond esthétiques */}
  

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-[-8rem]">
          
          {/* Contenu texte - À gauche */}
          <div className="space-y-6 max-w-lg">
            
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-2">
                Hi, I'm Peace. 👋
              </h1>
              <h2 className="text-xl md:text-2xl text-[#F5F5F5]/80 font-medium">
                I design and build elegant digital solutions.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-[#F5F5F5]/70 leading-relaxed">
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Éléments décoratifs - À droite */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            <div className="relative w-full h-96">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-[#D4AF37]/60 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[#F5F5F5]/20 border-2 border-[#F5F5F5]/40 rounded-full shadow-lg shadow-[#F5F5F5]/10"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/30"></div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path d="M120 280 Q200 200 280 160" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M300 140 Q350 180 320 240" stroke="#F5F5F5" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M100 260 Q160 240 220 200" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.4" />
              </svg>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-[#F5F5F5]/80 rounded-full"></div>
              <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#D4AF37]/70 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-[#D4AF37] rotate-45 opacity-60"></div>
              <div className="absolute top-1/2 right-1/6 w-4 h-4 border border-[#F5F5F5]/30 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/5 via-transparent to-transparent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
