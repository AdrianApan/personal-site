import Head from 'next/head'
import { Box } from '@material-ui/core'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import HomeHero from '../components/HomeHero'

const Home = () => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Adrian Apan</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <HomeHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>Content goes here</Box>
    </>
  )
}

export default Home
