import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { Box, Divider } from '@material-ui/core'

import ProjectData from '../types/Project'
import BlogData from '../types/Blog'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import HomeHero from '../components/HomeHero'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'
import BlogCard from '../components/BlogCard'
import BlogCardSkeleton from '../components/BlogCardSkeleton'

const Home = () => {
  const classes = useStyles({ rowFlex: false })
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data: projects } = useSWR('/api/projects', fetcher)
  const { data: posts } = useSWR('/api/posts', fetcher)

  return (
    <>
      <Head>
        <title>Adrian Apan</title>
        <meta
          name="description"
          content="I'm a Javascript Engineer based in London, UK. I enjoy working with Javascript, React, Typescript, Redux and Node JS."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <HomeHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        <Box mt={3} mb={3}>
          <SectionHeader
            title="Projects"
            link="/projects"
            label="View all projects"
          />

          {!projects && (
            <Box className={classes.grid} mt={4}>
              {[...Array(4)].map((_, i) => (
                <ProjectCardSkeleton key={i} compact />
              ))}
            </Box>
          )}

          <Box className={classes.grid} mt={4}>
            {projects?.slice(0, 4).map((project: ProjectData) => (
              <ProjectCard key={project.title} data={project} compact />
            ))}
          </Box>
        </Box>

        <Box mt={3} mb={3}>
          <SectionHeader title="Posts" link="/blog" label="View all posts" />

          {!posts &&
            [...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <BlogCardSkeleton />
                {i < 1 && <Divider />}
              </React.Fragment>
            ))}

          {posts?.slice(0, 2).map((post: BlogData, i: number) => (
            <React.Fragment key={post.title}>
              <BlogCard data={post} />
              {i < 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Home
