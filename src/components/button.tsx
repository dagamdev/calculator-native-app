import { TouchableOpacity, Text } from 'react-native'
import { useTheme } from '../hooks/use-theme'
import { Styles } from '../styles/global-styles'

interface ButtonProps {
  onPress: () => void
  text: string
  isBlue?: boolean
  isGray?: boolean
  double?: boolean
}

export default function Button ({ onPress, text, isBlue, isGray, double }: ButtonProps) {
  const { theme } = useTheme()

  return (
    <TouchableOpacity onPress={onPress} style={[
      isBlue === true
        ? Styles.btnBlue
        : isGray === true
          ? Styles.btnGray
          : theme === 'light'
            ? Styles.btnLight
            : Styles.btnDark,
      double === true
        ? {
            width: 156
          }
        : {
            width: 70
          }
    ]}>
      <Text style={isBlue === true || isGray === true
        ? Styles.smallTextDark
        : theme === 'light'
          ? Styles.smallTextLight
          : Styles.smallTextDark
      } >{text}</Text>
    </TouchableOpacity>
  )
}
