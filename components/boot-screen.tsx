
"use client"

import { useState, useEffect } from "react"

const bootMessages = [
  "BRIAN SASTRE SYSTEM v1.0",
  "Initializing portfolio modules...",
  "Loading developer profile...",
  "Mounting project directories...",
  "Establishing skill database...",
  "PORTFOLIO.EXE ready",
  "Welcome, visitor!",
]

export function BootScreen() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentMessage >= bootMessages.length) return

    const message = bootMessages[currentMessage]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= message.length) {
        setDisplayedText(message.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        setTimeout(() => {
          setCurrentMessage((prev) => prev + 1)
          setDisplayedText("")
          setIsTyping(true)
        }, 300)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentMessage])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8 font-mono">
      <div className="w-full max-w-2xl">
        {/* ASCII Logo centrado */}
        <div className="mb-8 flex justify-center">
          <pre className="text-primary text-xs sm:text-sm leading-tight">
            {`
██████╗ ██████╗ ██╗ █████╗ ███╗   ██╗
██╔══██╗██╔══██╗██║██╔══██╗████╗  ██║
██████╔╝██████╔╝██║███████║██╔██╗ ██║
██╔══██╗██╔══██╗██║██╔══██║██║╚██╗██║
██████╔╝██║  ██║██║██║  ██║██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

███████╗ █████╗ ███████╗████████╗██████╗ ███████╗
██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔════╝
███████╗███████║███████╗   ██║   ██████╔╝█████╗  
╚════██║██╔══██║╚════██║   ██║   ██╔══██╗██╔══╝  
███████║██║  ██║███████║   ██║   ██║  ██║███████╗
╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
`}
          </pre>
        </div>

        {/* Boot messages */}
        <div className="space-y-2">
          {bootMessages.slice(0, currentMessage).map((message, index) => (
            <div key={index} className="text-muted-foreground">
              {">"} {message} <span className="text-primary">[OK]</span>
            </div>
          ))}

          {currentMessage < bootMessages.length && (
            <div className="text-foreground">
              {">"} {displayedText}
              {isTyping && <span className="animate-pulse">_</span>}
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-8">
          <div className="w-full bg-secondary h-2 rounded-none">
            <div
              className="bg-primary h-full transition-all duration-300 ease-out"
              style={{ width: `${(currentMessage / bootMessages.length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Loading... {Math.round((currentMessage / bootMessages.length) * 100)}%
          </div>
        </div>
      </div>
    </div>
  )
}