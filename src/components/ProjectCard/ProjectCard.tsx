import { Box, Grid, Button, Typography } from '@material-ui/core'

import ProjectData from '../../types/Project'

import useStyles from './ProjectCard.styles'
import ProjectIcon from '../../icons/Project'
import GithubIcon from '../../icons/Github'

interface Props {
  data: ProjectData
  compact?: boolean
}

const ProjectCard = ({ data, compact = false }: Props) => {
  const classes = useStyles()
  const { title, description, image, link, repository } = data
  const handleClick = (url: string) => window.open(url)

  return (
    <Box mb={2}>
      <Grid container>
        <Grid item xs={2} className={classes.thumbnailContainer}>
          <img
            src={`/assets/images/${image}`}
            alt={title}
            className={classes.thumbnail}
          />
        </Grid>
        <Grid item xs={10}>
          {!compact ? (
            <Typography variant="h4" className={classes.regularTitle}>
              {title}
            </Typography>
          ) : (
            <Button className={classes.title} onClick={() => handleClick(link)}>
              {title}
            </Button>
          )}
          <Typography variant="body2">{description}</Typography>
          {!compact && (
            <Box className={classes.links}>
              <Box className={classes.linkItem}>
                <ProjectIcon style={{ fontSize: 18 }} />{' '}
                <Button
                  className={classes.smallLink}
                  onClick={() => handleClick(link)}
                >
                  View project
                </Button>
              </Box>
              <Box className={classes.linkItem}>
                <GithubIcon style={{ fontSize: 18 }} />
                {repository ? (
                  <Button
                    className={classes.smallLink}
                    onClick={() => handleClick(repository)}
                  >
                    View source code
                  </Button>
                ) : (
                  <Typography variant="body2" className={classes.disabledLink}>
                    Not open source
                  </Typography>
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectCard
