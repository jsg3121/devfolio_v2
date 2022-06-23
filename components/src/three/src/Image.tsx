import React from 'react'
import isEqual from 'fast-deep-equal'
import { GroupProps, useFrame, useThree } from '@react-three/fiber'
import { Image, RoundedBox, useIntersect } from '@react-three/drei'
import { MathUtils } from 'three'

interface ImageProps extends GroupProps {
  url: string
  scale: any
}

const ImageItem: React.FC<ImageProps> = (props) => {
  const { scale, url } = props

  const visible = React.useRef(false)

  const imageRef = useIntersect(
    (isVisible) => (visible.current = isVisible)
  ) as any

  const { height } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    imageRef.current.position.y = MathUtils.damp(
      imageRef.current.position.y,
      visible.current ? 0 : -height / 11 + 1,
      4,
      delta
    )
    imageRef.current.material.zoom = MathUtils.damp(
      imageRef.current.material.zoom,
      visible.current ? 1 : 2,
      4,
      delta
    )
  })
  return (
    <group {...props}>
      <Image ref={imageRef} scale={scale} url={url} />
    </group>
  )
}

export default React.memo(ImageItem, isEqual)
