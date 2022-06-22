import { ContactShadows, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
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
          <ScrollControls pages={0} damping={100}>
            <Scroll html>
              <Introduce />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </React.Suspense>
      <AboutMe />
      <Skills />
      <Project />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home
