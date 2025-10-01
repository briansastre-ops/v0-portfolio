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

[PROJECT_001] TRAVEL APP
├─ Tech Stack: HTML, CSS, JavaScript
├─ Features: Planificación de viajes, diseño responsive
├─ Status: DEPLOYED ✓
├─ Highlights: Enmaquetado de App de Campamentos
├─ URL: https://travelapp-bms.netlify.app/
└─ GitHub: github.com/briansastre-ops

[PROJECT_002] OBSIDIAN SaaS - FULL RESPONSIVE WEB APP
├─ Tech Stack: React, CSS, Vite
├─ Features: Aplicación completamente responsive
├─ Status: DEPLOYED ✓
├─ Highlights: Diseño adaptativo para todos los dispositivos
├─ URL: https://obsidian-saas.netlify.app/
└─ Experiencia fluida en mobile, tablet y desktop

[PROJECT_003] FOOD APP - PIZZERÍA CAC
├─ Tech Stack: HTML, CSS, JavaScript
├─ Features: Sistema de gestión de inventario
├─ Status: DEPLOYED ✓
├─ Highlights: Gestión de productos e informes
├─ URL: https://pizzeriacac.netlify.app/
└─ Admin panel y seguimiento eficiente

[PROJECT_004] PORTFOLIO RETRO OS (ACTUAL)
├─ Tech Stack: Next.js, TypeScript, Tailwind CSS
├─ Features: Desktop interactivo, Animaciones
├─ Status: IN DEVELOPMENT 🚧
├─ Theme: Retro computing nostalgia
└─ Experiencia única de usuario tipo OS vintage

[LEARNING PROJECTS]
├─ Múltiples landing pages responsive
├─ Componentes reutilizables en React
├─ Integraciones con APIs
└─ Aplicaciones CRUD con Python/Flask

[SOCIAL & PORTFOLIO]
├─ GitHub: github.com/briansastre-ops
├─ LinkedIn: linkedin.com/in/brian-sastre-a137452
├─ Portfolio Original: briansastre-portfolio.vercel.app
└─ Email: briansastre159@gmail.com

> ALL_PROJECTS_LOADED
> PORTFOLIO_READY_FOR_REVIEW 🚀
> OPEN_TO_NEW_OPPORTUNITIES`

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