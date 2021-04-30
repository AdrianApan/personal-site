import { Grid, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import useStyles from './BlogCardSkeleton.styles'

const BlogCardSkeleton = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} sm={1}>
        <Skeleton
          width={50}
          height={50}
          style={{ margin: '5px auto', transform: 'scale(1, 0.9)' }}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <Typography variant="body2">
          <Skeleton height={40} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default BlogCardSkeleton
