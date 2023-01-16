import React, { useEffect, useState } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'

import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ToggleThemeContext = React.createContext({
  toggleTheme: () => {},
  isDark: true,
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [themePalette, setThemePalette] = useState<string>('darkTheme')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme')
      if (!localTheme) {
        setThemePalette(
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'darkTheme'
            : 'lightTheme',
        )
      } else {
        setThemePalette(localTheme)
      }
    }
  }, [])

  function toggleTheme() {
    setThemePalette((prev) => (prev === 'lightTheme' ? 'darkTheme' : 'lightTheme'))
    window.localStorage.setItem('theme', themePalette === 'lightTheme' ? 'darkTheme' : 'lightTheme')
  }

  return (
    <ToggleThemeContext.Provider
      value={{
        toggleTheme,
        isDark: !(themePalette === 'lightTheme'),
      }}
    >
      <MuiThemeProvider theme={themePalette === 'darkTheme' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
