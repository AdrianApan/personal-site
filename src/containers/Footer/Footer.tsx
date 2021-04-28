import { Box, Typography } from '@material-ui/core'

import useStyles from '../../styles/main'

const Footer = () => {
  const classes = useStyles({ rowFlex: true })
  const date = new Date().getFullYear()

  return (
    <Box className={classes.inner}>
      <Typography style={{ fontSize: 11, textAlign: 'center' }}>
        &copy; {date} - Adrian Apan | Built with Next JS
      </Typography>
    </Box>
  )
}

export default Footer
