import React from 'react'
import isEqual from 'fast-deep-equal'
import { useThree } from '@react-three/fiber'
import { Scroll } from '@react-three/drei'
import { AboutMe } from 'container'
import Introduce from './Introduce'

const ScrollText: React.FC = () => {
  const { width, height } = useThree((state) => state.viewport)

  return (
    <Scroll html>
      <Introduce />
      <AboutMe />
    </Scroll>
  )
}

export default React.memo(ScrollText, isEqual)
