"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-purple-500/20 transition-colors"
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-white-400" />
      ) : (
        <Moon className="h-6 w-6 text-black-800" />
      )}
    </button>
  )
}
