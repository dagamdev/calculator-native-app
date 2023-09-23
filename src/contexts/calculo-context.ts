import { createContext } from 'react'
import type { FunctionState } from '../utils/types'

export interface CalculoContextData {
  targetNumber: number
  setTargetNumber: FunctionState<number>
  previousNumber?: number
  setPreviousNumber: FunctionState<number | undefined>
  operation?: string
  setOperation: FunctionState<string | undefined>
  result?: number
  setResult: FunctionState<number | undefined>
  finalResult?: number
  setFinalResult: FunctionState<number | undefined>
}

export const CalculoContext = createContext<CalculoContextData | undefined>(undefined)
