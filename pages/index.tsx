import { Introduce, Scroll } from 'container'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const Home: NextPage = () => {
  return (
    <div>
      <Introduce />
      <Scroll />
    </div>
  )
}

export default Home
