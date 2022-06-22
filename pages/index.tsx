import {
  ContactShadows,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
} from '@react-three/drei'
import { Canvas, RootState } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from 'components'
import { AboutMe, Contact, Footer, Introduce, Project, Skills } from 'container'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import type { NextPage } from 'next'
import React from 'react'
import background from 'styles/background.module.scss'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

const Home: NextPage = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const handleCreate = React.useCallback((state: RootState) => {
    if (scrollRef.current) {
      if (state.events.connect) state.events.connect(scrollRef.current)
    }
  }, [])

  React.useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 680) {
      document.querySelector('html')?.setAttribute('data-mode', 'desktop')
    } else {
      document.querySelector('html')?.setAttribute('data-mode', 'mobile')
    }
  }, [])

  return (
    <div className={background.container}>
      <React.Suspense>
        <Canvas
          onCreated={handleCreate}
          shadows
          dpr={[1, 2]}
          gl={{ antialias: false }}
          camera={{ fov: 50, position: [0, 0, 80], near: 20, far: 150 }}
        >
          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={1.5} />
          <pointLight position={[100, 100, 100]} intensity={50} color="blue" />
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
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.0}
            rotateSpeed={0.3}
            dampingFactor={0.5}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 1.7}
            makeDefault
          />
          <ScrollControls pages={7.3} damping={100}>
            <Scroll html>
              <Introduce />
              <AboutMe />
              <Skills />
              <Project />
              <Contact />
              <Footer />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </React.Suspense>
    </div>
  )
}

export default Home
