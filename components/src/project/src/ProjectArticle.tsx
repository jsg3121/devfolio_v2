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
  background: rgba(0, 0, 0, 0.5)
    ${(props) => {
      return `url(${props.background})`
    }}
    center/contain no-repeat;
`

const ProjectArticle: React.FC<ProjectArticleProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    const container = document.querySelector('.container')
    const contents = gsap.utils.toArray<Element>('.project__content')
    const titles = gsap.utils.toArray<Element>('#project .project__title h1')
    const numbers = gsap.utils.toArray<Element>('#project .project__title h2')

    contents.forEach((content) => {
      gsap.to(content, {
        scrollTrigger: {
          trigger: content,
          start: 'top top',
          end: '+=50%',
          scrub: true,
          pin: true,
          scroller: container,
        },
      })
    })

    titles.forEach((title) => {
      gsap.to(title, {
        y: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: title,
          scrub: true,
          start: 'top ',
          end: '+=20%',
          scroller: container,
        },
      })
    })

    numbers.forEach((number) => {
      gsap.to(number, {
        y: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: number,
          scrub: true,
          start: '+=60% top',
          end: '+=20%',
          scroller: container,
        },
      })
    })
  }, [])

  return (
    <article>
      <ArticleContent
        className={`${project.project__content} project__content`}
        background={data.thumbnail}
      >
        <div className={`${project.project__title} project__title`}>
          <h1>Porject</h1>
          <h2>.0{data.index}</h2>
        </div>
      </ArticleContent>
      <div className={project.project__list}>
        {data && <ProjectDetail data={data} />}
      </div>
    </article>
  )
}

export default React.memo(ProjectArticle, isEqual)
