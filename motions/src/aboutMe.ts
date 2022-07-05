import { gsap } from 'gsap'

export const aboutMeMotions = () => {
  const container = document.querySelector('.container')
  const profiles = gsap.utils.toArray<Element>('.profile')

  profiles.forEach((profile) => {
    gsap.to(profile, {
      y: '20vh',
      duration: 1.3,
      delay: 0.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: profile,
        start: 'top center',
        scroller: container,
        markers: true,
      },
    })
  })
}
