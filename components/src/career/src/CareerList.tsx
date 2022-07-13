import isEqual from 'fast-deep-equal'
import React from 'react'
import career from 'styles/career.module.scss'
import CareerItem from './CareerItem'

interface CareerListProps {
  data: Career
}

const CareerList: React.FC<CareerListProps> = (props) => {
  const { data } = props

  return (
    <div className={career['career__list']}>
      <div>
        <p>{data.company}</p>
        <span>
          {data.startDate} ~ {data.endDate}
        </span>
      </div>
      <ul className={`${career['career__list-item']} career__list-item`}>
        {data.career.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <CareerItem data={item} />
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(CareerList, isEqual)
