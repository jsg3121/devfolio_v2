import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'

interface ProjectDetailProps {}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const {} = props

  return (
    <section className={project.detail}>
      <div className={project.detail__content}></div>
    </section>
  )
}

export default React.memo(ProjectDetail, isEqual)
