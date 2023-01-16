import useStyles from './SocialLink.styles'

interface Props {
  label: string
  link: string
  icon: React.ReactNode
}

const SocialLink = ({ label, link, icon }: Props) => {
  const classes = useStyles()

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}>
      {icon} {label}
    </a>
  )
}

export default SocialLink
