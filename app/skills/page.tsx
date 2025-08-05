import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Palette, Database, Globe, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Prototyping", level: 90 },
      { name: "User Research", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
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

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Skills & Expertise</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-white/30 dark:bg-slate-700/30" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <Card className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-slate-900 dark:text-white">Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="backdrop-blur-sm bg-white/60 dark:bg-slate-700/60 border border-white/30 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AWS Certified Developer", year: "2023", issuer: "Amazon Web Services" },
              { title: "Google UX Design Certificate", year: "2022", issuer: "Google" },
              { title: "React Developer Certification", year: "2023", issuer: "Meta" },
            ].map((cert, index) => (
              <Card
                key={cert.title}
                className="backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.issuer} • {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
