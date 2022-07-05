import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import ProjectDetailText from './ProjectDetailText'
import Image from '../../common/src/Image'

interface ProjectListProps {
  data: ProjectTypes
}

const ProjectDetail: React.FC<ProjectListProps> = (props) => {
  const { data } = props

  return (
    <div className={project['project__list-item']}>
      <div className={`${project['project__list-title']} project__list-title`}>
        <h1>{data.name}</h1>
        <h2>{data.mainDescription}</h2>
      </div>
      <div className="project__list-content">
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
          date={data.detail.date}
          description={data.detail.detailDescription}
          git={data.detail.git}
          members={data.detail.members}
          skills={data.detail.skills}
        />
      </div>
    </div>
  )
}

export default React.memo(ProjectDetail, isEqual)
