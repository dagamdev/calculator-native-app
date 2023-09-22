import { StyleSheet } from 'react-native'
import { colors } from './colors'

const BasicButtonStyle = StyleSheet.create({
  btn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.1
  }
}).btn

export const Styles = StyleSheet.create({
  btnBlue: {
    ...BasicButtonStyle,
    backgroundColor: colors.blue
  },
  btnDark: {
    ...BasicButtonStyle,
    backgroundColor: colors.btnDark
  },
  btnLight: {
    ...BasicButtonStyle,
    backgroundColor: '#fff'
  },
  btnGray: {
    ...BasicButtonStyle,
    backgroundColor: colors.btnGray
  },
  smallTextLight: {
    fontSize: 32,
    color: '#000'
  },
  smallTextDark: {
    fontSize: 32,
    color: '#fff'
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row'
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50
  },
  screenFirstNumber: {
    fontSize: 85,
    color: colors.gray,
    fontWeight: '200'
  },
  screenSecondNumber: {
    fontSize: 40,
    color: colors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end'
  }
})
