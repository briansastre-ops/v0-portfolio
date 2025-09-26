"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface RetroWindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  initialX?: number
  initialY?: number
  width?: number
  height?: number
}

export function RetroWindow({
  title,
  children,
  onClose,
  initialX = 100,
  initialY = 100,
  width = 600,
  height = 400,
}: RetroWindowProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={windowRef}
      className="fixed retro-window z-10"
      style={{
        left: position.x,
        top: position.y,
        width,
        height,
        minWidth: 400,
        minHeight: 300,
      }}
    >
      {/* Title Bar */}
      <div
        className="h-8 bg-secondary flex items-center justify-between px-2 cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="text-xs font-bold text-secondary-foreground truncate">{title}</span>
        <div className="flex gap-1">
          <button className="retro-button w-6 h-6 text-xs leading-none">_</button>
          <button className="retro-button w-6 h-6 text-xs leading-none">□</button>
          <button className="retro-button w-6 h-6 text-xs leading-none hover:bg-destructive" onClick={onClose}>
            ×
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="h-full bg-card text-card-foreground p-4 overflow-auto">{children}</div>
    </div>
  )
}
