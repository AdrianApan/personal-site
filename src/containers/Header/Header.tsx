import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@material-ui/core'

import useStyles from '../../styles/main'
import LogoDark from '../../icons/LogoDark'
import LogoLight from '../../icons/LogoLight'
import Menu from '../../components/Menu'
import ThemeToggler from '../../components/ThemeToggler'

import { ToggleThemeContext } from '../../context/ThemeProvider'

const Header = () => {
  const classes = useStyles({ rowFlex: true })
  const router = useRouter()
  const { toggleTheme, isDark } = useContext(ToggleThemeContext)
  const handleClick = (url: string) => router.push(url)

  return (
    <Box className={classes.inner}>
      {isDark ? (
        <LogoLight
          style={{ width: 43, height: 43, cursor: 'pointer' }}
          onClick={() => handleClick('/')}
        />
      ) : (
        <LogoDark
          style={{ width: 43, height: 43, cursor: 'pointer' }}
          onClick={() => handleClick('/')}
        />
      )}

      <Box style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Menu />
        <ThemeToggler toggleTheme={toggleTheme} isDark={isDark} />
      </Box>
    </Box>
  )
}

export default Header
