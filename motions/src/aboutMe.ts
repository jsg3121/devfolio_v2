import { gsap } from 'gsap'

export const aboutMeMotions = () => {
  const container = document.querySelector('.container')
  const section = document.querySelector('.aboutMe')
  const profile1 = document.querySelector('.about__content-profile')
  const profile2 = document.querySelector('.about__content-profile2')

  // gsap.to(section, {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top+=100% top',
  //     end: '+=50%',
  //     scrub: true,
  //     scroller: container,
  //     markers: true,
  //   },
  // })
}
