import { ContactShadows, Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles, Content } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import background from 'styles/background.module.scss'

const Background: React.FC = () => {
  return (
    <div className={background.container}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 50, position: [0, 0, 80], near: 20, far: 150 }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 100, 100]} intensity={20} color="red" />
        <Bubbles />
        <ContactShadows
          position={[0, -30, 0]}
          opacity={0.6}
          scale={130}
          blur={1}
          far={40}
        />
        <EffectComposer multisampling={0}>
          <SSAO
            samples={31}
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.1}
            color="red"
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default React.memo(Background, isEqual)
