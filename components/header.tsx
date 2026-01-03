"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("en")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121010]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10 transition-all duration-300">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center">
          {/* Logo - À gauche */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <Code2 className="w-7 h-7 text-[#121010]" />
              </div>
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            {/* <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#D4AF37] tracking-tight">Scriptia_</span>
              <span className="text-sm text-[#F5F5F5]/70 -mt-1 tracking-wide">Creative Developer</span>
            </div> */}
          </div>

          {/* Spacer pour pousser tout à droite */}
          <div className="flex-1"></div>

          {/* Navigation - Complètement à droite */}
          <div className="flex items-center gap-4">
            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button Contact */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-[#D4AF37] hover:bg-[#B8860B] text-[#121010] font-semibold px-6 py-2 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 transition-all duration-200"
            >
              Contact
            </Button>

            {/* Theme Toggle & Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              {/* Language Toggle */}
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="icon"
                className="text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold"
              >
                {language === "en" ? "FR" : "EN"}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="pt-4 pb-4">
            <div className="flex flex-col gap-1 bg-[#121010]/60 backdrop-blur-md rounded-xl border border-[#D4AF37]/20 p-4 mt-4">
              {[...navItems].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-[#F5F5F5]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
