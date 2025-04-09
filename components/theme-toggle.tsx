"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-12 h-6 bg-muted border-2 border-muted-foreground"></div>
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-8 w-16 items-center border-4 ${
        isDark ? "bg-primary border-primary/70" : "bg-muted border-muted-foreground"
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`${
          isDark ? "translate-x-8" : "translate-x-1"
        } inline-block h-4 w-4 transform bg-background transition-none`}
      />
      <Sun
        className={`absolute left-1 h-4 w-4 ${isDark ? "text-primary" : "text-amber-500"} transition-none ${isDark ? "opacity-0" : "opacity-100"}`}
      />
      <Moon
        className={`absolute right-1 h-4 w-4 ${isDark ? "text-background" : "text-muted-foreground"} transition-none ${isDark ? "opacity-100" : "opacity-0"}`}
      />
    </button>
  )
}
