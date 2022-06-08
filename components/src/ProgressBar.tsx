import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { gsap } from 'gsap'

interface ProgressBarProps {
  capacity: number
  grade: 1 | 2 | 3
}

interface ProgressProps {
  grade: 1 | 2 | 3
}

interface CapacityProps {
  capacity: number
  grade: 1 | 2 | 3
}

const Progress = styled.div<ProgressProps>`
  height: 0.9rem;
  width: 11rem;
  margin: 0 1rem;
  border-radius: 0.2rem;
  background-color: ${(props) => {
    switch (props.grade) {
      case 1:
        return 'rgba(255, 195, 19, 0.43)'
      case 2:
        return 'rgba(137, 243, 90,0.43)'
      case 3:
        return 'rgba(114, 161, 255, 0.43)'
    }
  }};
  display: flex;
  align-items: center;
`

const Capacity = styled.i<CapacityProps>`
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

const Percentage = styled.p``

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { capacity, grade } = props
  const progressRef = React.useRef<HTMLElement>(null)
  const percentRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    gsap.timeline().to(progressRef.current, {
      width: `${capacity}%`,
      duration: 1,
    })
  }, [capacity])

  React.useEffect(() => {
    gsap.timeline().from(percentRef.current, {
      textContent: 0,
      duration: 1,
      snap: { textContent: 1 },
      stagger: 1,
    })
  }, [])

  return (
    <Progress grade={grade}>
      <Capacity capacity={capacity} grade={grade} ref={progressRef} />
      <Percentage ref={percentRef}>100</Percentage>
    </Progress>
  )
}

export default React.memo(ProgressBar, isEqual)
