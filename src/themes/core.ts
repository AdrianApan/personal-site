const coreTheme = {
  typography: {
    fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    lineHeight: 1.8,
    h1: {
      fontSize: 62,
      fontWeight: 900,
    },
    h2: {
      fontSize: '2.35rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      color: '#3BA1BB',
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
    MuiIconButton: {
      root: {
        color: 'inherit',
      },
    },
    MuiButton: {
      root: {
        color: '#3BA1BB',
        transition: 'color .2s ease',
        fontWeight: 700,
        fontSize: 16,

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
