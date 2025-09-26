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
├─ React.js         ██████████ 95% [MASTERED]
├─ Next.js          █████████░ 90% [EXPERT]
├─ TypeScript       ████████░░ 85% [ADVANCED]
├─ Tailwind CSS     ██████████ 98% [MASTERED]
├─ Framer Motion    ███████░░░ 75% [PROFICIENT]
└─ Three.js         █████░░░░░ 60% [LEARNING]

[BACKEND POWERS]
├─ Node.js          █████████░ 88% [EXPERT]
├─ Express.js       ████████░░ 82% [ADVANCED]
├─ Python           ███████░░░ 70% [PROFICIENT]
├─ PostgreSQL       ████████░░ 80% [ADVANCED]
├─ MongoDB          ███████░░░ 75% [PROFICIENT]
└─ Redis            ██████░░░░ 65% [LEARNING]

[DEPLOYMENT TOOLS]
├─ Vercel           ██████████ 95% [MASTERED]
├─ AWS              ███████░░░ 70% [PROFICIENT]
├─ Docker           ██████░░░░ 68% [LEARNING]
├─ GitHub Actions   ████████░░ 80% [ADVANCED]
└─ Supabase         █████████░ 85% [EXPERT]

[SPECIAL ABILITIES]
├─ UI/UX Design     ████████░░ 82%
├─ API Development  █████████░ 88%
├─ Performance Opt. ███████░░░ 75%
└─ Team Leadership  ██████░░░░ 68%

> SKILL_SCAN_COMPLETE
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
