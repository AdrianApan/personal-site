import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  copy: {
    '& > svg': {
      margin: theme.spacing(0, 0.5),
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    gridGap: theme.spacing(4),

    [theme.breakpoints.down('xs')]: {
      gridGap: theme.spacing(0),
      flexDirection: 'column',
    },

    '& > li': {
      width: 'fit-content',
      paddingBottom: 0,

      [theme.breakpoints.down('xs')]: {
        paddingBottom: theme.spacing(2.5),
      },

      '& > svg': {
        marginRight: theme.spacing(1),
      },
    },
  },
}))

export default useStyles
