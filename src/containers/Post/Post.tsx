import { useEffect } from 'react'
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import '../../../node_modules/highlight.js/lib/highlight'

import useStyles from './Post.styles'
import hljs from 'highlight.js'

const Post = ({ content }: { content: string }) => {
  const classes = useStyles()

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block: HTMLElement) => {
      hljs.highlightBlock(block)
    })
  }, [content])

  return (
    <div
      className={classes.post}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Post
