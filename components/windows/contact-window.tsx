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
├─ EMAIL: briansastre159@gmail.com
├─ LINKEDIN: linkedin.com/in/brian-sastre-a137452
├─ GITHUB: github.com/briansastre-ops
├─ PORTFOLIO: briansastre-portfolio.vercel.app
└─ LOCATION: Concepción del Uruguay, Entre Ríos, AR

[STATUS] ONLINE ● Ready for collaboration
[RESPONSE_TIME] < 24 hours
[TIMEZONE] GMT-3 (Argentina)
[LANGUAGES] Spanish (Native), English (Intermediate)

[COLLABORATION_INTERESTS]
├─ Frontend Development Projects (React/Next.js)
├─ Full Stack Opportunities
├─ Open Source Contributions  
├─ Junior/Mid-Level Positions
├─ Remote Work
└─ Learning & Growth Opportunities

[CURRENT_PROJECTS]
├─ Travel App: travelapp-bms.netlify.app
├─ Obsidian SaaS: obsidian-saas.netlify.app
├─ Pizzería CAC: pizzeriacac.netlify.app
└─ Portfolio V0: [IN DEVELOPMENT]

[PREFERRED_CONTACT]
Best way to reach me: briansastre159@gmail.com
LinkedIn for professional networking
GitHub for code review and collaboration

> CONNECTION_ESTABLISHED
> READY_TO_RECEIVE_MESSAGES
> OPEN_TO_OPPORTUNITIES ⚡

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
          <form className="space-y-3" onSubmit={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:briansastre159@gmail.com';
          }}>
            <div>
              <label className="block text-green-400 mb-1">FROM:</label>
              <input
                type="email"
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm"
                placeholder="your.email@domain.com"
                required
              />
            </div>
            <div>
              <label className="block text-green-400 mb-1">SUBJECT:</label>
              <input
                type="text"
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm"
                placeholder="Project collaboration opportunity"
                required
              />
            </div>
            <div>
              <label className="block text-green-400 mb-1">MESSAGE:</label>
              <textarea
                rows={4}
                className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono text-sm resize-none"
                placeholder="Hello Brian! I'd like to discuss..."
                required
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