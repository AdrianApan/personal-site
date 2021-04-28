import useStyles from './Default.styles'

import Header from '../../containers/Header'
import Footer from '../../containers/Footer'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.content}>{children}</main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  )
}

export default DefaultLayout
