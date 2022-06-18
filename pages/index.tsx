import { AboutMe, Contact, Footer, Introduce, Project, Skills } from 'container'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import type { NextPage } from 'next'
import React from 'react'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

// const goSection = (idx: number) => {
//   gsap.to(window, {
//     scrollTo: {
//       y: idx * window.innerHeight,
//       autoKill: false,
//     },
//     duration: 1,
//   })
// }

const Home: NextPage = () => {
  // React.useEffect(() => {
  //   const sections = gsap.utils.toArray(
  //     `.scoll_snap section`
  //   ) as Array<gsap.DOMTarget>

  //   sections.forEach((section, idx: number) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       onEnter: () => goSection(idx),
  //     })

  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: 'bottom bottom',
  //       onEnterBack: () => goSection(idx),
  //     })
  //   })

  //   return
  // }, [])

  React.useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 680) {
      document.querySelector('html')?.setAttribute('aria-mode', 'desktop')
    } else {
      document.querySelector('html')?.setAttribute('aria-mode', 'mobile')
    }
  }, [])

  return (
    <div className="scoll_snap">
      <Introduce />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
