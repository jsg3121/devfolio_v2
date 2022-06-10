import { AboutMe, Introduce, Skills } from 'container'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

const goSection = (idx: number) => {
  gsap.to(window, {
    scrollTo: {
      y: idx * innerHeight,
      autoKill: false,
    },
    duration: 1,
  })
}

const Home: NextPage = () => {
  React.useEffect(() => {
    const sections = gsap.utils.toArray(
      `.scoll_snap section`
    ) as Array<gsap.DOMTarget>

    sections.forEach((section, idx: number) => {
      ScrollTrigger.create({
        trigger: section,
        onEnter: () => goSection(idx),
      })

      ScrollTrigger.create({
        trigger: section,
        start: 'bottom bottom',
        onEnterBack: () => goSection(idx),
      })
    })
  }, [])

  return (
    <div className="scoll_snap">
      <Introduce />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default Home
