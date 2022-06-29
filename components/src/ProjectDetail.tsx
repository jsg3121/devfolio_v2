import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import { ProjectDetailText } from './project'
import Image from './Image'

interface ProjectListProps {
  data: ProjectTypes
}

const ProjectDetail: React.FC<ProjectListProps> = (props) => {
  const { data } = props

  return (
    <div className={project['project__list-item']}>
      <h1>{data.name}</h1>
      <h2>{data.mainDescription}</h2>
      <div className={project['project__list--images']}>
        {data.detail.detailThumbnail.map((detail, index) => {
          return (
            <Image
              alt="detail_image"
              src={detail}
              layout="fill"
              priority
              key={index}
              objectFit="cover"
            />
          )
        })}
      </div>
      <ProjectDetailText
        type="description"
        date={data.detail.date}
        git={data.detail.git}
        skills={data.detail.skills}
      />
    </div>
  )
}

export default React.memo(ProjectDetail, isEqual)
