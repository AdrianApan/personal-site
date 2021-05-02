import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import ProjectData from '../types/Project'

import { projects } from '../lib/projects'
import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import ProjectsHero from '../components/ProjectsHero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'

const Projects = () => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Projects | Adrian Apan</title>
        <meta
          name="description"
          content="Here are some of my side projects. All open source projects are available on my Github profile."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <ProjectsHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        <Box mt={4} mb={4}>
          {!projects && (
            <Box className={classes.grid}>
              {[...Array(6)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </Box>
          )}

          <Box className={classes.grid}>
            {projects?.length > 0 ? (
              projects?.map((project: ProjectData) => (
                <ProjectCard key={project.title} data={project} />
              ))
            ) : (
              <Box alignContent="center" alignSelf="center" mt={3}>
                <Typography
                  variant="h3"
                  style={{ color: '#8c8c8c', fontWeight: 700, textAlign: 'center' }}
                >
                  The are no available projects.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Projects
