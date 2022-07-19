import { gsap } from 'gsap'
import component from 'styles/components.module.scss'

export const contactMotion = () => {
  const container = document.querySelector('.container')
  const contact = document.querySelector('#contact')
  const icons = gsap.utils.toArray<Element>('.contact__more-info ul li')
  const scroll = document.querySelector('#scroll_icon')

  icons.forEach((icon, index) => {
    gsap.to(icon, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.3,
      ease: 'back.out(1.5)',
      delay: index * 0.15,
      scrollTrigger: {
        trigger: contact,
        start: 'top center-=20%',
        end: 'top top',
        scroller: container,
      },
    })
  })

  gsap.to(scroll, {
    opacity: 0,
    scrollTrigger: {
      trigger: contact,
      start: 'top-=10% center',
      end: 'top center',
      scroller: container,
      scrub: true,
    },
  })
}
