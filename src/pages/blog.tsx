import Head from 'next/head'
import { Box } from '@material-ui/core'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import BlogHero from '../components/BlogHero'

const Blog = () => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Blog | Adrian Apan</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <BlogHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>Content goes here</Box>
    </>
  )
}

export default Blog
