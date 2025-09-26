"use client"

import { RetroWindow } from "./retro-window"
import { AboutWindow } from "./windows/about-window"
import { ProjectsWindow } from "./windows/projects-window"
import { SkillsWindow } from "./windows/skills-window"
import { ExperienceWindow } from "./windows/experience-window"
import { ContactWindow } from "./windows/contact-window"
import { EducationWindow } from "./windows/education-window"

interface WindowManagerProps {
  openWindows: string[]
  onClose: (windowId: string) => void
}

export function WindowManager({ openWindows, onClose }: WindowManagerProps) {
  const renderWindowContent = (windowId: string) => {
    switch (windowId) {
      case "about":
        return <AboutWindow />
      case "education":
        return <EducationWindow />
      case "projects":
        return <ProjectsWindow />
      case "skills":
        return <SkillsWindow />
      case "experience":
        return <ExperienceWindow />
      case "contact":
        return <ContactWindow />
      default:
        return <div>Window not found</div>
    }
  }

  const getWindowTitle = (windowId: string) => {
    const titles = {
      about: "ABOUT.EXE - Character Profile",
      education: "EDUCATION.LOG - Academic Records",
      projects: "PROJECTS.DIR - Quest Log",
      skills: "SKILLS.DLL - Technology Stack",
      experience: "HISTORY.LOG - Professional Timeline",
      contact: "CONTACT.EXE - Communication Terminal",
    }
    return titles[windowId as keyof typeof titles] || windowId.toUpperCase()
  }

  return (
    <>
      {openWindows.map((windowId, index) => (
        <RetroWindow
          key={windowId}
          title={getWindowTitle(windowId)}
          onClose={() => onClose(windowId)}
          initialX={100 + index * 50}
          initialY={100 + index * 50}
        >
          {renderWindowContent(windowId)}
        </RetroWindow>
      ))}
    </>
  )
}
