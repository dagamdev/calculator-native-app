import { View } from 'react-native'
import { Styles } from '../styles/global-styles'
import Button from './button'
import useCalculo from '../hooks/use-calculo'

export default function Keyboard () {
  const {
    targetNumber,
    setTargetNumber,
    previousNumber,
    setPreviousNumber,
    setOperation,
    result,
    setResult,
    setFinalResult
  } = useCalculo()

  const handleNumberPress = (buttonValue: string) => {
    const strNumber = targetNumber.toString()
    if (strNumber.length < 9) {
      setTargetNumber(Number(strNumber + buttonValue))
    }
  }

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue)
    if (previousNumber === undefined) {
      setPreviousNumber(targetNumber)
    } else if (previousNumber !== 0) {
      setPreviousNumber(result)
    }
    setTargetNumber(0)
  }

  const clearAll = () => {
    setTargetNumber(0)
    setPreviousNumber(undefined)
    setOperation(undefined)
    setResult(undefined)
    setFinalResult(undefined)
  }

  const getResult = () => {
    clearAll()
    setFinalResult(result)
  }

  const handleClear = () => {
    if (targetNumber > 0) {
      setTargetNumber(tn => {
        const number = tn.toString()
        return Number(number.slice(0, number.length - 1))
      })
    } else if (previousNumber !== undefined) {
      setPreviousNumber(undefined)
      setTargetNumber(previousNumber)
      setOperation(undefined)
      setResult(undefined)
    }
  }

  return (
    <View style={{ alignItems: 'center', paddingVertical: 18 }}>
      <View style={Styles.row}>
        <Button text='C' isGray onPress={clearAll} />
        <Button text='+/-' isGray onPress={() => { handleOperationPress('+/-') }} />
        <Button text='%' isGray onPress={() => { handleOperationPress('%') }} />
        <Button text='÷' isBlue onPress={() => { handleOperationPress('÷') }} />
      </View>
      <View style={Styles.row}>
        <Button text='7' onPress={() => { handleNumberPress('7') }} />
        <Button text='8' onPress={() => { handleNumberPress('8') }} />
        <Button text='9' onPress={() => { handleNumberPress('9') }} />
        <Button text='×' isBlue onPress={() => { handleOperationPress('×') }} />
      </View>
      <View style={Styles.row}>
        <Button text='4' onPress={() => { handleNumberPress('4') }} />
        <Button text='5' onPress={() => { handleNumberPress('5') }} />
        <Button text='6' onPress={() => { handleNumberPress('6') }} />
        <Button text='-' isBlue onPress={() => { handleOperationPress('-') }} />
      </View>
      <View style={Styles.row}>
        <Button text='1' onPress={() => { handleNumberPress('1') }} />
        <Button text='2' onPress={() => { handleNumberPress('2') }} />
        <Button text='3' onPress={() => { handleNumberPress('3') }} />
        <Button text='+' isBlue onPress={() => { handleOperationPress('+') }} />
      </View>
      <View style={Styles.row}>
        <Button text='.' onPress={() => { handleNumberPress('.') }} />
        <Button text='0' onPress={() => { handleNumberPress('0') }} />
        <Button text='⌫' onPress={handleClear} />
        <Button text='=' isBlue onPress={() => { getResult() }} />
      </View>
    </View>
  )
}
