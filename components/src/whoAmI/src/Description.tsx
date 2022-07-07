import isEqual from 'fast-deep-equal'
import React from 'react'
import whoAmI from 'styles/whoAmI.module.scss'

interface DescriptionProps extends Omit<WhoAmIProps, 'imozy'> {}

const Description: React.FC<DescriptionProps> = (props) => {
  const { name, description } = props

  return (
    <div className={whoAmI['whoami__teller-description']}>
      <p>{description}</p>
      <span>{name}</span>
    </div>
  )
}

export default React.memo(Description, isEqual)
