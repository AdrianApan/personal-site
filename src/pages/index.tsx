import Head from 'next/head'
import useSWR from 'swr'
import { Box, Grid } from '@material-ui/core'

import ProjectData from '../types/Project'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import HomeHero from '../components/HomeHero'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'

const Home = () => {
  const classes = useStyles({ rowFlex: false })
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/projects', fetcher)

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

      <Box className={classes.inner}>
        <Box mt={2}>
          <SectionHeader
            title="Projects"
            link="/projects"
            label="View all projects"
          />

          {!data && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {[...Array(2)].map((_, i) => (
                  <ProjectCardSkeleton key={i} compact />
                ))}
              </Grid>
              <Grid item xs={12} md={6}>
                {[...Array(2)].map((_, i) => (
                  <ProjectCardSkeleton key={i} compact />
                ))}
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {data?.slice(0, 2).map((project: ProjectData) => (
                <ProjectCard key={project.title} data={project} compact />
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {data?.slice(2, 4).map((project: ProjectData) => (
                <ProjectCard key={project.title} data={project} compact />
              ))}
            </Grid>
          </Grid>
        </Box>

        <Box mt={3} mb={3}>
          <SectionHeader title="Posts" link="/blog" label="View all posts" />
        </Box>
      </Box>
    </>
  )
}

export default Home
