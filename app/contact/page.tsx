"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Get In Touch</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-300">alex@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Phone</p>
                    <p className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com"
                    className="p-3 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border border-white/30 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-110"
                  >
                    <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="p-3 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border border-white/30 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="p-3 rounded-lg backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border border-white/30 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-110"
                  >
                    <Twitter className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-slate-900 dark:text-white">Available for work</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border-white/30 focus:bg-white/80 dark:focus:bg-slate-700/80 transition-all duration-200"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border-white/30 focus:bg-white/80 dark:focus:bg-slate-700/80 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border-white/30 focus:bg-white/80 dark:focus:bg-slate-700/80 transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border-white/30 focus:bg-white/80 dark:focus:bg-slate-700/80 transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
