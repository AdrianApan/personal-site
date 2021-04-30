import { Box, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

interface Props {
  compact?: boolean
}

const ProjectCardSkeleton = ({ compact = false }: Props) => {
  return (
    <Box mb={2}>
      <Grid container>
        <Grid item xs={2}>
          <Skeleton
            width={50}
            height={50}
            style={{ margin: '0 auto', transform: 'scale(1, 0.9)' }}
          />
        </Grid>
        <Grid item xs={10}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          {!compact && (
            <>
              <Skeleton width="25%" />
              <Skeleton width="25%" />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectCardSkeleton
