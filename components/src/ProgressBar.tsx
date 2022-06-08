import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

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
  height: 0.8rem;
  width: 11rem;
  margin: 0 1rem;
  border-radius: 0.2rem;
  overflow: hidden;
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
`

const Capacity = styled.i<CapacityProps>`
  width: ${(props) => props.capacity}%;
  height: 100%;
  display: block;
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

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { capacity, grade } = props

  return (
    <Progress grade={grade}>
      <Capacity capacity={capacity} grade={grade} />
    </Progress>
  )
}

export default React.memo(ProgressBar, isEqual)
