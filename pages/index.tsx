import { AboutMe, Header, Introduce, Skills } from 'container'
import type { NextPage } from 'next'
import React from 'react'
import { gsap } from 'gsap'
import TextPlugin from 'gsap/dist/TextPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const Home: NextPage = () => {
  return (
    <div>
      <Introduce />
      <Header />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default Home
