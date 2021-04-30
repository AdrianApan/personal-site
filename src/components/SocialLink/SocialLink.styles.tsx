import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 700,
    color: 'inherit',
    alignItems: 'center',

    '& > svg': {
      marginRight: theme.spacing(0.5),
      fontSize: 20,
    },

    '&:hover': {
      textDecoration: 'underline',
    },

    '&:visited, &:focus': {
      color: 'inherit',
    },
  },
}))

export default useStyles
