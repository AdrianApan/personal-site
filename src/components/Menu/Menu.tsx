import { useState } from 'react'
import { Box, Button, Hidden, Menu as MuiMenu, MenuItem, IconButton } from '@material-ui/core'

import useStyles from './Menu.styles'
import MenuIcon from '../../icons/Menu'
import ActiveLink from '../ActiveLink'

const PAGES = [
  {
    label: 'ABOUT',
    link: '/',
  },
  {
    label: 'PROJECTS',
    link: '/projects/',
  },
  {
    label: 'BLOG',
    link: '/blog/',
  },
]

const Menu = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => setAnchorEl(null)

  return (
    <Box className={classes.menu}>
      <Hidden xsDown>
        {PAGES?.map(({ label, link }) => (
          <ActiveLink key={label} href={link} activeClassName={classes.active}>
            <Button className={classes.button}>{label}</Button>
          </ActiveLink>
        ))}
      </Hidden>
      <Hidden smUp>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton>
        <MuiMenu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          {PAGES?.map(({ label, link }) => (
            <MenuItem key={label}>
              <ActiveLink href={link} activeClassName={classes.active}>
                <Button className={classes.button} onClick={handleClose}>
                  {label}
                </Button>
              </ActiveLink>
            </MenuItem>
          ))}
        </MuiMenu>
      </Hidden>
    </Box>
  )
}

export default Menu
