import { gsap } from 'gsap'

export const projectMotion = (data: ProjectTypes) => {
  const targetArticle = data.name.trim().replace(' ', '')

  const container = document.querySelector('.container')
  const content = document.querySelector(`.${targetArticle} .project__content`)
  const backgrounds = gsap.utils.toArray<Element>(
    `.${targetArticle} .project__title--background`
  )
  const titles = gsap.utils.toArray<Element>(
    `.${targetArticle} .project__title--sub h1`
  )
  const names = gsap.utils.toArray<Element>(
    `.${targetArticle} .project__title--main p`
  )
  const item = document.querySelector(`.${targetArticle} .project__list-title`)
  const description = document.querySelector(
    `.${targetArticle} .project__list-title h2`
  )

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
    scrollTrigger: {
      trigger: content,
      start: 'top top',
      end: '+=50%',
      scrub: true,
      scroller: container,
    },
  })

  gsap.to(backgrounds, {
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

  titles.forEach((title, index) => {
    gsap.to(title, {
      y: '-100%',
      opacity: 0,
      scrollTrigger: {
        trigger: title,
        scrub: true,
        start: `center center-=${index * 15}`,
        end: 'center',
        scroller: container,
      },
    })
  })

  names.forEach((name, index) => {
    gsap.to(name, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: name,
        start: `bottom top-=${index * 15}`,
        end: `bottom`,
        scrub: 2,
        scroller: container,
      },
    })
  })

  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top top',
      end: 'bottom',
      scrub: true,
      pin: true,
      pinSpacing: false,
      scroller: container,
    },
  })

  gsap.to(description, {
    opacity: 0,
    y: '-100%',
    scrollTrigger: {
      trigger: description,
      start: 'top top+=5%',
      end: '+=15%',
      scrub: true,
      scroller: container,
    },
  })
}

export const articleMotion = (data: ProjectTypes) => {
  const targetArticle = data.name.trim().replace(' ', '')
  const container = document.querySelector('.container')
  const item = document.querySelector(`.${targetArticle} .project__list-title`)
  const titles = gsap.utils.toArray<Element>(
    `.${targetArticle} .project__list-title h1`
  )
  const description = document.querySelector(
    `.${targetArticle} .project__list-title h2`
  )
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top top',
      end: 'bottom',
      scrub: true,
      pin: true,
      pinSpacing: false,
      scroller: container,
    },
  })
  // titles.forEach((title) => {
  //   gsap.to(title, {
  //     opacity: 0,
  //     y: '-100%',
  //     scrollTrigger: {
  //       trigger: title,
  //       start: 'top+=230% top',
  //       end: '+=15%',
  //       scrub: true,
  //       scroller: container,
  //     },
  //   })
  // })
  gsap.to(description, {
    opacity: 0,
    y: '-100%',
    scrollTrigger: {
      trigger: description,
      start: 'top top+=5%',
      end: '+=15%',
      scrub: true,
      scroller: container,
    },
  })
}
