import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  Hidden,
} from '@material-ui/core'

import HeartIcon from '../../icons/Heart'
import JavascriptIcon from '../../icons/Javascript'
import ReactIcon from '../../icons/React'
import TypescriptIcon from '../../icons/Typescript'
import ReduxIcon from '../../icons/Redux'
import NodeIcon from '../../icons/Node'
import EmailIcon from '../../icons/Email'
import LinkedinIcon from '../../icons/Linkedin'
import GithubIcon from '../../icons/Github'
import TwitterIcon from '../../icons/Twitter'

import useStyles from './HomeHero.styles'
import SocialLink from '../SocialLink'

const HomeHero = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Hello, I'm Adrian.</Typography>
          <Box mt={4}>
            <Typography variant="h2">
              I'm a Javascript Engineer based in London, UK.
            </Typography>
            <Typography variant="h2" className={classes.copy}>
              I <HeartIcon htmlColor="#E03737" style={{ fontSize: 20 }} />{' '}
              working with{' '}
              <Hidden smUp>
                <br />
              </Hidden>
              <JavascriptIcon /> <ReactIcon /> <TypescriptIcon /> <ReduxIcon />{' '}
              <NodeIcon />
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box mt={6}>
        <List className={classes.list}>
          <ListItem>
            <SocialLink
              label="mail@adrianapan.com"
              link="mailto:mail@adrianapan.com"
              icon={<EmailIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="linkedin.com/in/adrianapan"
              link="https://linkedin.com/in/adrianapan"
              icon={<LinkedinIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="github.com/adrianapan"
              link="https://github.com/adrianapan"
              icon={<GithubIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="@adrianapan"
              link="https://twitter.com/adrianapan"
              icon={<TwitterIcon />}
            />
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default HomeHero
