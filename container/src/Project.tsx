import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'

const Project: React.FC = () => {
  return (
    <section className={project.project}>
      <h1>Project</h1>
      <div className={project.project__list}>
        <div className={project['project__list-item']}>
          <div className={project['project__list-item--text']}>
            <h2>Title</h2>
            <p>
              DescriptionDescriptionDescrip
              tionDescriptionDescriptionDescription
            </p>
          </div>
          <div className={project['project__list-item--image']}>image</div>
        </div>
        <div className={project['project__list-item']}>
          <div className={project['project__list-item--text']}>
            <h2>Title</h2>
            <p>
              DescriptionDescriptionDescriptio
              nDescriptionDescriptionDescription
            </p>
          </div>
          <div className={project['project__list-item--image']}>image</div>
        </div>
        <div className={project['project__list-item']}>
          <div className={project['project__list-item--text']}>
            <h2>Title</h2>
            <p>
              DescriptionDescriptionDescriptio
              nDescriptionDescriptionDescription
            </p>
          </div>
          <div className={project['project__list-item--image']}>image</div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Project, isEqual)
