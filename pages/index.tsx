import { Canvas } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from 'components'
import { AboutMe, Introduce, Project, Skills } from 'container'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import type { NextPage } from 'next'
import React from 'react'
import Scrollbar from 'smooth-scrollbar'
import background from 'styles/background.module.scss'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

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

  React.useEffect(() => {
    const container = document.querySelector('.container') as any
    const content = document.querySelector('.content') as any

    const scrollbar = Scrollbar.init(content, {
      damping: 0.05,
      delegateTo: document,
    })
    scrollbar.track.yAxis.element.remove()

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        if (arguments.length && value) {
          scrollbar.scrollTop = value
        }
        return scrollbar.scrollTop
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    scrollbar.addListener(ScrollTrigger.update)
  }, [])

  return (
    <>
      <div className={background.container}>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true }}
          camera={{ fov: 50, position: [0, 0, 90], near: 20, far: 0 }}
          className={background.background}
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
        </Canvas>
      </div>
      <div className={`${background.content} content`}>
        <div className="container">
          <Introduce />
          <AboutMe />
          <Skills />
          <Project />
        </div>
      </div>
    </>
  )
}

export default Home
