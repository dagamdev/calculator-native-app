import { StyleSheet, View, SafeAreaView, Switch } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { colors } from './src/styles/colors'
import { ThemeContext } from './src/contexts/theme-context'
import type { ToggleTheme } from './src/utils/types'
import Keyboard from './src/components/keyboard'
import Display from './src/components/display'
import CalculoProvider from './src/providers/calculo-provider'

export default function App () {
  const [theme, setTheme] = useState<ToggleTheme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: colors.dark }]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <Switch value={theme === 'dark'} onValueChange={() => { setTheme(t => t === 'light' ? 'dark' : 'light') }} />
        <View style={{ flex: 1 }}>
          <CalculoProvider>
            <Display />
            <Keyboard />
          </CalculoProvider>
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.light
  }
})
