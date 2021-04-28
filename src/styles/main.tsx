import { makeStyles } from '@material-ui/core'

interface StyleProps {
  rowFlex: boolean
}

const useStyles = makeStyles((theme) => ({
  inner: {
    maxWidth: 960,
    margin: '0 auto',
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ({ rowFlex }: Partial<StyleProps>) =>
      rowFlex ? 'row' : 'column',
    alignItems: ({ rowFlex }: Partial<StyleProps>) =>
      rowFlex ? 'center' : 'inherit',
  },
}))

export default useStyles
