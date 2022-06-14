import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Image from 'next/image'

interface ProjectListProps {
  data: ProjectTypes
  onClick: (index: number) => void
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { data, onClick } = props

  const hadleClick = React.useCallback(() => {
    onClick(data.index)
  }, [onClick, data])

  return (
    <div className={project['project__list-item']} onClick={hadleClick}>
      <div className={project['project__list-item--text']}>
        <h2>{data.name}</h2>
        <p>{data.mainDescription}</p>
      </div>
      <div className={project['project__list-item--image']}>
        <picture>
          <figure>
            <Image
              src={data.thumbnail}
              layout="fill"
              priority
              alt="프로젝트썸네일 이미지"
            ></Image>
          </figure>
        </picture>
      </div>
    </div>
  )
}

export default React.memo(ProjectList, isEqual)
