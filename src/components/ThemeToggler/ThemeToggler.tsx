import { Switch } from '@material-ui/core'

import useStyles from './ThemeToggler.styles'

interface Props {
  toggleTheme: () => void
  isDark: boolean
}

const ThemeToggler = ({ toggleTheme, isDark }: Props) => {
  const classes = useStyles()
  return (
    <Switch
      onChange={toggleTheme}
      checked={isDark}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
    />
  )
}

export default ThemeToggler
