import { Box, Button, Typography } from '@material-ui/core'
import Link from 'next/link'

import useStyles from './SectionHeader.styles'

interface Props {
  title: string
  link: string
  label: string
}

const SectionHeader = ({ title, link, label }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.link}>
        <Link href={link}>
          <Button>{label}</Button>
        </Link>
      </Box>
    </div>
  )
}

export default SectionHeader
