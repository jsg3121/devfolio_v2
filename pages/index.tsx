import { AboutMe, Introduce, Skills } from 'container'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { useScroll } from 'hook'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

const goSection = (idx: number) => {
  gsap.to(window, {
    scrollTo: {
      y: idx * window.innerHeight,
      autoKill: false,
    },
    duration: 1,
  })
}

const Home: NextPage = () => {
  const [isScroll, setIsScroll] = React.useState<boolean>(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  React.useEffect(() => {
    const sections = gsap.utils.toArray(
      `.scoll_snap section`
    ) as Array<gsap.DOMTarget>

    const scrolling = () => {
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
    }

    return () => scrolling()
  }, [])

  return (
    <div className="scoll_snap" ref={scrollRef}>
      <Introduce />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default Home
