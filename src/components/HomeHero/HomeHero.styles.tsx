import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  copy: {
    '& > svg': {
      margin: theme.spacing(0, 0.5),
    },
  },
  list: {
    width: 'fit-content',
    padding: 0,

    '& > li': {
      '& > svg': {
        marginRight: theme.spacing(1),
      },
    },
  },
}))

export default useStyles
