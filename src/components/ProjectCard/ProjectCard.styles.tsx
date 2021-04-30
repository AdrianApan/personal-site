import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'none',
    padding: 0,
  },
  regularTitle: {
    color: 'inherit',
    marginBottom: theme.spacing(0.5),
  },
  thumbnailContainer: {
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  thumbnail: {
    maxWidth: '50px',

    [theme.breakpoints.down('xs')]: {
      maxWidth: '40px',
    },
  },
  links: {
    display: 'flex',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    flexDirection: 'column',
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),

    '& > svg': {
      marginRight: theme.spacing(1),
    },
  },
  smallLink: {
    fontSize: 12,
    padding: 0,
  },
  disabledLink: {
    color: '#9D9D9D',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: 12,
  },
}))

export default useStyles
