import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import project from 'styles/project.module.scss'

interface ProjectDetailImageProps {
  image: string
}

const ProjectDetailImage: React.FC<ProjectDetailImageProps> = (props) => {
  const { image } = props

  return (
    <div className={project['detail__slide-info--image']}>
      <picture>
        <figure>
          <Image
            src={image}
            priority
            alt="detail_image"
            layout="fill"
            objectFit="contain"
          ></Image>
        </figure>
      </picture>
    </div>
  )
}

export default React.memo(ProjectDetailImage, isEqual)
