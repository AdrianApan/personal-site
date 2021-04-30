import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    borderBottom: '1px solid #DFDFDF',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1, 0),
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'inherit',
    fontWeight: 900,
  },
  link: {
    marginLeft: 'auto',
    '& > button': {
      fontSize: 14,
      padding: 0,
    },
  },
}))

export default useStyles
