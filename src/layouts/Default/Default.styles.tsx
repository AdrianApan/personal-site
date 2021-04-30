import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    position: 'fixed',
    minHeight: 75,
    zIndex: 2,
  },
  content: {
    paddingTop: 75,
    minHeight: 'calc(100vh - 48px)',
  },
  footer: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    minHeight: 48,
  },
}))

export default useStyles
