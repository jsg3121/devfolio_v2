import { gsap } from 'gsap'

export const contactMotion = () => {
  const container = document.querySelector('.container')
  const contact = document.querySelector('#contact')
  const icons = gsap.utils.toArray<Element>('.contact__more-info ul li')

  icons.forEach((icon, index) => {
    gsap.to(icon, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.3,
      ease: 'back.out(1.5)',
      delay: index * 0.15,
      scrollTrigger: {
        trigger: contact,
        start: 'top top',
        end: 'top top',
        scroller: container,
      },
    })
  })
}
