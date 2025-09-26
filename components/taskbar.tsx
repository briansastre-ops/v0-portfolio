"use client"

import { useState, useEffect } from "react"

interface TaskbarProps {
  openWindows: string[]
  onWindowClick: (windowId: string) => void
}

export function Taskbar({ openWindows, onWindowClick }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-secondary border-t-2 border-border flex items-center justify-between px-2">
      {/* Start Button */}
      <button className="retro-button h-8 px-4 text-xs font-bold" onClick={() => onWindowClick("start")}>
        START
      </button>

      {/* Open Windows */}
      <div className="flex-1 flex items-center gap-1 mx-2">
        {openWindows.map((windowId) => (
          <button
            key={windowId}
            className="retro-button h-8 px-3 text-xs truncate max-w-32"
            onClick={() => onWindowClick(windowId)}
          >
            {windowId.toUpperCase()}
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2">
        <div className="text-xs font-mono text-foreground bg-card px-2 py-1 border border-border">{currentTime}</div>
      </div>
    </div>
  )
}
