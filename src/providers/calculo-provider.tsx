import { useState, useEffect } from 'react'
import { CalculoContext } from '../contexts/calculo-context'

export default function CalculoProvider ({ children }: {
  children: React.ReactNode
}) {
  const [targetNumber, setTargetNumber] = useState(0)
  const [previousNumber, setPreviousNumber] = useState<number>()
  const [operation, setOperation] = useState<string>()
  const [result, setResult] = useState<number>()
  const [finalResult, setFinalResult] = useState<number>()

  useEffect(() => {
    if (operation !== undefined) {
      if (finalResult !== undefined) {
        setFinalResult(undefined)
        setPreviousNumber(finalResult)
      }

      switch (operation) {
        case '+': {
          setResult((previousNumber ?? finalResult ?? 0) + targetNumber)
          break
        }

        case '-': {
          setResult((previousNumber ?? finalResult ?? 0) - targetNumber)
          break
        }

        case '×':{
          setResult((previousNumber ?? finalResult ?? 0) * targetNumber)
          break
        }

        case '÷':{
          const result = (previousNumber ?? finalResult ?? 0) / targetNumber
          setResult(result === Infinity ? 0 : result)
          break
        }

        default:
          setResult(0)
          break
      }
    }
  }, [operation, targetNumber])

  return (
    <CalculoContext.Provider value={{
      targetNumber,
      setTargetNumber,
      previousNumber,
      setPreviousNumber,
      operation,
      setOperation,
      result,
      setResult,
      finalResult,
      setFinalResult
    }}>
      {children}
    </CalculoContext.Provider>
  )
}
