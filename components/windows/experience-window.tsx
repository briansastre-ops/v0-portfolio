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

[2025-PRESENTE] ESTUDIANTE & DESARROLLADOR
├─ Institución: UTN San Rafael
├─ Role: Full Stack Developer en formación
├─ Focus: Desarrollo web moderno
├─ Activities:
│  ├─ Aprendizaje intensivo de React & TypeScript
│  ├─ Desarrollo de proyectos personales
│  ├─ Participación en comunidad de developers
│  └─ Construcción de portfolio profesional
└─ Tech: React, Next.js, TypeScript, Python, Flask

[2024] BOOTCAMP FULL STACK PYTHON
├─ Programa: Codo a Codo 4.0
├─ Duration: 4 meses (Abril - Julio)
├─ Role: Estudiante Full Stack
├─ Achievements:
│  ├─ Desarrollo de aplicaciones web completas
│  ├─ Dominio de Python & Flask
│  ├─ Creación de APIs RESTful
│  ├─ Implementación de bases de datos
│  └─ Proyectos con frontend y backend integrados
└─ Tech: Python, Flask, HTML, CSS, JavaScript, SQL

[2014-2022] FORMACIÓN TÉCNICA
├─ Role: Estudiante Técnico Electromecánico
├─ Institution: Escuela Técnica N° 2 "Francisco Ramírez"
├─ Skills Developed:
│  ├─ Resolución de problemas complejos
│  ├─ Pensamiento lógico y analítico
│  ├─ Trabajo en equipo en proyectos técnicos
│  └─ Fundamentos de electricidad y mecánica
└─ Base sólida para la programación

[PROYECTOS FREELANCE]
├─ Travel App - Aplicación de viajes
├─ Obsidian SaaS - Web app responsive
├─ Pizzería CAC - Sistema de gestión
└─ Múltiples landing pages y componentes

[HABILIDADES PROFESIONALES]
├─ Desarrollo Frontend avanzado
├─ Integración de APIs
├─ Diseño responsive y adaptativo
├─ Versionado con Git/GitHub
├─ Deployment en Vercel/Netlify
└─ Debugging y optimización de código

> CAREER_ANALYSIS_COMPLETE
> TRAJECTORY: ASCENDING ↗️
> STATUS: READY_FOR_PROFESSIONAL_OPPORTUNITIES
> SEEKING: JUNIOR/MID-LEVEL_FRONTEND_POSITION`

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