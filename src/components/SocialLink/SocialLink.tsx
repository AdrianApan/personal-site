import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 700,
    color: 'inherit',

    '& > svg': {
      marginRight: theme.spacing(1),
    },

    '&:hover': {
      textDecoration: 'underline',
    },

    '&:visited, &:focus': {
      color: 'inherit',
    },
  },
}))

interface Props {
  label: string
  link: string
  icon: React.ReactNode
}

const SocialLink = ({ label, link, icon }: Props) => {
  const classes = useStyles()

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      {icon} {label}
    </a>
  )
}

export default SocialLink
