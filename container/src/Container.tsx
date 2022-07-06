import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import React from 'react'
import Scrollbar from 'smooth-scrollbar'
import background from 'styles/background.module.scss'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Introduce from './Introduce'
import Project from './Project'
import Skills from './Skills'
import WhoAmI from './WhoAmI'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const Container: React.FC = () => {
  React.useEffect(() => {
    const container = document.querySelector('.container') as any
    const content = document.querySelector('.content') as any

    const scrollbar = Scrollbar.init(content, {
      damping: 0.05,
    })
    scrollbar.track.yAxis.element.remove()

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        if (arguments.length && value) {
          scrollbar.scrollTop = value
        }
        return scrollbar.scrollTop
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    scrollbar.addListener(ScrollTrigger.update)
  }, [])

  return (
    <div className={`${background.content} content`}>
      <div className="container">
        <Introduce />
        <AboutMe />
        <Skills />
        <Project />
        <WhoAmI />
        <Contact />
      </div>
    </div>
  )
}

export default React.memo(Container, isEqual)
