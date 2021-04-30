import Head from 'next/head'
import useSWR from 'swr'
import { Box, Grid } from '@material-ui/core'

import ProjectData from '../types/Project'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import ProjectsHero from '../components/ProjectsHero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'

const Projects = () => {
  const classes = useStyles({ rowFlex: false })
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/projects', fetcher)
  const halfData = Math.ceil(data?.length / 2)

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

      <Box className={classes.inner}>
        <Box mt={4} mb={4}>
          {!data && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {[...Array(data?.length)].slice(0, halfData).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </Grid>
              <Grid item xs={12} md={6}>
                {[...Array(data?.length)]
                  .slice(halfData, data?.length)
                  .map((_, i) => (
                    <ProjectCardSkeleton key={i} />
                  ))}
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {data?.slice(0, halfData).map((project: ProjectData) => (
                <ProjectCard key={project.title} data={project} />
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {data
                ?.slice(halfData, data?.length)
                .map((project: ProjectData) => (
                  <ProjectCard key={project.title} data={project} />
                ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Projects
