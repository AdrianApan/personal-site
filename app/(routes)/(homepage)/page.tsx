import { HomeHero } from '@/components/Hero'
import Overview from '@/(routes)/(homepage)/components/Overview'
import Projects from '@/(routes)/(homepage)/components/Projects'

import Connect from '@/(routes)/(homepage)/components/Connect'

const Homepage = async () => (
  <>
    <HomeHero />
    <Overview />
    <Projects />
    <Connect />
  </>
)

export default Homepage
