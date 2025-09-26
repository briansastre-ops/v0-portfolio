"use client"

interface DesktopIconProps {
  id: string
  name: string
  icon: string
  x: number
  y: number
  onDoubleClick: () => void
}

export function DesktopIcon({ name, icon, x, y, onDoubleClick }: DesktopIconProps) {
  return (
    <div
      className="absolute cursor-pointer select-none group"
      style={{ left: x, top: y }}
      onDoubleClick={onDoubleClick}
    >
      <div className="flex flex-col items-center p-2 rounded-none hover:bg-secondary/20 transition-colors">
        <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{icon}</div>
        <div className="text-xs text-center text-foreground font-mono max-w-16 break-words">{name}</div>
      </div>
    </div>
  )
}
