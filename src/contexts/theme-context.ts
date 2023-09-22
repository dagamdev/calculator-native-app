import { createContext } from 'react'
import type { FunctionState, ToggleTheme } from '../utils/types'

export interface ThemeContextData {
  theme: ToggleTheme
  setTheme: FunctionState<ToggleTheme>
}

export const ThemeContext = createContext<ThemeContextData | undefined>(undefined)
