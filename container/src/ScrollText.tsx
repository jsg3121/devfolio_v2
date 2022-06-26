import { Scroll } from '@react-three/drei'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { AboutMe, Skills } from '..'
import Introduce from './Introduce'

const ScrollText: React.FC = () => {
  return (
    <Scroll html>
      <Introduce />
      <AboutMe />
      <Skills />
      {/* <Project /> */}
    </Scroll>
  )
}

export default React.memo(ScrollText, isEqual)
