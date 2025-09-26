"use client"

import { useState, useEffect } from "react"

export function ContactWindow() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)

  const contactText = `> INITIALIZING COMMUNICATION_TERMINAL...
> ESTABLISHING SECURE_CONNECTION...
> CONTACT_PROTOCOLS_LOADED

╔══════════════════════════════════════════════════╗
║            COMMUNICATION INTERFACE              ║
╚══════════════════════════════════════════════════╝

[DIRECT_CHANNELS]
├─ EMAIL: tu.email@ejemplo.com
├─ LINKEDIN: linkedin.com/in/tu-perfil
├─ GITHUB: github.com/tu-usuario
├─ TWITTER: @tu_handle
└─ PORTFOLIO: tu-sitio-web.com

[STATUS] ONLINE ● Ready for collaboration
[RESPONSE_TIME] < 24 hours
[TIMEZONE] GMT-5 (America/Bogota)
[LANGUAGES] Spanish (Native), English (Fluent)

[COLLABORATION_INTERESTS]
├─ Full Stack Development Projects
├─ Open Source Contributions  
├─ Technical Mentoring
├─ Startup Consulting
└─ Speaking Opportunities

> CONNECTION_ESTABLISHED
> READY_TO_RECEIVE_MESSAGES

[PRESS ENTER TO OPEN MESSAGE_COMPOSER]`

  useEffect(() => {
    if (currentIndex < contactText.length) {
      const timer = setTimeout(() => {
        setDisplayText(contactText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => setShowForm(true), 1000)
    }
  }, [currentIndex, contactText])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
      <div className="whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">█</span>
      </div>

      {showForm && (
        <div className="mt-4 border border-green-400 p-4">
          <div className="text-yellow-400 mb-2">[MESSAGE_COMPOSER_ACTIVE]</div>
          <form className="space-y-3">
            <div>
              <label className="block text-green-400 mb-1">FROM:</label>
              <input
                type="email"
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm"
                placeholder="your.email@domain.com"
              />
            </div>
            <div>
              <label className="block text-green-400 mb-1">SUBJECT:</label>
              <input
                type="text"
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm"
                placeholder="Project collaboration opportunity"
              />
            </div>
            <div>
              <label className="block text-green-400 mb-1">MESSAGE:</label>
              <textarea
                rows={4}
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm resize-none"
                placeholder="Hello! I'd like to discuss..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-black px-4 py-2 font-mono text-sm hover:bg-yellow-400 transition-colors"
            >
              [SEND_MESSAGE]
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
