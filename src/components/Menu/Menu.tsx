import { Box, Button, makeStyles } from '@material-ui/core'

import ActiveLink from '../ActiveLink'
import useStyles from './Menu.styles'

const Menu = () => {
  const classes = useStyles()

  // @todo - add responsive features

  return (
    <Box className={classes.menu}>
      <ActiveLink href="/" activeClassName={classes.active}>
        <Button className={classes.button}>ABOUT</Button>
      </ActiveLink>
      <ActiveLink href="/projects" activeClassName={classes.active}>
        <Button className={classes.button}>PROJECTS</Button>
      </ActiveLink>
      <ActiveLink href="/blog" activeClassName={classes.active}>
        <Button className={classes.button}>BLOG</Button>
      </ActiveLink>
    </Box>
  )
}

export default Menu
