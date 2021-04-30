import { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import { DefaultLayout } from '../layouts'
import { ThemeProvider } from '../context/ThemeProvider'

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider>
      <DefaultLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default App
