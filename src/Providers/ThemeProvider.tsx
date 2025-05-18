"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only mounting after the client-side rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

type ScrollPosition = {
  scrollY: number
  scrollDirection: "up" | "down" | null
}

type ScrollContextType = {
  scrollPosition: ScrollPosition
}

const ScrollContext = createContext<ScrollContextType>({
  scrollPosition: { scrollY: 0, scrollDirection: null },
})

export const useScroll = () => useContext(ScrollContext)

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? "down" : "up"
      
      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection: direction,
      })
      
      lastScrollY = currentScrollY
    }

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollContext.Provider>
  )
}
