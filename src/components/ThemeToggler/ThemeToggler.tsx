import { Switch } from '@material-ui/core'

import useStyles from './ThemeToggler.styles'

interface Props {
  toggleDarkMode: () => void
  isDark: boolean
}

const ThemeToggler = ({ toggleDarkMode, isDark }: Props) => {
  const classes = useStyles()
  return (
    <Switch
      onChange={toggleDarkMode}
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
