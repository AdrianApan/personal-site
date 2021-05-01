import { Box } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import useStyles from '../../styles/main'
import Hero from '../../containers/Hero'

const PostSkeleton = () => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Hero>
        <Box className={classes.inner}>
          <Skeleton height={75} />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton height={300} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    </>
  )
}

export default PostSkeleton
