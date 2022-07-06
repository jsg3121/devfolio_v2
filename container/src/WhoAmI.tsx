import axios from 'axios'
import { Card } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import whoAmI from 'styles/whoAmI.module.scss'
import useSWR from 'swr'

const WhoAmI: React.FC = () => {
  const { data } = useSWR<Array<WhoAmIProps>>('/api/whoami', async () => {
    return await axios
      .request({
        method: 'GET',
        url: '/api/whoami',
      })
      .then((res) => res.data)
  })

  return (
    <section className={whoAmI.whoami} id="whoami">
      <div className={whoAmI['whoami__content--interview']}>
        <h1>Who Am I?</h1>
        <div>
          {data &&
            data.map((item, index) => {
              return <Card data={item} key={index} />
            })}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhoAmI, isEqual)
