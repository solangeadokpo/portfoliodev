"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Linkedin, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Wavy Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-64 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="none">
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i}
              d={`M -200 ${100 + i * 10} Q 600 ${100 + i * 10 - (i % 2 === 0 ? 40 : -40)} 1400 ${100 + i * 10}`}
              stroke="url(#gold-gradient)"
              strokeWidth="1"
              fill="none"
            />
          ))}
          <defs>
            <linearGradient id="gold-gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-4">Contact Us</h2>
            <p className="text-lg text-[#F5F5F5]/70 max-w-2xl mx-auto">
              Let's start a conversation. I'm here to help you bring your digital projects to life.
            </p>
          </div>

          {/* "GET IN TOUCH" Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-1 flex items-center">
              <div>
                <p className="text-[#D4AF37] font-semibold mb-2">// Contact us</p>
                <h3 className="text-4xl font-bold text-[#F5F5F5]">Get in Touch</h3>
              </div>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              {/* GitHub Card */}
              <Card className="p-6 bg-[#1A1A1A] border border-[#333333] hover:border-[#D4AF37]/50 transition-colors">
                <Github className="w-7 h-7 text-[#D4AF37] mb-4" />
                <h4 className="font-semibold text-[#F5F5F5] mb-1">GitHub</h4>
                <a href="https://github.com/solangeadokpo" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F5F5F5]/70 hover:text-[#D4AF37] flex items-center gap-1">
                  Profile <ArrowRight className="w-3 h-3" />
                </a>
              </Card>
              {/* Email Card */}
              <Card className="p-6 bg-[#1A1A1A] border border-[#333333] hover:border-[#D4AF37]/50 transition-colors">
                <Mail className="w-7 h-7 text-[#D4AF37] mb-4" />
                <h4 className="font-semibold text-[#F5F5F5] mb-1">Email</h4>
                <a
                  href="mailto:ahouefa05@gmail.com"
                  className="text-sm text-[#F5F5F5]/70 hover:text-[#D4AF37] flex items-center gap-1"
                >
                  Send Email <ArrowRight className="w-3 h-3" />
                </a>
              </Card>
              {/* LinkedIn Card */}
              <Card className="p-6 bg-[#1A1A1A] border border-[#333333] hover:border-[#D4AF37]/50 transition-colors">
                <Linkedin className="w-7 h-7 text-[#D4AF37] mb-4" />
                <h4 className="font-semibold text-[#F5F5F5] mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/peace-solange-houéfa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F5F5F5]/70 hover:text-[#D4AF37] flex items-center gap-1">
                  Connect <ArrowRight className="w-3 h-3" />
                </a>
              </Card>
            </div>
          </div>

          {/* Form Section */}
          <Card className="p-8 bg-[#1A1A1A] border border-[#333333]">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#121010] border-[#333333] text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                    placeholder="What's your Name?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#121010] border-[#333333] text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#121010] border-[#333333] text-[#F5F5F5] min-h-32 placeholder:text-[#F5F5F5]/50"
                    placeholder="Message"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121010] font-semibold px-8"
                >
                  Send Message
                </Button>
              </form>
              {/* Right side text */}
              <div className="flex flex-col justify-center">
                <p className="text-[#D4AF37] font-semibold mb-2">Have any query?</p>
                <h3 className="text-3xl font-bold text-[#F5F5F5] mb-4">CONTACT US</h3>
                <p className="text-[#F5F5F5]/70">
                  There is necessary for more than just name for evaluation so problem, frequently, organization may be.
                </p>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center mt-24 pt-12 border-t border-[#333333]">
            <h3 className="text-4xl font-bold text-[#F5F5F5] mb-4">Let's talk</h3>
            <p className="text-[#F5F5F5]/70">© {new Date().getFullYear()} Peace. All Rights Reserved.</p>
            <div className="text-sm text-[#F5F5F5]/50 mt-2">
              <span>Privacy Policy</span> | <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
