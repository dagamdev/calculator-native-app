import { Text } from 'react-native'
import { useTheme } from '../hooks/use-theme'
import { colors } from '../styles/colors'

interface CustomTextProps {
  type: 'result' | 'principal' | 'md' | 'sm'
  content: string
  children?: React.ReactNode
}

export default function CustomText ({ type, content, children }: CustomTextProps) {
  const { theme } = useTheme()

  const length = content.length
  const res = length > 8 ? length - 8 : 1
  let size = res * 5 + res

  if (length > 11) {
    size = res * 5 - Number('0.' + Math.floor(res * 0.5)) + res
  }

  if (length > 15) {
    size = res * 3 - Number('0.9' + res) + res
  }

  const height = res

  return (
    <Text style={[{
      color: colors.gray,
      fontWeight: '300'
    }, type === 'principal'
      ? {
          color: theme === 'light' ? colors.dark : colors.light,
          fontSize: 70 - size,
          lineHeight: 68 - height
        }
      : type === 'result'
        ? {
            color: colors.result,
            fontSize: 70 - size,
            lineHeight: 77 - height
          }
        : type === 'md'
          ? {
              color: colors.result,
              fontSize: 30,
              lineHeight: 30
            }
          : {
              fontSize: 20,
              lineHeight: 20,
              marginRight: 8,
              fontWeight: '400'
            }
    ]}>{content} {children}</Text>
  )
}
