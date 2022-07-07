import axios from 'axios'
import { Progress, SIcon } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import skills from 'styles/skills.module.scss'
import useSWR from 'swr'

const Skills: React.FC = () => {
  const { data } = useSWR<Array<SkillsProps>>('/api/skills', async () => {
    return await axios
      .request({
        method: 'GET',
        url: '/api/skills',
      })
      .then((res) => {
        return res.data
      })
  })

  return (
    <section className={skills.skills} id="skills">
      <h1>Skills</h1>
      <div className={`${skills.skills__content} skill__content`}>
        <ul>
          {data &&
            data.map((item) => {
              return (
                <li key={item.name}>
                  <div className={skills['skills__content-icon']}>
                    <SIcon skillPath={item.path} />
                  </div>
                  <Progress capacity={item.capacity} grade={item.grade} />
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export default React.memo(Skills, isEqual)
