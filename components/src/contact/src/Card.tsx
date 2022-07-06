import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
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
    const container = document.querySelector('.container')
    const whoAmI = document.querySelector('#whoami')
    const cards = gsap.utils.toArray<Element>('.whoami__teller')

    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whoAmI,
          start: 'top top',
          end: 'top top',
          scroller: container,
        },
      })
    })
  }, [])

  return (
    <div className={`${whoAmI.whoami__teller} whoami__teller`}>
      <Imozy src={data.imozy} />
      <Description description={data.description} name={data.name} />
    </div>
  )
}

export default React.memo(Card, isEqual)
