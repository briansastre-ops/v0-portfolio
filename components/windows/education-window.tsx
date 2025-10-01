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

[2025 - PRESENTE] TECNICATURA EN PROGRAMACIÓN
├─ Institución: Universidad Tecnológica Nacional (UTN)
├─ Sede: San Rafael, Mendoza
├─ Estado: EN CURSO ⚡ (Actualidad)
├─ Especialización: Full Stack Development
└─ Enfoque: Desarrollo web moderno y arquitectura

[2024] FULL STACK PYTHON
├─ Programa: Codo a Codo 4.0
├─ Institución: Gobierno de la Ciudad de Buenos Aires
├─ Período: Abril 2024 - Julio 2024
├─ Estado: COMPLETADO ✓
├─ Tecnologías:
│  ├─ Python & Flask
│  ├─ HTML, CSS, JavaScript
│  ├─ Bases de datos
│  └─ Desarrollo de APIs RESTful
└─ Proyectos: Múltiples aplicaciones web completas

[2014-2022] TÉCNICO ELECTROMECÁNICO
├─ Institución: Escuela Técnica N° 2 "Francisco Ramírez"
├─ Ubicación: Concepción del Uruguay, Entre Ríos
├─ Período: Marzo 2014 - Diciembre 2022
├─ Estado: COMPLETADO ✓
├─ Especialización: Electromecánica
└─ Base sólida en: Lógica, matemáticas y resolución
   de problemas técnicos complejos

[ONGOING] APRENDIZAJE CONTINUO
├─ React & Next.js (Advanced)
├─ TypeScript
├─ Arquitectura Frontend moderna
├─ UI/UX Design con Tailwind CSS
└─ Desarrollo de aplicaciones responsive

> EDUCATION_SCAN_COMPLETE
> ALL_CREDENTIALS_VERIFIED ✓
> CONTINUOUS_LEARNING_MODE: ACTIVE`

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