"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-neutral-800/60 border border-neutral-700/40 text-neutral-200 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/60 hover:text-white transition-all duration-400">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6 hover:text-white transition-all duration-400">
                Let's Collaborate
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto hover:text-neutral-200 transition-all duration-400">
                Have a project in mind? I'd love to hear about it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-105 hover:shadow-xl hover:shadow-neutral-700/30 transition-all duration-500 ease-out">
                  <CardHeader>
                    <CardTitle className="text-neutral-100 text-lg hover:text-white transition-all duration-400">
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-400 ease-out">
                      <Mail className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out" />
                      <span className="text-neutral-300 group-hover:text-white transition-all duration-400">
                        sonuhp2002@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-400 ease-out">
                      <Phone className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out" />
                      <span className="text-neutral-300 group-hover:text-white transition-all duration-400">
                        +9779807665810
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-400 ease-out">
                      <MapPin className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out" />
                      <span className="text-neutral-300 group-hover:text-white transition-all duration-400">
                        Kathmandu, Nepal
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-105 hover:shadow-xl hover:shadow-neutral-700/30 transition-all duration-500 ease-out">
                  <CardHeader>
                    <CardTitle className="text-neutral-100 text-lg hover:text-white transition-all duration-400">
                      Follow Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {[
                        { icon: Github, href: "https://github.com" },
                        { icon: Linkedin, href: "https://linkedin.com" },
                        { icon: Twitter, href: "https://twitter.com" },
                      ].map(({ icon: Icon, href }, index) => (
                        <Link
                          key={href}
                          href={href}
                          className="p-2 rounded-lg bg-neutral-800/50 border border-neutral-700/40 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-500 hover:border-neutral-400/70 hover:scale-110 hover:shadow-xl hover:shadow-neutral-500/40 transition-all duration-400 ease-out group"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <Icon className="h-5 w-5 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={400}>
                <Card className="bg-neutral-900/50 border border-neutral-700/40 hover:bg-gradient-to-br hover:from-neutral-800/60 hover:to-neutral-900/60 hover:border-neutral-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-700/30 transition-all duration-500 ease-out">
                  <CardHeader>
                    <CardTitle className="text-neutral-100 text-xl hover:text-white transition-all duration-400">
                      Send Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-neutral-300 hover:text-neutral-100 transition-all duration-300"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-neutral-800/50 border-neutral-700/40 text-neutral-100 focus:border-neutral-400/70 focus:bg-neutral-700/60 hover:border-neutral-500/50 hover:bg-neutral-800/60 transition-all duration-400 ease-out"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-neutral-300 hover:text-neutral-100 transition-all duration-300"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-neutral-800/50 border-neutral-700/40 text-neutral-100 focus:border-neutral-400/70 focus:bg-neutral-700/60 hover:border-neutral-500/50 hover:bg-neutral-800/60 transition-all duration-400 ease-out"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-neutral-300 hover:text-neutral-100 transition-all duration-300"
                        >
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-neutral-800/50 border-neutral-700/40 text-neutral-100 focus:border-neutral-400/70 focus:bg-neutral-700/60 hover:border-neutral-500/50 hover:bg-neutral-800/60 transition-all duration-400 ease-out"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-neutral-300 hover:text-neutral-100 transition-all duration-300"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="bg-neutral-800/50 border-neutral-700/40 text-neutral-100 resize-none focus:border-neutral-400/70 focus:bg-neutral-700/60 hover:border-neutral-500/50 hover:bg-neutral-800/60 transition-all duration-400 ease-out"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-neutral-700 to-neutral-600 hover:from-neutral-500 hover:to-neutral-400 border border-neutral-600/40 hover:border-neutral-400/70 text-white hover:scale-105 hover:shadow-2xl hover:shadow-neutral-400/40 transition-all duration-500 ease-out group"
                      >
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-400 ease-out" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Footer */}
          <ScrollReveal delay={600}>
            <div className="mt-12 pt-8 border-t border-neutral-700/30 text-center">
              <p className="text-neutral-400 text-sm hover:text-neutral-100 hover:scale-105 transition-all duration-400 cursor-default">
                © 2025 Sonu Built with passion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
