import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { Capacity, Percentage } from '../../progress'

const Progress = styled.div<Pick<Skills, 'grade'>>`
  height: 0.9rem;
  width: calc(100% - 10rem);
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
  box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 419px) {
    width: calc(100% - 7rem);
    margin: 0 0.7rem;
  }
`

const ProgressBar: React.FC<Omit<Skills, 'path' | 'name'>> = (props) => {
  const { capacity, grade } = props

  return (
    <>
      <Progress grade={grade}>
        <Capacity capacity={capacity} grade={grade} />
      </Progress>
      <Percentage capacity={capacity} />
    </>
  )
}

export default React.memo(ProgressBar, isEqual)
