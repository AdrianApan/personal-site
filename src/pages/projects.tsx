import Head from 'next/head'
import { Box } from '@material-ui/core'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import ProjectsHero from '../components/ProjectsHero'

const Projects = () => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Projects | Adrian Apan</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <ProjectsHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>Content goes here</Box>
    </>
  )
}

export default Projects
