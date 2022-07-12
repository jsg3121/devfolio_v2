import axios from 'axios'
import { CareerList, Progress, SIcon } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import career from 'styles/career.module.scss'
import useSWR from 'swr'

const Career: React.FC = () => {
  const { data } = useSWR<CareerProps>('/api/career', async () => {
    return await axios
      .request({
        method: 'GET',
        url: '/api/career',
      })
      .then((res) => {
        return res.data
      })
  })

  return (
    <section className={career.career} id="skills">
      <h1>Career</h1>
      <div className={`${career.career__content} career__content`}>
        {data &&
          data.career.map((item, index) => {
            return <CareerList key={index} data={item} />
          })}
      </div>
      <div className={`${career.skills__content} skill__content`}>
        <ul>
          {data &&
            data.skills.map((item) => {
              return (
                <li key={item.name}>
                  <div className={career['skills__content-icon']}>
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

export default React.memo(Career, isEqual)
