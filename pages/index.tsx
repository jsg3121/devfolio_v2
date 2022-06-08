import { AboutMe, Header, Skills } from 'container'
import type { NextPage } from 'next'
import React from 'react'
import { useScroll } from 'hook/scroll'

const Home: NextPage = () => {
  const { scrollY } = useScroll()

  React.useEffect(() => {
    console.log(scrollY)
    if (scrollY > window.innerHeight - 200) {
    }
  }, [scrollY])

  React.useEffect(() => {}, [])

  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default Home
