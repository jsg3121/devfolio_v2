import isEqual from 'fast-deep-equal'
import { capacityMotion } from 'motions'
import React from 'react'
import styled from 'styled-components'

interface CapacityProps extends Omit<SkillsProps, 'path' | 'name'> {}

const CapacityContainer = styled.i<CapacityProps>`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0.2rem;
  will-change: transform;
  transform-origin: left center;
  transform: scale(0, 1);
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

const Capacity: React.FC<CapacityProps> = (props) => {
  const { capacity, grade } = props

  const progressRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (progressRef.current) {
      capacityMotion(progressRef.current, capacity)
    }
    return () => capacityMotion()
  }, [capacity])

  return (
    <CapacityContainer capacity={capacity} grade={grade} ref={progressRef} />
  )
}

export default React.memo(Capacity, isEqual)
