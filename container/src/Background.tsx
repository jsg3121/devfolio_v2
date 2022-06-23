import { ContactShadows, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import background from 'styles/background.module.scss'
import AboutMe from './AboutMe'
import Introduce from './Introduce'

const Background: React.FC = () => {
  return (
    <div className={background.container}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 50, position: [0, 0, 80], near: 20, far: 150 }}
      >
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 100, 100]} intensity={20} color="blue" />
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
            color="blue"
          />
        </EffectComposer>
        <ScrollControls pages={2}>
          <Scroll html>
            <Introduce />
            <AboutMe />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default React.memo(Background, isEqual)
