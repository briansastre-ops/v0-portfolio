"use client"

import { useState, useEffect } from "react"

export function ProjectsWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const projectsText = `> LOADING PROJECT_PORTFOLIO.EXE...
> SCANNING GITHUB_REPOSITORIES...
> COMPILING ACHIEVEMENT_LIST...

╔══════════════════════════════════════════════════╗
║                 QUEST COMPLETED                  ║
╚══════════════════════════════════════════════════╝

[PROJECT_001] E-COMMERCE PLATFORM
├─ Tech Stack: Next.js, Stripe, Supabase
├─ Features: Payment processing, Admin panel
├─ Status: DEPLOYED ✓
├─ Users: 500+ active
└─ GitHub: github.com/usuario/ecommerce-app

[PROJECT_002] TASK MANAGEMENT APP
├─ Tech Stack: React, Node.js, MongoDB
├─ Features: Real-time collaboration, Analytics
├─ Status: DEPLOYED ✓
├─ Teams: 50+ organizations
└─ GitHub: github.com/usuario/task-manager

[PROJECT_003] AI CHAT ASSISTANT
├─ Tech Stack: Next.js, OpenAI API, Vercel AI
├─ Features: Context awareness, File uploads
├─ Status: BETA TESTING
├─ Conversations: 10,000+
└─ GitHub: github.com/usuario/ai-assistant

[PROJECT_004] PORTFOLIO RETRO OS
├─ Tech Stack: Next.js, Tailwind, Framer Motion
├─ Features: Interactive desktop, Animations
├─ Status: CURRENT PROJECT
├─ Theme: Retro computing nostalgia
└─ GitHub: github.com/usuario/retro-portfolio

[SIDE_QUESTS]
├─ Open Source Contributions: 25+
├─ Technical Blog Posts: 15
├─ Community Workshops: 8
└─ Mentoring Sessions: 50+ hours

> ALL_PROJECTS_LOADED
> PORTFOLIO_READY_FOR_REVIEW 🚀`

  useEffect(() => {
    if (currentIndex < projectsText.length) {
      const timer = setTimeout(() => {
        setDisplayText(projectsText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 25)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, projectsText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  )
}
