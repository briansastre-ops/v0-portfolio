"use client"

import { useState, useEffect } from "react"

const bootMessages = [
  "SYSTEM BOOT v2.1.0",
  "Loading kernel modules...",
  "Initializing hardware...",
  "Starting network services...",
  "Loading user profile...",
  "PORTFOLIO.EXE ready",
  "Welcome to RetroOS",
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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-start p-8 font-mono">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <pre className="text-primary text-sm">
            {`
██████╗ ███████╗████████╗██████╗  ██████╗  ██████╗ ███████╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗██╔═══██╗██╔════╝
██████╔╝█████╗     ██║   ██████╔╝██║   ██║██║   ██║███████╗
██╔══██╗██╔══╝     ██║   ██╔══██╗██║   ██║██║   ██║╚════██║
██║  ██║███████╗   ██║   ██║  ██║╚██████╔╝╚██████╔╝███████║
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝
`}
          </pre>
        </div>

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
