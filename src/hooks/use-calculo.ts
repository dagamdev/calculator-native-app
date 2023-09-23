import { useContext } from 'react'
import { CalculoContext, type CalculoContextData } from '../contexts/calculo-context'

export default function useCalculo () {
  return useContext(CalculoContext) as CalculoContextData
}
