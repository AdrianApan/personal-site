import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 0),
  },
  title: {
    textTransform: 'none',
    padding: 0,
    fontSize: 20,

    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      lineHeight: '30px',
      marginBottom: theme.spacing(1),

      '&:after': {
        display: 'none',
      },
    },
  },
  icon: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),

    '& > svg': {
      fontSize: 36,
    },

    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}))

export default useStyles
