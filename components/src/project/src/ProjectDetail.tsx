import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import ProjectDetailText from './ProjectDetailText'
import Image from '../../common/src/Image'
import Slider, { Settings as SlideSetting } from 'react-slick'

interface ProjectListProps {
  data: ProjectTypes
}

const NextArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { onClick, className } = props
  return (
    <div onClick={onClick} className={className}>
      <div className={project['slide__arrow--next']}>
        <Image src="/ch_arrow.svg" alt="icon_button" layout="fill" />
      </div>
    </div>
  )
}

const PrevArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { onClick, className } = props
  return (
    <div onClick={onClick} className={className}>
      <div className={project['slide__arrow--prev']}>
        <Image src="/ch_arrow.svg" alt="icon_button" layout="fill" />
      </div>
    </div>
  )
}

const slideSetting: SlideSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  swipe: false,
  slidesToShow: 1,
  fade: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
          <Slider {...slideSetting}>
            {data.detail.detailThumbnail.map((detail, index) => {
              return (
                <div
                  key={index}
                  className={project['project__list--images-item']}
                >
                  <Image
                    alt="detail_image"
                    src={detail}
                    layout="fill"
                    priority
                    objectFit="contain"
                  />
                </div>
              )
            })}
          </Slider>
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
