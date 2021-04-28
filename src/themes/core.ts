const coreTheme = {
  typography: {
    fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: 62,
      fontWeight: 900,
    },
    h2: {
      fontSize: 32,
      fontWeight: 400,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
  },
  props: {
    MuiButton: { disableRipple: true },
  },
  overrides: {
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      root: {
        paddingTop: 0,
        paddingBottom: 16,
      },
    },
    MuiButton: {
      root: {
        color: '#3BA1BB',
        transition: 'color .2s ease',
        // textTransform: 'none', // https://github.com/mui-org/material-ui/issues/19655

        '&:hover': {
          backgroundColor: 'transparent',
          color: 'inherit',
          transition: 'color .2s ease',
        },

        '&:after': {
          content: '"→"',
          marginLeft: 4,
        },
      },
    },
  },
}

export default coreTheme
