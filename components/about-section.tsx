"use client"

import { Monitor, ShoppingBag, Layers } from "lucide-react"

export function AboutSection() {
  return (
    <section id="apropos" className="py-0 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
              I build websites, ecommerce stores, and
              <br />
              web apps.
            </h2>
            <p className="text-lg text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">
              I'm providing full-featured web services including web design, development and search engine optimization. I also like to
              use Django, AlpineJs, NextJs, React, Svelte, SolidJS.
            </p>
          </div>

          {/* Grille de services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Web apps */}
            <div className="group p-8 bg-[#1A1A1A] rounded-xl border border-[#333333] hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#D4AF37]/10 rounded-full mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Monitor className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-4">Web Applications</h3>
                <p className="text-[#F5F5F5]/70 leading-relaxed">
                  I develop modern web applications using cutting-edge frameworks and technologies for optimal performance.
                </p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="group p-8 bg-[#1A1A1A] rounded-xl border border-[#333333] hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#D4AF37]/10 rounded-full mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <ShoppingBag className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-4">E-Commerce</h3>
                <p className="text-[#F5F5F5]/70 leading-relaxed">
                  I create powerful online stores with seamless user experiences and secure payment integrations.
                </p>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="group p-8 bg-[#1A1A1A] rounded-xl border border-[#333333] hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#D4AF37]/10 rounded-full mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Layers className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-4">Custom Solutions</h3>
                <p className="text-[#F5F5F5]/70 leading-relaxed">
                  I build tailored digital solutions that perfectly match your business requirements and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
