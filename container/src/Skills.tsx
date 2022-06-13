import React from 'react'
import isEqual from 'fast-deep-equal'
import skills from 'styles/skills.module.scss'
import { Progress, SIcon } from 'components'

const Skills: React.FC = () => {
  return (
    <section className={skills.skills}>
      <h1>Skills</h1>
      <div className={`${skills.skills__content} skill__content`}>
        <ul>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="html" />
            </div>
            <Progress capacity={90} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="css" />
            </div>
            <Progress capacity={90} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="javascript" />
            </div>
            <Progress capacity={80} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="typescript" />
            </div>
            <Progress capacity={80} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="node" />
            </div>
            <Progress capacity={80} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="react" />
            </div>
            <Progress capacity={80} grade={3} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="vue" />
            </div>
            <Progress capacity={70} grade={2} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="redux" />
            </div>
            <Progress capacity={70} grade={2} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="prisma" />
            </div>
            <Progress capacity={60} grade={2} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="mysql" />
            </div>
            <Progress capacity={60} grade={2} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="mobx" />
            </div>
            <Progress capacity={50} grade={1} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="graphql" />
            </div>
            <Progress capacity={50} grade={1} />
          </li>

          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="storybook" />
            </div>
            <Progress capacity={50} grade={1} />
          </li>
          <li>
            <div className={skills['skills__content-icon']}>
              <SIcon skillPath="docker" />
            </div>
            <Progress capacity={50} grade={1} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default React.memo(Skills, isEqual)
