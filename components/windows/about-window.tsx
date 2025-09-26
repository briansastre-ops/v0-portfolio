"use client"

import { useState, useEffect } from "react"

export function AboutWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const aboutText = `> LOADING PERSONAL_DATA.DAT...
> INITIALIZING CHARACTER PROFILE...
> STATUS: ONLINE

╔══════════════════════════════════════════════════╗
║                CHARACTER PROFILE                 ║
╚══════════════════════════════════════════════════╝

NOMBRE: [TU_NOMBRE]
CLASE: Full Stack Developer
NIVEL: Senior
UBICACION: [TU_CIUDAD]
ESTADO: Available for new quests

DESCRIPCION:
Desarrollador apasionado por crear experiencias digitales 
innovadoras. Especializado en tecnologías web modernas 
con enfoque en soluciones escalables y user experience.

Me encanta transformar ideas complejas en interfaces 
intuitivas y sistemas robustos. Siempre en búsqueda de 
nuevos desafíos técnicos y oportunidades de aprendizaje.

ATRIBUTOS PRINCIPALES:
├─ Creatividad: ████████░░ 85%
├─ Problem Solving: ██████████ 95%
├─ Team Collaboration: █████████░ 90%
├─ Learning Agility: ████████░░ 88%
├─ Code Quality: █████████░ 92%
└─ Communication: ███████░░░ 78%

MISION ACTUAL:
Construir aplicaciones que impacten positivamente 
en la vida de las personas mientras continúo 
evolucionando mis habilidades técnicas y liderando 
equipos hacia la excelencia.

FILOSOFIA DE CODIGO:
"Clean code is not written by following a set of rules.
Clean code is written by programmers who care."

> PROFILE_LOADED_SUCCESSFULLY
> READY_FOR_INTERACTION ⚡`

  useEffect(() => {
    if (currentIndex < aboutText.length) {
      const timer = setTimeout(() => {
        setDisplayText(aboutText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, aboutText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  )
}
