import { gsap } from 'gsap'

export const aboutMeMotions = () => {
  const container = document.querySelector('.container')
  const content = document.querySelector('#aboutMe')
  const profiles = gsap.utils.toArray<Element>('.profile')

  profiles.forEach((profile, index) => {
    gsap.to(profile, {
      yPercent: -100,
      opacity: 1,
      duration: 1.3,
      delay: 0.3 * index,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: content,
        start: 'top+=30% center+=20%',
        scroller: container,
      },
    })
  })
}
