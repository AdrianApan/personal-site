import Head from 'next/head'
import useSWR from 'swr'
import { Box } from '@material-ui/core'

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
            <Box className={classes.grid}>
              {[...Array(4)].map((_, i) => (
                <ProjectCardSkeleton key={i} compact />
              ))}
            </Box>
          )}

          <Box className={classes.grid}>
            {data?.slice(0, 4).map((project: ProjectData) => (
              <ProjectCard key={project.title} data={project} compact />
            ))}
          </Box>
        </Box>

        <Box mt={3} mb={3}>
          <SectionHeader title="Posts" link="/blog" label="View all posts" />
        </Box>
      </Box>
    </>
  )
}

export default Home
