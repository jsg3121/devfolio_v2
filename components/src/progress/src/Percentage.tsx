import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import components from 'styles/components.module.scss'
import skills from 'styles/skills.module.scss'

interface PercentageProps {
  capacity: number
}

const Percentage: React.FC<PercentageProps> = (props) => {
  const { capacity } = props

  const percentRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    const timeline = () => {
      gsap.from(percentRef.current, {
        textContent: 0,
        duration: 1,
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: `${skills.skills__content}`,
          start: () => window.innerHeight * 2,
        },
      })
    }

    return () => timeline()
  }, [])

  return (
    <p className={components['progress__percentage-text']} ref={percentRef}>
      {capacity}
    </p>
  )
}

export default React.memo(Percentage, isEqual)
