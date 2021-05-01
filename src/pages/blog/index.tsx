import React from 'react'
import Head from 'next/head'
import { Box, Divider, Typography } from '@material-ui/core'

import PostData from '../../types/Post'

import { getAllPosts } from '../../lib/api'
import useStyles from '../../styles/main'
import Hero from '../../containers/Hero'
import BlogHero from '../../components/BlogHero'
import BlogCard from '../../components/BlogCard'
import BlogCardSkeleton from '../../components/BlogCardSkeleton'

interface Props {
  posts: PostData[]
}

const Blog = ({ posts }: Props) => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Blog | Adrian Apan</title>
        <meta
          name="description"
          content="A collection of thoughts, code snippets and various developer resources."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <BlogHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        {!posts &&
          [...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <BlogCardSkeleton />
              {i < 2 && <Divider />}
            </React.Fragment>
          ))}

        {posts?.length > 0 ? (
          posts?.map((post: PostData, i: number) => (
            <React.Fragment key={post.title}>
              <BlogCard data={post} />
              {i < posts.length - 1 && <Divider />}
            </React.Fragment>
          ))
        ) : (
          <Box alignContent="center" alignSelf="center" mt={6}>
            <Typography
              variant="h3"
              style={{ color: '#8c8c8c', fontWeight: 700 }}
            >
              The are no available blog posts.
            </Typography>
          </Box>
        )}
      </Box>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'excerpt', 'icon', 'date', 'slug'])

  return {
    props: { posts },
  }
}
