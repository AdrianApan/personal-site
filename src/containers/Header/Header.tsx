import Link from 'next/link'
import { useContext } from 'react'
import { Box } from '@material-ui/core'

import useStyles from '../../styles/main'
import LogoDark from '../../icons/LogoDark'
import LogoLight from '../../icons/LogoLight'
import Menu from '../../components/Menu'
import ThemeToggler from '../../components/ThemeToggler'

import { ToggleThemeContext } from '../../context/ThemeProvider'

const Header = () => {
  const classes = useStyles({ rowFlex: true })
  const { toggleTheme, isDark } = useContext(ToggleThemeContext)

  return (
    <Box className={classes.inner}>
      <Link href="/">
        {isDark ? (
          <LogoLight style={{ width: 43, height: 43, cursor: 'pointer' }} />
        ) : (
          <LogoDark style={{ width: 43, height: 43, cursor: 'pointer' }} />
        )}
      </Link>
      <Box
        style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
      >
        <Menu />
        <ThemeToggler toggleTheme={toggleTheme} isDark={isDark} />
      </Box>
    </Box>
  )
}

export default Header
