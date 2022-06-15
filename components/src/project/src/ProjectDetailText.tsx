import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailTextProps {
  type: 'info' | 'description'
  name: ProjectDetailTypes['name']
  date: ProjectDetailTypes['date']
  git: ProjectDetailTypes['git']
  skills: Array<string>
}

const ProjectDetailText: React.FC<ProjectDetailTextProps> = (props) => {
  const { name, date, git, skills } = props

  return (
    <div className={project['detail__slide-info--text']}>
      <h1>{name}</h1>
      <h2>진행 기간 : {date}</h2>
      <h2>
        GitHub :
        <Link href={git}>
          <a target="_blank">{git}</a>
        </Link>
      </h2>
      <div className={project['detail__slide-info--text-skills']}>
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <picture key={index}>
                <figure>
                  <Image
                    src={`/${item}.svg`}
                    alt="skill_icon"
                    layout="fill"
                    priority
                  ></Image>
                </figure>
              </picture>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(ProjectDetailText, isEqual)
