import React from 'react'
import isEqual from 'fast-deep-equal'
import { MeshProps } from '@react-three/fiber'

const LightBlub: React.FC<MeshProps> = (props) => {
  const {} = props

  return (
    <>
      <mesh {...props}>
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 30, 10]} />
        <meshPhongMaterial emissive={'yellow'} />
      </mesh>
    </>
  )
}

export default React.memo(LightBlub, isEqual)
