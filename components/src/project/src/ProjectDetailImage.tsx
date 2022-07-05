import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import { Image } from '../../common'

interface ProjectDetailImageProps {
  image: string
}

const ProjectDetailImage: React.FC<ProjectDetailImageProps> = (props) => {
  const { image } = props

  return (
    <div className={project['detail__slide-info--image']}>
      <Image
        src={image}
        priority
        alt="detail_image"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

export default React.memo(ProjectDetailImage, isEqual)
