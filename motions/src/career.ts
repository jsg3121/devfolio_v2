import { gsap } from 'gsap'

export const capacityMotion = (ref?: HTMLElement, capacity?: number) => {
  if (ref) {
    const container = document.querySelector('.container')

    gsap.to(ref, {
      duration: 1,
      scaleX: `${capacity}%`,
      scrollTrigger: {
        trigger: document.querySelector('.skill__content'),
        start: 'top-=100% top',
        scroller: container,
      },
    })
  }
}

export const careerMotion = () => {
  const container = document.querySelector('.container')
  const items = gsap.utils.toArray<Element>('.career__list-item li')

  items.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: document.querySelector('.career__content'),
        start: 'top top+=30%',
        end: 'bottom bottom',
        scroller: container,
      },
    })
  })
}
