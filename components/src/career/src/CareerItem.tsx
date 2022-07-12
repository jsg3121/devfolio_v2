import isEqual from 'fast-deep-equal'
import { careerMotion } from 'motions'
import React from 'react'

interface CareerItemProps {
  data: CareerDetail
}

const CareerItem: React.FC<CareerItemProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    careerMotion()
    return () => careerMotion()
  }, [])

  return (
    <li>
      <div>
        <p>{data.name}</p>
        <span>{data.date}</span>
      </div>
      {data.description.map((desc, idx) => {
        return <p key={idx}>{desc}</p>
      })}
    </li>
  )
}

export default React.memo(CareerItem, isEqual)
