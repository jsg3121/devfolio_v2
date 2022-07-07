import isEqual from 'fast-deep-equal'
import { whoAmIMotion } from 'motions'
import React from 'react'
import whoAmI from 'styles/whoAmI.module.scss'
import Description from './Description'
import Imozy from './Imozy'

interface CardProps {
  data: WhoAmIProps
}

const Card: React.FC<CardProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    whoAmIMotion()

    return () => whoAmIMotion()
  }, [])

  return (
    <div className={`${whoAmI.whoami__teller} whoami__teller`}>
      <Imozy src={data.imozy} />
      <Description description={data.description} name={data.name} />
    </div>
  )
}

export default React.memo(Card, isEqual)
