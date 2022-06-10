import React from 'react'
import isEqual from 'fast-deep-equal'
import introduce from 'styles/introduce.module.scss'
import { gsap } from 'gsap'

const Introduce: React.FC = () => {
  const typingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    gsap.to(typingRef.current, {
      text: 'FrontEnd Developer',
      duration: 2,
      delay: 0.5,
      ease: 'none',
    })

    gsap
      .timeline({ repeat: -1 })
      .to(typingRef.current, {
        borderRight: '2px solid rgba(51, 51, 51, 0)',
        ease: 'steps(1)',
      })
      .to(typingRef.current, {
        borderRight: '2px solid rgba(51, 51, 51, 1)',
        ease: 'steps(1)',
      })
      .delay(2.5)
  }, [])

  return (
    <div className={introduce.introduce}>
      <div className={introduce.introduce__content}>
        <h2>TitleTitleTitleTitle</h2>
        <h1 ref={typingRef}></h1>
        <h3>내용내용내용내용내용내용내용내용</h3>
      </div>
    </div>
  )
}

export default React.memo(Introduce, isEqual)
