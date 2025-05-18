"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

type AnimationContextType = {
  prefersReducedMotion: boolean
  enableAnimations: boolean
  setEnableAnimations: (enable: boolean) => void
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  enableAnimations: true,
  setEnableAnimations: () => {},
})

export const useAnimation = () => useContext(AnimationContext)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [enableAnimations, setEnableAnimations] = useState(true)
  const pathname = usePathname()

  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Function to disable animations for users who prefer reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setEnableAnimations(false)
    }
  }, [prefersReducedMotion])

  return (
    <AnimationContext.Provider
      value={{
        prefersReducedMotion,
        enableAnimations,
        setEnableAnimations,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={enableAnimations ? { opacity: 0, y: 10 } : undefined}
          animate={enableAnimations ? { opacity: 1, y: 0 } : undefined}
          exit={enableAnimations ? { opacity: 0, y: -10 } : undefined}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AnimationContext.Provider>
  )
}
