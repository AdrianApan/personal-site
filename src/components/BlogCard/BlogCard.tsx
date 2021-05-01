import { Grid, Button, Typography } from '@material-ui/core'
import Link from 'next/link'

import PostData from '../../types/Post'

import useStyles from './BlogCard.styles'
import CodeIcon from '../../icons/Code'
import BookIcon from '../../icons/Book'
import ChatIcon from '../../icons/Chat'
import BulbIcon from '../../icons/Bulb'

interface Props {
  data: PostData
}

const BlogCard = ({ data }: Props) => {
  const classes = useStyles()
  const { title, excerpt, date, slug, icon = 'chat' } = data

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'code':
        return <CodeIcon />
      case 'book':
        return <BookIcon />
      case 'bulb':
        return <BulbIcon />
      default:
        return <ChatIcon />
    }
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} sm={1} className={classes.icon}>
        {getIcon(icon)}
      </Grid>
      <Grid item xs={10} sm={11}>
        <Link href={`blog/${slug}`}>
          <Button className={classes.title}>{title}</Button>
        </Link>
        <Typography variant="body2">{excerpt}</Typography>
      </Grid>
    </Grid>
  )
}

export default BlogCard
