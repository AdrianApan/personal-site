import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Box, Typography } from '@material-ui/core'

import PostData from '../../types/Post'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'
import useStyles from '../../styles/main'
import Hero from '../../containers/Hero'
import PostContainer from '../../containers/Post'
import PostSkeleton from '../../components/PostSkeleton'

interface Props {
  post: PostData
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  const classes = useStyles({ rowFlex: false })

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return router.isFallback ? (
    <PostSkeleton />
  ) : (
    <>
      <Head>
        <title>{post.title} | Adrian Apan</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="og:url" content={`https://adrianapan.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`https://adrianapan.com/assets/blog/open-graph/${post.icon}.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@adrianapan" />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:image"
          content={`https://adrianapan.com/assets/blog/open-graph/${post.icon}.png`}
        />
        <meta name="twitter:image:alt" content={post.title} />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <Typography variant="h1" style={{ fontSize: 42 }}>
            {post.title}
          </Typography>
        </Box>
      </Hero>

      <Box className={classes.inner}>
        <article>
          <PostContainer content={post.content} />
        </article>
      </Box>
    </>
  )
}

export default Post

export async function getStaticProps({ params }: { params: Partial<PostData> }) {
  const post = getPostBySlug(params.slug, ['title', 'excerpt', 'icon', 'date', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
