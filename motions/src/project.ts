import { gsap } from 'gsap'

export const projectMotion = () => {
  const container = document.querySelector('.container')
  const contents = gsap.utils.toArray<Element>('.project__content')
  const backgrounds = gsap.utils.toArray<Element>('.project__title--main')
  const articles = gsap.utils.toArray<Element>('#project article')

  contents.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: 'top+=100%',
        scrub: true,
        pin: content,
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

  articles.forEach((article) => {
    const titles = gsap.utils.toArray<Element>(
      `.${article.getAttribute('class')} .project__title--sub h1`
    )

    const names = gsap.utils.toArray<Element>(
      `.${article.getAttribute('class')} .project__title--main div p`
    )

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
        start: 'top top',
        end: 'bottom',
        scrub: true,
        pin: true,
        pinSpacing: false,
        scroller: container,
      },
    })
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
  descriptions.forEach((description) => {
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
  })
}
