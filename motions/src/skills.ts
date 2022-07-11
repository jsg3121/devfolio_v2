import { gsap } from 'gsap'

export const capacityMotion = (ref?: HTMLElement, capacity?: number) => {
  if (ref) {
    const container = document.querySelector('.container')

    gsap.to(ref, {
      duration: 1,
      scaleX: `${capacity}%`,
      scrollTrigger: {
        trigger: document.querySelector('.skill__content'),
        start: () => window.innerHeight * 2,
        end: () => window.innerHeight * 2,
        scroller: container,
      },
    })
  }
}

export const percentMotion = (data?: Array<CareerProps>) => {
  const container = document.querySelector('.container')
  const texts = gsap.utils.toArray<Element>('.progress__percentage-text')

  texts.forEach((text) => {
    gsap.from(text, {
      textContent: 0,
      duration: 1,
      snap: { textContent: 1 },
      stagger: 1,
      scrollTrigger: {
        trigger: document.querySelector('.skill__content'),
        start: () => window.innerHeight * 2,
        end: () => window.innerHeight * 2,
        scroller: container,
      },
    })
  })
}
