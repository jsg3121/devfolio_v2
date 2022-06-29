import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Link from 'next/link'
import { Image } from 'components'

interface ProjectDetailTextProps {
  type: 'info' | 'description'
  date: ProjectDetailTypes['date']
  git: ProjectDetailTypes['git']
  skills: Array<string>
}

const ProjectDetailText: React.FC<ProjectDetailTextProps> = (props) => {
  const { date, git, skills } = props

  return (
    <>
      <div className={project['detail__slide-info--text']}>
        <h2>진행 기간 : {date}</h2>
        <h2>
          GitHub :
          <Link href={git}>
            <a target="_blank">{git}</a>
          </Link>
        </h2>
      </div>
      <div className={project['detail__slide-info--skills']}>
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={`/${item}.svg`}
                alt="skill_icon"
                layout="fill"
                priority
                shadow
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default React.memo(ProjectDetailText, isEqual)
