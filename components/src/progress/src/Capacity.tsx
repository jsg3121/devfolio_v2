import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import styled from 'styled-components'
import skills from 'styles/skills.module.scss'

interface CapacityProps {
  capacity: number
  grade: 1 | 2 | 3
}

const CapacityContainer = styled.i<CapacityProps>`
  width: 0;
  height: 100%;
  display: block;
  border-radius: 0.2rem;
  background-color: ${(props) => {
    switch (props.grade) {
      case 1:
        return 'rgba(255, 195, 19, 0.7)'
      case 2:
        return 'rgba(137, 243, 90,0.7)'
      case 3:
        return 'rgba(114, 161, 255, 0.7)'
    }
  }};
`
const percentCount = (ref?: HTMLElement, capacity?: number) => {
  if (ref) {
    gsap.to(ref, {
      width: `${capacity}%`,
      duration: 1,
      scrollTrigger: {
        trigger: `${skills.skills}`,
        start: () => window.innerWidth * 2,
      },
    })
  }
}

const Capacity: React.FC<CapacityProps> = (props) => {
  const { capacity, grade } = props

  const progressRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (progressRef.current) {
      percentCount(progressRef.current, capacity)
    }
    return () => percentCount()
  }, [capacity])

  return (
    <CapacityContainer capacity={capacity} grade={grade} ref={progressRef} />
  )
}

export default React.memo(Capacity, isEqual)
