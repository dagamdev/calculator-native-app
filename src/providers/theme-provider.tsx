import { ThemeContext } from '../contexts/theme-context'
import { useState } from 'react'
import type { ToggleTheme } from '../utils/types'

export default function ThemeProvider ({ children }: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<ToggleTheme>('light')

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
