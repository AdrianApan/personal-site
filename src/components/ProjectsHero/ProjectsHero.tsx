import { Grid, Typography, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 700,
    color: 'inherit',

    '&:visited, &:focus': {
      color: 'inherit',
    },
  },
}))

const ProjectsHero = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Projects</Typography>
          <Box mt={4}>
            <Typography variant="h2">
              Some of my open source side projects.
            </Typography>
            <Typography variant="h2">
              All repositories are available on my{' '}
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
