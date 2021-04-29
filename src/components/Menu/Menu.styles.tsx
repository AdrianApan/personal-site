import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    marginRight: theme.spacing(2),
  },
  button: {
    color: 'inherit',
    fontSize: 12,
    fontWeight: 700,
    margin: theme.spacing(0, 2),
    border: '1px solid',
    borderColor: 'transparent',
    transition: 'border-color .2s ease',

    '&:hover': {
      border: '1px solid',
      transition: 'border-color .2s ease',
    },

    '&:after': {
      display: 'none',
    },
  },
  active: {
    border: '1px solid',
  },
}))

export default useStyles
