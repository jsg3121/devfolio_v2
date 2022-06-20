import React from 'react'
import isEqual from 'fast-deep-equal'
import { MeshProps } from '@react-three/fiber'

const Floor: React.FC<MeshProps> = (props) => {
  const {} = props

  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  )
}

export default React.memo(Floor, isEqual)
