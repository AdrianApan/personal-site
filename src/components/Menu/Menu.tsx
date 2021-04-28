import { Box, Button, makeStyles } from '@material-ui/core'

import ActiveLink from '../ActiveLink'

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    marginRight: theme.spacing(2),
  },
  button: {
    color: 'inherit',
    fontSize: 12,
    fontWeight: 700,
    margin: theme.spacing(0, 2),
    border: '1px solid',
    borderColor: 'transparent',
    transition: 'border-color .2s ease',

    '&:hover': {
      border: '1px solid',
      transition: 'border-color .2s ease',
    },

    '&:after': {
      display: 'none',
    },
  },
  active: {
    border: '1px solid',
  },
}))

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
