import { Box, Switch } from '@material-ui/core'
import useDarkMode from 'use-dark-mode'

import useStyles from '../../styles/main'
import LogoDark from '../../icons/LogoDark'
import LogoLight from '../../icons/LogoLight'
import Menu from '../../components/Menu'

const Header = () => {
  const classes = useStyles({ rowFlex: true })
  // @todo
  // - fix: logo reverting to dark on refresh
  // - refactor: move & style the theme switch
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode()

  return (
    <Box className={classes.inner}>
      {isDark ? (
        <LogoLight style={{ width: 43, height: 43 }} />
      ) : (
        <LogoDark style={{ width: 43, height: 43 }} />
      )}
      <Box
        style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
      >
        <Menu />
        <Switch onChange={toggleDarkMode} checked={isDark} />
      </Box>
    </Box>
  )
}

export default Header
