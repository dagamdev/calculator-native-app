import { View, Text } from 'react-native'
import useCalculo from '../hooks/use-calculo'
import { colors } from '../styles/colors'
import CustomText from './custom-text'

export default function Display () {
  const { targetNumber, previousNumber, operation, result, finalResult } = useCalculo()

  return (
    <View style={{
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}>
      {(previousNumber !== undefined && operation !== undefined) && <Text style={{
        color: colors.gray,
        fontSize: 30,
        lineHeight: 30
      }}>{previousNumber.toLocaleString()} <Text style={{ color: colors.result }}>{operation}</Text></Text>}

      {/* {(previousNumber !== undefined && operation !== undefined) && <CustomText type='md' content={previousNumber.toLocaleString()}><Text style={{ color: colors.result }}>{operation}</Text></CustomText>} */}
      <CustomText type={finalResult === undefined ? 'principal' : 'result'} content={finalResult === undefined
        ? targetNumber.toLocaleString()
        : finalResult.toLocaleString()
      } />
      {result !== undefined && <CustomText type='sm' content={result.toLocaleString()} />}
    </View>
  )
}
