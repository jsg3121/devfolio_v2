import isEqual from 'fast-deep-equal'
import { articleMotion, projectMotion } from 'motions'
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
    center/cover no-repeat;
`

const ProjectArticle: React.FC<ProjectArticleProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    projectMotion()
    articleMotion()

    return () => (projectMotion(), articleMotion())
  }, [])

  return (
    <article className={data.name.trim().replace(' ', '')}>
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
          {`Project .${
            typeof data.index === 'number' ? '0' + data.index : data.index
          }`
            .split('')
            .map((word, index) => {
              return word === ' ' ? (
                <h1 key={index}>&nbsp;</h1>
              ) : (
                <h1 key={index}>{word}</h1>
              )
            })}
        </div>
      </div>
      <div className={`${project.project__list} project__item`}>
        {data && <ProjectDetail data={data} />}
      </div>
    </article>
  )
}

export default React.memo(ProjectArticle, isEqual)
