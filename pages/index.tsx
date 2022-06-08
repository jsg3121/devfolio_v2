import { AboutMe, Header, Skills } from 'container'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
    </>
  )
}

export default Home
