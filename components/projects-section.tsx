"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const projects = [
  {
    id: 1,
    title: "Cricket E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Ipl Toss Analysis",
    description: "A web application that analyzes the toss decisions of teams in the Indian Premier League (IPL) and provides insights on the impact of toss decisions on match outcomes.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Courier Management System",
    description: "A web application that manages the courier operations of a company. It allows the admin to add, edit, and delete couriers, and the users to track the status of their shipments.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Food Ordering App",
    description: "A food ordering app that allows users to order food from their favorite restaurants. It allows the admin to add, edit, and delete restaurants and food items, and the users to view the menu and place orders.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-neutral-800/60 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white transition-all duration-400">
                Portfolio
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6 hover:text-white transition-all duration-400">
                Featured Projects
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto hover:text-neutral-200 transition-all duration-400">
                A showcase of my recent work and creative solutions
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 150}>
                <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-neutral-700/40 transition-all duration-500 ease-out overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-neutral-100 group-hover:text-white group-hover:scale-105 transition-all duration-400 ease-out">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-100 transition-all duration-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          className="bg-neutral-800/50 border border-neutral-700/40 text-neutral-300 text-xs hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white hover:scale-105 transition-all duration-400 ease-out"
                          style={{ transitionDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                     
                      <Link href={project.liveUrl || ""} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-neutral-700 to-neutral-600 hover:from-neutral-500 hover:to-neutral-400 border border-neutral-600/40 hover:border-neutral-400/70 text-white hover:scale-105 hover:shadow-xl hover:shadow-neutral-400/30 transition-all duration-400 ease-out group/btn"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-all duration-400 ease-out" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link href={project.githubUrl}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-neutral-800/40 border-neutral-700/50 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/70 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-neutral-500/30 transition-all duration-400 ease-out group/btn"
                        >
                          <Github className="h-4 w-4 group-hover/btn:scale-110 transition-all duration-400 ease-out" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
