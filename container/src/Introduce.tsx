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
