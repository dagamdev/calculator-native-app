import { useContext } from 'react'
import { ThemeContext, type ThemeContextData } from '../contexts/theme-context'

export function useTheme () {
  return useContext(ThemeContext) as ThemeContextData
}
