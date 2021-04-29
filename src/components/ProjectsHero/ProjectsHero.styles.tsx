import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 700,
    color: 'inherit',

    '&:visited, &:focus': {
      color: 'inherit',
    },
  },
}))

export default useStyles
