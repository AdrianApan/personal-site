import { Box } from '@material-ui/core'
import useStyles from './Hero.styles'

interface Props {
  children: React.ReactNode
}

const Hero = ({ children }: Props) => {
  const classes = useStyles()

  return <Box className={classes.hero}>{children}</Box>
}

export default Hero
