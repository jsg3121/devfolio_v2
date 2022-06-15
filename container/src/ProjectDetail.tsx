import { ProjectDetailImage, ProjectDetailText } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import project from 'styles/project.module.scss'

interface ProjectDetailProps {
  data: ProjectDetailTypes
  thumbnail: ProjectTypes['thumbnail']
  onClick: () => void
}

const DetailContent = styled((props) => {
  const { children } = props
  return <div {...props}>{children}</div>
})`
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${(props) => props.thumbnail}) center/cover no-repeat #ffffff;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(6px);
    background: linear-gradient(
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    z-index: -1;
  }
`

const settings: Settings = {
  fade: true,
  infinite: true,
  speed: 500,
}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { data, thumbnail, onClick } = props

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.target !== e.currentTarget) return
      e.preventDefault()
      e.stopPropagation()
      onClick()
    },
    [onClick]
  )

  return (
    <section className={project.detail} onClick={handleClick}>
      <DetailContent thumbnail={thumbnail}>
        <Slider {...settings}>
          <div className={project.detail__slide}>
            <ProjectDetailText
              type="info"
              name={data.name}
              date={data.date}
              git={data.git}
              skills={data.skills}
            />
            <ProjectDetailImage image={thumbnail} />
          </div>
          {data.detailThumbnail.map((list, index) => {
            return (
              <div key={index} className={project.detail__slide}>
                <ProjectDetailText
                  type="description"
                  name={data.name}
                  date={data.date}
                  git={data.git}
                  skills={data.skills}
                />
                <ProjectDetailImage image={list} />
              </div>
            )
          })}
        </Slider>
      </DetailContent>
    </section>
  )
}

export default React.memo(ProjectDetail, isEqual)
