"use client"

import { useState, useEffect } from "react"

export function EducationWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const educationText = `> ACCESSING EDUCATION_RECORDS.DB...
> LOADING ACADEMIC_HISTORY...
> DECRYPTING CERTIFICATES...

╔══════════════════════════════════════════════════╗
║                EDUCATION SYSTEM                  ║
╚══════════════════════════════════════════════════╝

[2020-2024] UNIVERSIDAD/INSTITUTO
├─ Carrera: Ingeniería en Sistemas / Desarrollo Web
├─ Estado: COMPLETADO ✓
├─ GPA: 8.5/10
└─ Especialización: Full Stack Development

[2023] CERTIFICACIONES TÉCNICAS
├─ React Advanced Patterns
├─ Node.js & Express Mastery  
├─ Database Design & Optimization
└─ Cloud Architecture (AWS/Vercel)

[2022] BOOTCAMP INTENSIVO
├─ Programa: Full Stack JavaScript
├─ Duración: 6 meses
├─ Proyectos: 12 aplicaciones completas
└─ Ranking: Top 5% de la clase

[ONGOING] APRENDIZAJE CONTINUO
├─ Next.js 15 & React 19
├─ TypeScript Advanced
├─ AI/ML Integration
└─ Web3 & Blockchain

> EDUCATION_SCAN_COMPLETE
> ALL_CREDENTIALS_VERIFIED ✓`

  useEffect(() => {
    if (currentIndex < educationText.length) {
      const timer = setTimeout(() => {
        setDisplayText(educationText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 25)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, educationText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  )
}
