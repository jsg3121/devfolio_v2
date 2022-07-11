import axios from 'axios'
import { Progress, SIcon } from 'components'
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
      <div className={career.career__content}>
        {data &&
          data.career.map((item, index) => {
            return (
              <div key={index} className={career['career__list']}>
                <div>
                  <p>{item.company}</p>
                  <span>
                    {item.startDate} ~ {item.endDate}
                  </span>
                </div>
                <ul className={career['career__list-item']}>
                  {item.career.map((item) => {
                    return (
                      <React.Fragment key={item.name}>
                        <li>
                          <div>
                            <p>{item.name}</p>
                            <span>{item.date}</span>
                          </div>
                          {item.description.map((desc, idx) => {
                            return <p key={idx}>{desc}</p>
                          })}
                        </li>
                      </React.Fragment>
                    )
                  })}
                </ul>
              </div>
            )
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
