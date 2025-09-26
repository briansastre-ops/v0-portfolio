"use client"

import { useState, useEffect } from "react"

export function ExperienceWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const experienceText = `> ACCESSING WORK_HISTORY.LOG...
> PARSING CAREER_TIMELINE...
> LOADING ACHIEVEMENTS...

╔══════════════════════════════════════════════════╗
║               PROFESSIONAL JOURNEY               ║
╚══════════════════════════════════════════════════╝

[2023-PRESENT] SENIOR FULL STACK DEVELOPER
├─ Company: TechCorp Solutions
├─ Role: Lead Frontend Architecture
├─ Team Size: 8 developers
├─ Achievements:
│  ├─ Reduced load times by 60%
│  ├─ Implemented CI/CD pipeline
│  ├─ Mentored 5 junior developers
│  └─ Led migration to Next.js 14
└─ Tech: React, Next.js, TypeScript, AWS

[2022-2023] FULL STACK DEVELOPER
├─ Company: StartupXYZ
├─ Role: Frontend & Backend Development
├─ Team Size: 4 developers
├─ Achievements:
│  ├─ Built MVP from scratch
│  ├─ Integrated payment systems
│  ├─ Scaled to 1000+ users
│  └─ Implemented real-time features
└─ Tech: React, Node.js, MongoDB, Stripe

[2021-2022] JUNIOR DEVELOPER
├─ Company: WebAgency Pro
├─ Role: Frontend Development
├─ Team Size: 12 developers
├─ Achievements:
│  ├─ Delivered 20+ client projects
│  ├─ Improved code quality standards
│  ├─ Created component library
│  └─ Reduced bug reports by 40%
└─ Tech: React, Vue.js, SASS, WordPress

[2020-2021] FREELANCE DEVELOPER
├─ Clients: 15+ small businesses
├─ Projects: 25+ websites & apps
├─ Revenue: $50,000+ generated
└─ Specialization: E-commerce & Landing Pages

> CAREER_ANALYSIS_COMPLETE
> TRAJECTORY: ASCENDING ↗️
> NEXT_LEVEL: TECH_LEAD_UNLOCKED`

  useEffect(() => {
    if (currentIndex < experienceText.length) {
      const timer = setTimeout(() => {
        setDisplayText(experienceText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 25)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, experienceText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  )
}
