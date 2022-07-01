import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import styled from 'styled-components'
import project from 'styles/project.module.scss'
import ProjectDetail from './ProjectDetail'

interface ProjectArticleProps {
  data: ProjectTypes
}

interface ArticleProps {
  background: string
}

const ArticleContent = styled.div<ArticleProps>`
  background: ${(props) => {
      return `url(${props.background})`
    }}
    center/contain no-repeat;
`

const ProjectArticle: React.FC<ProjectArticleProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    const container = document.querySelector('.container')
    const contents = gsap.utils.toArray<Element>('.project__content')
    const backgrounds = gsap.utils.toArray<Element>('.project__title--main')
    const names = gsap.utils.toArray<Element>('.project__title--main div p')

    const titles = gsap.utils.toArray<Element>(
      '#project .project__title--sub h1'
    )

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
  }, [])

  return (
    <article>
      <div className={`${project.project__content} project__content`}>
        <ArticleContent
          className={`${project['project__title--main']} project__title--main`}
          background={data.thumbnail}
        >
          <div>
            {data.name.split('').map((word, index) => {
              return word === ' ' ? (
                <p key={index}>&nbsp;</p>
              ) : (
                <p key={index}>{word}</p>
              )
            })}
          </div>
        </ArticleContent>
        <div
          className={`${project['project__title--sub']} project__title--sub`}
        >
          {`Project .0${data.index}`.split('').map((word, index) => {
            return word === ' ' ? (
              <h1 key={index}>&nbsp;</h1>
            ) : (
              <h1 key={index}>{word}</h1>
            )
          })}
        </div>
      </div>
      <div className={project.project__list}>
        {data && <ProjectDetail data={data} />}
      </div>
    </article>
  )
}

export default React.memo(ProjectArticle, isEqual)
