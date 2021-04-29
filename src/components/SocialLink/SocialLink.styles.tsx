import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 700,
    color: 'inherit',

    '& > svg': {
      marginRight: theme.spacing(1),
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
