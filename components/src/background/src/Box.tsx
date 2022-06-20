import { MeshProps } from '@react-three/fiber'
import isEqual from 'fast-deep-equal'
import React from 'react'

const Box: React.FC<MeshProps> = (props) => {
  const {} = props

  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhongMaterial color={'#ffffff'} />
    </mesh>
  )
}

export default React.memo(Box, isEqual)
