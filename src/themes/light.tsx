import { createMuiTheme } from '@material-ui/core'

import coreTheme from './core'

const themeColors = {
  bodyBackground: '#FFFFFF',
  headerBackground: '#FFFFFF',
  heroBackground: '#F9F9F9',
  textColorPrimary: '#000000',
  textColorSecondary: '#343434',
  divider: '#DFDFDF',
}

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: themeColors.bodyBackground,
      paper: themeColors.heroBackground,
    },
    primary: { main: themeColors.headerBackground },
    text: {
      primary: themeColors.textColorPrimary,
      secondary: themeColors.textColorSecondary,
    },
    divider: themeColors.divider,
  },
  ...coreTheme,
})

export default lightTheme
