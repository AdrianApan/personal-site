import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  post: {
    '& p': {
      fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
      fontSize: 16,
      lineHeight: 1.8,
    },
    '& h1, & h2, & h3, & h4': {
      marginBottom: 0,
    },
    '& h1': {
      fontSize: 42,
      fontWeight: 900,
    },
    '& h2': {
      fontSize: 32,
      fontWeight: 900,
    },
    '& h3': {
      fontSize: 27,
      fontWeight: 900,
    },
    '& h4': {
      fontSize: 22,
      fontWeight: 700,
      color: '#3BA1BB',
    },
    '& a': {
      color: '#3BA1BB',
      transition: 'color .2s ease',
      fontWeight: 700,
      fontSize: 16,
      textDecoration: 'none',

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
    '& blockquote': {
      marginInlineStart: 0,
      marginInlineEnd: 0,
      fontStyle: 'italic',
      margin: theme.spacing(2, 0),

      '& > p': {
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',

        '&:before': {
          content: '"\u201C"',
          marginRight: theme.spacing(2),
          marginTop: theme.spacing(2),
          fontSize: 62,
          lineHeight: 1,
        },
      },
    },
    '& img': {
      maxWidth: '100%',
    },
    '& hr': {
      opacity: 0.2,
      borderStyle: 'dashed',
      margin: theme.spacing(3, 0),
    },
    '& code': {
      '&.hljs': {
        backgroundColor: '#191919',
      },
    },
  },
}))

export default useStyles
