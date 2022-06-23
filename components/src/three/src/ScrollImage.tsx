import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { ImageItem } from '..'

interface ScrollProps {}

const ScrollImage: React.FC<ScrollProps> = () => {
  const { width, height } = useThree((state) => state.viewport)

  return (
    <Scroll>
      <ImageItem
        url="/profile_2.webp"
        scale={[Math.max(width / 28, 3.6), Math.max(width / 28, 3.6), 1]}
        position={[-width * 0.1, -height * 0.9, 0]}
      />
      <ImageItem
        url="/profile.webp"
        scale={[Math.max(width / 25, 4), Math.max(width / 25, 4), 1]}
        position={[width / 3.1, -height * 1.17, 0]}
      />
    </Scroll>
  )
}

export default React.memo(ScrollImage, isEqual)
