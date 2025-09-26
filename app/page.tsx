"use client"

import { useState, useEffect } from "react"
import { BootScreen } from "@/components/boot-screen"
import { Desktop } from "@/components/desktop"

export default function Home() {
  const [isBooted, setIsBooted] = useState(false)
  const [showDesktop, setShowDesktop] = useState(false)

  useEffect(() => {
    // Boot sequence timing
    const bootTimer = setTimeout(() => {
      setIsBooted(true)
      setTimeout(() => setShowDesktop(true), 500)
    }, 4000)

    return () => clearTimeout(bootTimer)
  }, [])

  if (!isBooted) {
    return <BootScreen />
  }

  return <main className="min-h-screen bg-background text-foreground">{showDesktop && <Desktop />}</main>
}
