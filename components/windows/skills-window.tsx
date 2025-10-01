"use client"

import { useState, useEffect } from "react"

export function SkillsWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const skillsText = `> SCANNING TECH_STACK.SYS...
> ANALYZING SKILL_LEVELS...
> GENERATING ABILITY_TREE...

╔══════════════════════════════════════════════════╗
║              TECHNOLOGY STACK v2.0               ║
╚══════════════════════════════════════════════════╝

[FRONTEND ARSENAL]
├─ React.js         █████████░ 90% [ADVANCED]
├─ TypeScript       ████████░░ 85% [ADVANCED]
├─ JavaScript       █████████░ 90% [ADVANCED]
├─ Next.js          ████████░░ 80% [PROFICIENT]
├─ HTML5            ██████████ 95% [MASTERED]
├─ CSS3             █████████░ 90% [ADVANCED]
├─ Tailwind CSS     ████████░░ 85% [ADVANCED]
└─ Vite             ████████░░ 80% [PROFICIENT]

[BACKEND POWERS]
├─ Python           ████████░░ 80% [ADVANCED]
├─ Flask            ███████░░░ 75% [PROFICIENT]
├─ Node.js          ███████░░░ 70% [PROFICIENT]
├─ APIs RESTful     ████████░░ 80% [ADVANCED]
└─ PostgreSQL       ██████░░░░ 65% [LEARNING]

[DEPLOYMENT & TOOLS]
├─ Git & GitHub     █████████░ 88% [ADVANCED]
├─ Vercel           ████████░░ 82% [ADVANCED]
├─ Netlify          ████████░░ 80% [ADVANCED]
├─ VS Code          ██████████ 95% [MASTERED]
└─ GitHub Actions   ██████░░░░ 65% [LEARNING]

[DESIGN & UI/UX]
├─ Responsive Design ████████░░ 85%
├─ UI/UX Principles  ████████░░ 80%
├─ Figma             ███████░░░ 70%
└─ Animations        ███████░░░ 75%

[SOFT SKILLS]
├─ Comunicación efectiva    █████████░ 88%
├─ Trabajo en equipo        ████████░░ 85%
├─ Adaptabilidad            █████████░ 90%
├─ Aprendizaje rápido       █████████░ 92%
├─ Resolución de problemas  ████████░░ 87%
└─ Gestión del tiempo       ████████░░ 80%

> SKILL_SCAN_COMPLETE
> SPECIALIZATION: FRONTEND_DEVELOPMENT
> READY_FOR_DEPLOYMENT ⚡`

  useEffect(() => {
    if (currentIndex < skillsText.length) {
      const timer = setTimeout(() => {
        setDisplayText(skillsText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 20)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, skillsText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  )
}