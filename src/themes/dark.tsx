import { createMuiTheme } from '@material-ui/core'

import coreTheme from './core'

const themeColors = {
  bodyBackground: '#101010',
  headerBackground: '#0C0C0C',
  heroBackground: '#191919',
  textColorPrimary: '#FFFFFF',
  textColorSecondary: '#F1F1F1',
  divider: '#2B2B2B',
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
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

export default darkTheme
