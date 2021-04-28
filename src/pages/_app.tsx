import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useDarkMode from 'use-dark-mode'

import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'
import { DefaultLayout } from '../layouts'

function App({ Component, pageProps }) {
  const { value: isDark } = useDarkMode(false)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <DefaultLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default App
