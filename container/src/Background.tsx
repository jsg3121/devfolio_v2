import React from 'react'
import isEqual from 'fast-deep-equal'
import background from 'styles/background.module.scss'
import { Canvas } from '@react-three/fiber'
import { Box, Control, Drag, Floor, LightBlub } from 'components'

const Background: React.FC = () => {
  return (
    <div className={background.container}>
      <Canvas
        shadows={true}
        className={background.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <LightBlub position={[0, 3, 0]} />
        <Drag>
          <Box rotation={[3, 0.2, 0]} />
        </Drag>
        <Control />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}

export default React.memo(Background, isEqual)
