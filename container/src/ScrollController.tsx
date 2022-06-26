import React from 'react'
import isEqual from 'fast-deep-equal'
import { ScrollControls, useScroll } from '@react-three/drei'
import ScrollText from './ScrollText'
import { ScrollImage } from 'components'
import { useThree } from '@react-three/fiber'

const ScrollController: React.FC = () => {
  const scroll = useScroll()

  React.useEffect(() => {
    console.log(scroll)
  }, [scroll])

  return (
    <ScrollControls pages={3} damping={10}>
      <ScrollText />
      <ScrollImage />
    </ScrollControls>
  )
}

export default React.memo(ScrollController, isEqual)
