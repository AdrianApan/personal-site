import { Grid, Typography, Box } from '@material-ui/core'

const BlogHero = () => (
  <>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">Blog</Typography>
        <Box mt={4}>
          <Typography variant="h2">
            A collection of <strong>thoughts</strong>, <strong>snippets</strong> and various{' '}
            <strong>developer resources</strong>.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </>
)

export default BlogHero
