import { Grid, Typography, Box } from '@material-ui/core'

import useStyles from './ProjectsHero.styles'

const ProjectsHero = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Projects</Typography>
          <Box mt={4}>
            <Typography variant="h2">
              Some of my side projects. All open source projects are available on my{' '}
              <a
                href="https://github.com/adrianapan"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Github profile
              </a>
              .
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectsHero
