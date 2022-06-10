import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { gsap } from 'gsap'
import AboutMe from './AboutMe'
import Skills from './Skills'

const ScrollTriggerContainer = styled.div`
  width: 200vw;
  height: 100vh;
  will-change: transform;

  & > div {
    height: 100vh;
    display: flex;
    align-items: flex-start;
  }
`

const Scroll: React.FC = () => {
  const scrollTriggerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    gsap.to(scrollTriggerRef.current, {
      xPercent: -100,
      x: () => innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: 'top top',
        end: () => innerWidth * 2,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: true,
      },
    })
  }, [])

  return (
    <ScrollTriggerContainer ref={scrollTriggerRef}>
      <div>
        <AboutMe />
        <Skills />
      </div>
    </ScrollTriggerContainer>
  )
}

export default React.memo(Scroll, isEqual)
