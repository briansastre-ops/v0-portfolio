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

NOMBRE: Brian Sastre
CLASE: Técnico Electromecánico & Full Stack Developer
NIVEL: Junior/Mid-Level
UBICACION: Concepción del Uruguay, Entre Ríos, Argentina
ESTADO: Available for new quests

DESCRIPCION:
Técnico Electromecánico con un fuerte interés en el 
Front-End y una sólida formación en programación. 
Proactivo, creativo y orientado a resultados, con 
habilidades avanzadas en React y TypeScript.

Apasionado por crear experiencias digitales innovadoras
y transformar ideas complejas en interfaces intuitivas.
Siempre en búsqueda de nuevos desafíos técnicos y 
oportunidades de aprendizaje continuo.

ATRIBUTOS PRINCIPALES:
├─ Creatividad: ████████░░ 85%
├─ Problem Solving: ████████░░ 88%
├─ Team Collaboration: ████████░░ 82%
├─ Learning Agility: █████████░ 90%
├─ Code Quality: ████████░░ 80%
└─ Communication: ████████░░ 85%

MISION ACTUAL:
Desarrollar aplicaciones web modernas que impacten 
positivamente mientras continúo evolucionando mis 
habilidades técnicas en el ecosistema JavaScript/React.

FILOSOFIA DE CODIGO:
"La mejor manera de predecir el futuro es crearlo"
- Enfoque en código limpio y mantenible
- Aprendizaje constante y adaptación

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