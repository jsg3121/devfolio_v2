import isEqual from 'fast-deep-equal'
import React from 'react'
import whoAmI from 'styles/whoAmI.module.scss'
import { Image } from '../../common'

interface ImozyProps {
  src: `/${string}.webp`
}

const Imozy: React.FC<ImozyProps> = (props) => {
  const { src } = props

  return (
    <div className={whoAmI['whoami__profile-image']}>
      <Image src={src} layout="fill" alt="imozy" priority />
    </div>
  )
}

export default React.memo(Imozy, isEqual)
