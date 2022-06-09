import React from 'react'
import isEqual from 'fast-deep-equal'
import skills from 'styles/skills.module.scss'
import { Progress, SIcon } from 'components'

const Skills: React.FC = () => {
  return (
    <>
      <div className={skills.skills}>
        <div className={skills.skills__content}>
          <h1>Front End</h1>
          <ul>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={23} grade={1} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={99} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={89} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={80} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={76} grade={2} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={45} grade={1} />
            </li>
          </ul>
        </div>
        <div className={skills.skills__content}>
          <h1>Back End</h1>
          <ul>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={50} grade={1} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={81} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={80} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={100} grade={3} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={69} grade={2} />
            </li>
            <li>
              <div className={skills['skills__content-icon']}>
                <SIcon />
              </div>
              <Progress capacity={25} grade={1} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Skills, isEqual)
