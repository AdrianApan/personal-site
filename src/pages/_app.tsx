import { useEffect } from 'react'
import { useRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'

import * as gtag from '../utils/gtag'
import { DefaultLayout } from '../layouts'
import { ThemeProvider } from '../context/ThemeProvider'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
