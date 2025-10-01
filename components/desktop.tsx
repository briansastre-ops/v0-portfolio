
"use client"

import { useState } from "react"
import { Taskbar } from "./taskbar"
import { WindowManager } from "./window-manager"
import { DesktopIcon } from "./desktop-icon"
import { DesktopWallpaper } from "./desktop-wallpaper"

const desktopIcons = [
  { id: "about", name: "ABOUT.EXE", icon: "👤", x: 50, y: 50 },
  { id: "education", name: "EDUCATION.LOG", icon: "🎓", x: 50, y: 150 },
  { id: "skills", name: "SKILLS.DLL", icon: "⚡", x: 50, y: 250 },
  { id: "projects", name: "PROJECTS.DIR", icon: "📁", x: 50, y: 350 },
  { id: "experience", name: "HISTORY.LOG", icon: "📜", x: 50, y: 450 },
  { id: "contact", name: "CONTACT.EXE", icon: "📧", x: 50, y: 550 },
  { id: "snake", name: "SNAKE.EXE", icon: "🐍", x: 50, y: 650 }, // NUEVO
]

export function Desktop() {
  const [openWindows, setOpenWindows] = useState<string[]>([])

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows((prev) => [...prev, windowId])
    }
  }

  const closeWindow = (windowId: string) => {
    setOpenWindows((prev) => prev.filter((id) => id !== windowId))
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Desktop Wallpaper */}
      <DesktopWallpaper />

      {/* Desktop Icons */}
      {desktopIcons.map((icon) => (
        <DesktopIcon key={icon.id} {...icon} onDoubleClick={() => openWindow(icon.id)} />
      ))}

      {/* Window Manager */}
      <WindowManager openWindows={openWindows} onClose={closeWindow} />

      {/* Taskbar */}
      <Taskbar openWindows={openWindows} onWindowClick={openWindow} />
    </div>
  )
}