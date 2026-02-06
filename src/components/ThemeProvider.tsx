'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { darkTheme, lightTheme } from '@/styles'
import { themeWrapper } from './ThemeProvider.css'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: ResolvedTheme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  // Return a default value during SSG/SSR when context is not available
  if (context === undefined) {
    return {
      theme: 'dark' as Theme,
      resolvedTheme: 'dark' as ResolvedTheme,
      toggleTheme: () => {},
      setTheme: () => {},
    }
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')
  const [mounted, setMounted] = useState(false)
  const isInitialMount = useRef(true)

  // Resolve theme based on system preference when theme is "system"
  useEffect(() => {
    const resolveTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(getSystemTheme())
      } else {
        setResolvedTheme(theme)
      }
    }

    resolveTheme()

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
      const handleChange = () => resolveTheme()
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  // Read from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
    setMounted(true)
  }, [])

  // Save to localStorage when theme changes (but not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'system'
      return 'light'
    })
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const themeClass = resolvedTheme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, toggleTheme, setTheme }}
    >
      <div className={`${mounted ? themeClass : darkTheme} ${themeWrapper}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
