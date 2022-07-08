import { Container, Particles } from 'container'
import type { NextPage } from 'next'
import React from 'react'
import background from 'styles/background.module.scss'

const Home: NextPage = () => {
  React.useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 680) {
      document.querySelector('html')?.setAttribute('data-mode', 'desktop')
    } else if (windowWidth < 680 && windowWidth >= 420) {
      document.querySelector('html')?.setAttribute('data-mode', 'tablet')
    } else {
      document.querySelector('html')?.setAttribute('data-mode', 'mobile')
    }
  }, [])

  return (
    <>
      <div className={background.container}>
        <Particles />
      </div>
      <Container />
    </>
  )
}

export default Home
