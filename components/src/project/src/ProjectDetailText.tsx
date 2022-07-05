import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Link from 'next/link'
import { Image } from '../../common'

interface ProjectDetailTextProps {
  date: ProjectDetailTypes['date']
  description: ProjectDetailTypes['detailDescription']
  git: ProjectDetailTypes['git']
  members: ProjectDetailTypes['members']
  skills: Array<string>
}

const ProjectDetailText: React.FC<ProjectDetailTextProps> = (props) => {
  const { description, git, skills, date, members } = props

  return (
    <div className={project['detail']}>
      <div className={project['detail-info--skills']}>
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
      <div className={project['detail__info']}>
        <div className={project['detail__info--description']}>
          <h1>상세내용</h1>
          <ul>
            {description.map((detail, index) => {
              return (
                <li key={index}>
                  <span>{detail}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <hr />
        <div className={project['detail__info--info']}>
          <h1>Info</h1>
          <ul>
            <li>
              <p>개발 인원</p>
              <div>
                {members.map((member, index) => {
                  return <span key={index}>{member}&nbsp;</span>
                })}
              </div>
            </li>
            <li>
              <p>개발 기간</p>
              <div>
                <span>{date}</span>
              </div>
            </li>
            <li>
              <p>GitHub</p>
              <div>
                <Link href={git}>
                  <a target="_blank">바로가기</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProjectDetailText, isEqual)
