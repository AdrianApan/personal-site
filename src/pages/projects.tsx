import Head from 'next/head'
import useSWR from 'swr'
import { Box } from '@material-ui/core'

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
          {!data && (
            <Box className={classes.grid}>
              {[...Array(6)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </Box>
          )}

          <Box className={classes.grid}>
            {data?.map((project: ProjectData) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Projects
