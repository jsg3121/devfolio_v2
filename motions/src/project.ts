import { gsap } from 'gsap'

export const projectMotion = () => {
  const container = document.querySelector('.container')
  const contents = gsap.utils.toArray<Element>('.project__content')
  const backgrounds = gsap.utils.toArray<Element>('.project__title--main')
  const names = gsap.utils.toArray<Element>('.project__title--main div p')
  const titles = gsap.utils.toArray<Element>('#project .project__title--sub h1')

  contents.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        scroller: container,
      },
    })

    gsap.to(content, {
      background: `rgba(0,0,0,0)`,
      duration: 0.4,
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: '+=50%',
        scrub: true,
        scroller: container,
      },
    })

    gsap.to(backgrounds[index], {
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: '+=50%',
        scrub: true,
        scroller: container,
      },
    })
  })

  titles.forEach((title, index) => {
    gsap.to(title, {
      y: '-100%',
      opacity: 0,
      scrollTrigger: {
        trigger: title,
        scrub: true,
        start: `${50 + index * 10}% center`,
        end: '+=50%',
        scroller: container,
      },
    })
  })

  names.forEach((name, index) => {
    gsap.to(name, {
      y: '0',
      opacity: 1,
      scrollTrigger: {
        trigger: name,
        scrub: true,
        start: `${(index / names.length) * 200 + 3}%`,
        end: `+=50%`,
        scroller: container,
      },
    })
  })
}

export const articleMotion = () => {
  const container = document.querySelector('.container')
  const items = gsap.utils.toArray<Element>('.project__list-title')
  const titles = gsap.utils.toArray<Element>('.project__list-title h1')
  const descriptions = gsap.utils.toArray<Element>('.project__list-title h2')

  items.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top top+=10%',
        end: '+=30%',
        scrub: true,
        pin: true,
        pinSpacing: false,
        scroller: container,
      },
    })
  })

  titles.forEach((title) => {
    gsap.to(title, {
      opacity: 0,
      scrollTrigger: {
        trigger: title,
        start: 'top top',
        end: '+=15%',
        scrub: true,
        scroller: container,
      },
    })
  })

  descriptions.forEach((description) => {
    gsap.to(description, {
      opacity: 0,
      scrollTrigger: {
        trigger: description,
        start: 'top top+=30%',
        end: '+=15%',
        scrub: true,
        scroller: container,
      },
    })
  })
}
