"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React/Next.js", "TypeScript", "Tailwind CSS", ""],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js","PostgreSQL", "MongoDB"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
  },
  {
    title: "DevOps",
    icon: Zap,
    skills: ["Docker", "AWS", "CI/CD", "Git"],
  },
]

const technologies = [
  "Flutter",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Figma",
  "Docker",
  "AWS",
  "Git",
  "GraphQL",
  "REST APIs",
  "Webpack",
  "Vite",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-neutral-800/60 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white transition-all duration-400">
                Skills & Expertise
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6 hover:text-white transition-all duration-400">
                Technical Arsenal
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto hover:text-neutral-200 transition-all duration-400">
                A comprehensive toolkit for building exceptional digital experiences
              </p>
            </div>
          </ScrollReveal>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-700/60 hover:to-neutral-800/60 hover:border-neutral-500/70 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-600/40 transition-all duration-500 ease-out group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-neutral-100">
                      <div className="p-2 rounded-lg bg-neutral-700/60 group-hover:bg-gradient-to-r group-hover:from-neutral-500 group-hover:to-neutral-400 group-hover:scale-110 transition-all duration-400 ease-out">
                        <category.icon className="h-5 w-5 text-white group-hover:scale-105 transition-all duration-300" />
                      </div>
                      <span className="text-lg group-hover:text-white group-hover:scale-105 transition-all duration-400 ease-out">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="text-sm text-neutral-300 group-hover:text-white hover:text-neutral-100 hover:scale-105 transition-all duration-400 ease-out cursor-default"
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Technologies */}
          <ScrollReveal delay={400}>
            <Card className="bg-neutral-900/40 border border-neutral-700/30 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-700/30 transition-all duration-500 ease-out">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-neutral-100 hover:text-white transition-all duration-400">
                  Technologies & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      className="bg-neutral-800/50 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/70 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-neutral-500/40 transition-all duration-400 ease-out cursor-default"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        transitionDelay: `${index * 30}ms`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
