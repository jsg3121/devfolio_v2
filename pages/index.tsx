import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from 'components'
import { AboutMe, Introduce, ScrollController, Skills } from 'container'
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
    } else if (windowWidth < 680 && windowWidth >= 420) {
      document.querySelector('html')?.setAttribute('data-mode', 'tablet')
    } else {
      document.querySelector('html')?.setAttribute('data-mode', 'mobile')
    }
  }, [])

  return (
    <div className={background.container}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ fov: 50, position: [0, 0, 90], near: 20, far: 0 }}
      >
        <Bubbles />
        <EffectComposer multisampling={0}>
          <SSAO
            samples={31}
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.1}
            color="blue"
          />
        </EffectComposer>
        <Html>
          <Introduce />
          <AboutMe />
          <Skills />
        </Html>
      </Canvas>
      {/*
        <Contact />
        <Footer /> */}
    </div>
  )
}

export default Home
