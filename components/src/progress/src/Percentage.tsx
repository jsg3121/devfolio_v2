import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import components from 'styles/components.module.scss'

interface PercentageProps {
  capacity: number
}

const Percentage: React.FC<PercentageProps> = (props) => {
  const { capacity } = props

  const percentRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    const container = document.querySelector('.container')
    gsap.to(percentRef.current, {
      textContent: capacity,
      duration: 1,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: document.querySelector('.skill__content'),
        start: 'top-=100% top',
        scroller: container,
      },
    })
  }, [capacity])

  return (
    <div>
      <p className={components['progress__percentage-text']} ref={percentRef}>
        0
      </p>
    </div>
  )
}

export default React.memo(Percentage, isEqual)
