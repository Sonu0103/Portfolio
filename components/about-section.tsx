"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Coffee, Code2 } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-neutral-800/60 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white transition-all duration-400">
                About Me
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6 hover:text-white transition-all duration-400">
                Passionate About Innovation
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto hover:text-neutral-200 transition-all duration-400">
                Building digital solutions that make a difference
              </p>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-700/30 transition-all duration-500 ease-out group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 rounded-lg bg-neutral-700/60 group-hover:bg-gradient-to-r group-hover:from-neutral-600 group-hover:to-neutral-500 group-hover:scale-105 transition-all duration-400 ease-out">
                        <Code2 className="h-5 w-5 text-neutral-200 group-hover:text-white transition-all duration-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white transition-all duration-400">
                        My Journey
                      </h3>
                    </div>

                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-100 transition-all duration-400">
                    Hello! I'm a passionate and dedicated developer with a BSc. (Hons) in Information Technology. I have 
                    strong hands-on experience in frontend, backend, and mobile application development. 
                    Over the years, I’ve built and contributed to various web and mobile projects, turning ideas 
                    into functional and visually appealing applications.
                    </p>

                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-100 transition-all duration-400">
                    I enjoy working across the full stack — from crafting intuitive user interfaces with modern frontend technologies, 
                    to designing robust backend systems and creating cross-platform mobile apps using Flutter. 
                    My goal is to build scalable, secure, and impactful digital solutions that solve real-world problems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Projects", value: "5+", icon: Code2 },
                { label: "Experience", value: "Recently Graduated", icon: Calendar },
                { label: "Location", value: "Kathmanu", icon: MapPin },
                // { label: "Coffee Cups", value: "∞", icon: Coffee },
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={300 + index * 100}>
                  <Card className="bg-neutral-900/40 border border-neutral-700/30 hover:bg-gradient-to-br hover:from-neutral-700/50 hover:to-neutral-800/50 hover:border-neutral-500/60 hover:scale-105 hover:shadow-xl hover:shadow-neutral-600/30 transition-all duration-500 ease-out group cursor-default">
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-3">
                        <stat.icon className="h-6 w-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out" />
                      </div>
                      <div className="text-xl font-bold text-neutral-100 mb-1 group-hover:text-white group-hover:scale-105 transition-all duration-400 ease-out">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-all duration-400">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
