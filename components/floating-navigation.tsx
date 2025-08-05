"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

export function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id)
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <div className="backdrop-blur-xl bg-neutral-900/80 border border-neutral-700/60 rounded-full px-6 py-3 shadow-2xl shadow-neutral-900/50">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-400 ease-out group",
                  isActive
                    ? "text-white bg-gradient-to-r from-neutral-600 to-neutral-500 shadow-lg shadow-neutral-600/30"
                    : "text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-600 hover:shadow-lg hover:shadow-neutral-700/30",
                )}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 transition-all duration-300 ease-out group-hover:scale-110" />
                  <span className="hidden sm:inline transition-all duration-300">{item.label}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
