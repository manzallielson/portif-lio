import { createContext, useContext, useState, ReactNode } from 'react'

type ThemeColor = 'blue' | 'green' | 'purple' | 'pink' | 'orange' | 'red' | 'teal' | 'cyan' | 'black' 

interface ThemeContextType {
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeColor, setThemeColor] = useState<ThemeColor>(
    (localStorage.getItem('themeColor') as ThemeColor) || 'blue'
  )

  const handleSetThemeColor = (color: ThemeColor) => {
    setThemeColor(color)
    localStorage.setItem('themeColor', color)
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor: handleSetThemeColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

