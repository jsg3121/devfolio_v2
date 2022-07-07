import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import introduce from 'styles/introduce.module.scss'

const Introduce: React.FC = () => {
  const typingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    gsap.to(typingRef.current, {
      text: 'FrontEnd Developer',
      duration: 2,
      delay: 1,
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
    <section className={introduce.introduce}>
      <div className={introduce.introduce__content}>
        <h1>안녕하세요.</h1>
        <h2 ref={typingRef}></h2>
        <h3>장선규 입니다.</h3>
        <h3>방문해주셔서 감사합니다.</h3>
      </div>
    </section>
  )
}

export default React.memo(Introduce, isEqual)
