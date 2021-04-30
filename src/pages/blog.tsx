import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { Box, Divider } from '@material-ui/core'

import BlogData from '../types/Blog'

import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import BlogHero from '../components/BlogHero'
import BlogCard from '../components/BlogCard'
import BlogCardSkeleton from '../components/BlogCardSkeleton'

const Blog = () => {
  const classes = useStyles({ rowFlex: false })
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/posts', fetcher)

  return (
    <>
      <Head>
        <title>Blog | Adrian Apan</title>
        <meta
          name="description"
          content="A collection of thoughts, snippets and various developer resources."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <BlogHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        {!data &&
          [...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <BlogCardSkeleton />
              {i < 2 && <Divider />}
            </React.Fragment>
          ))}

        {data?.map((post: BlogData, i: number) => (
          <React.Fragment key={post.title}>
            <BlogCard data={post} />
            {i < data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
    </>
  )
}

export default Blog
