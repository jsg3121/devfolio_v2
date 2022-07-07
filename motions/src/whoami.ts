import { gsap } from 'gsap'

export const whoAmIMotion = () => {
  const container = document.querySelector('.container')
  const whoAmI = document.querySelector('#whoami')
  const cards = gsap.utils.toArray<Element>('.whoami__teller')

  cards.forEach((card, index) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: index * 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: whoAmI,
        start: 'top top',
        end: 'top top',
        scroller: container,
      },
    })
  })
}
