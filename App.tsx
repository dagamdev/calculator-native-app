import { StyleSheet, View, Text, SafeAreaView, Switch } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { colors } from './src/styles/colors'
import { ThemeContext } from './src/contexts/theme-context'
import type { ToggleTheme } from './src/utils/types'
import MyKeyboard from './src/components/my-keyboard'

export default function App () {
  const [theme, setTheme] = useState<ToggleTheme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: colors.dark }]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <Switch value={theme === 'light'} onValueChange={() => { setTheme(t => t === 'light' ? 'dark' : 'light') }} />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.light
  }
})
