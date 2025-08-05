"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div
            className={`w-32 h-32 mx-auto mb-8 relative transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/30 to-neutral-500/30 rounded-full blur-xl animate-pulse" />
            <Image
              src="/sonu.jpg?height=128&width=128"
              alt="Sonu"
              width={200}
              height={200}
              className="w-50 h-40 rounded-full object-cover border-2 border-neutral-700/50 hover:border-neutral-400/80 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-neutral-400/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-2 border-neutral-900 animate-pulse shadow-lg shadow-emerald-400/50" />
          </div>

          {/* Main Content */}
          <div
            className={`space-y-6 transition-all duration-1200 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-2">
              <p className="text-neutral-400 text-lg tracking-wide uppercase transition-all duration-400 hover:text-neutral-200 hover:tracking-wider">
                Full Stack Developer & Flutter Developer
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                <span className="text-neutral-100 hover:text-white transition-all duration-400 ease-out hover:scale-105 inline-block">
                  Sonu Kumar Singh
                </span>
              </h1>
            </div>

            {/* <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed transition-all duration-400 hover:text-neutral-100">
              Crafting digital experiences with precision and passion
            </p> */}
          </div>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-1200 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {["React", "JavaScript", "Node.js", "Flutter"].map((tech, index) => (
              <Badge
                key={tech}
                className="bg-neutral-800/60 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-neutral-500/30 transition-all duration-400 ease-out cursor-default"
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1200 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-to-r from-neutral-700 to-neutral-600 hover:from-neutral-500 hover:to-neutral-400 border border-neutral-600/30 hover:border-neutral-400/60 text-white transition-all duration-400 ease-out hover:scale-105 hover:shadow-xl hover:shadow-neutral-400/30 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-400 ease-out" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-neutral-800/40 border-neutral-700/50 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/70 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-neutral-500/20 transition-all duration-400 ease-out group"
              onClick={() => window.open("/documents/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-all duration-400 ease-out" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-4 pt-8 transition-all duration-1200 ease-out delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:alex@example.com" },
            ].map(({ icon: Icon, href }, index) => (
              <Link
                key={href}
                href={href}
                className="p-3 rounded-full bg-neutral-800/40 border border-neutral-700/40 text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:scale-110 hover:shadow-xl hover:shadow-neutral-500/30 transition-all duration-400 ease-out group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-all duration-400 ease-out" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-600/50 rounded-full flex justify-center hover:border-neutral-400/70 hover:scale-105 transition-all duration-400 cursor-pointer group">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse group-hover:bg-neutral-200" />
        </div>
      </div>
    </section>
  )
}
