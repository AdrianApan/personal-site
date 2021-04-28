import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

export default useStyles
