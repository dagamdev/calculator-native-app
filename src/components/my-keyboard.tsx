import { useState } from 'react'
import { View, Text } from 'react-native'
import { Styles } from '../styles/global-styles'
import Button from './button'
import { colors } from '../styles/colors'

export default function MyKeyboard () {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState<number>()

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 9) {
      setFirstNumber(firstNumber + buttonValue)
    }
  }

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue)
    setSecondNumber(firstNumber)
    setFirstNumber('')
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
    setResult(undefined)
  }

  const getResult = () => {
    switch (operation) {
      case '+':
        clear()
        setResult(parseInt(firstNumber) + parseInt(secondNumber))
        break

      case '-':
        clear()
        setResult(parseInt(firstNumber) - parseInt(secondNumber))
        break

      case '×':
        clear()
        setResult(parseInt(firstNumber) * parseInt(secondNumber))
        break

      case '/':
        clear()
        setResult(parseInt(firstNumber) / parseInt(secondNumber))
        break

      default:
        clear()
        setResult(0)
        break
    }
  }

  const firstNumberDisplay = () => {
    const targetNumber = Number(firstNumber).toLocaleString()

    if (result !== undefined) {
      return <Text style={result.toString().length > 5
        ? [Styles.screenFirstNumber, { color: colors.result }]
        : [Styles.screenSecondNumber, { color: colors.result }]
      }>{firstNumber.length === 0 ? '0' : targetNumber}</Text>
    }

    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>0</Text>
    }

    if (firstNumber.length < 8) {
      return <Text style={Styles.screenFirstNumber}>{targetNumber}</Text>
    }

    if (firstNumber.length > 7) {
      return <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>{targetNumber}</Text>
    }

    if (firstNumber.length > 8) {
      return <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{targetNumber}</Text>
    }

    console.log('none')
  }

  return (
    <View style={{
      alignItems: 'flex-end',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#000'
    }}>
      <View style={{
        width: '100%',
        // justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: '#000'
      }}>
        <Text style={Styles.screenSecondNumber}>{secondNumber}</Text>
        <Text style={{
          color: 'purple',
          fontSize: 50,
          fontWeight: '500'
        }}>{operation}</Text>
        {result === undefined
          ? firstNumberDisplay()
          : <Text style={result.toString().length > 5
            ? [Styles.screenSecondNumber, { color: colors.result }]
            : [Styles.screenFirstNumber, { color: colors.result }]
          }>{result.toLocaleString()}</Text>
        }
      </View>

      <View style={Styles.row}>
        <Button text='c' isGray onPress={clear} />
        <Button text='+/-' isGray onPress={() => { handleOperationPress('+/-') }} />
        <Button text='%' isGray onPress={() => { handleOperationPress('%') }} />
        <Button text='÷' isBlue onPress={() => { handleOperationPress('+') }} />
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
        <Button text='⌫' onPress={() => { setFirstNumber(firstNumber.slice(0, firstNumber.length - 1)) }} />
        <Button text='=' isBlue onPress={() => { getResult() }} />
      </View>
    </View>
  )
}
