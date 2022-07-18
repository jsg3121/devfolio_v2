import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import component from 'styles/components.module.scss'
import { Image } from './common'

const Scroll: React.FC = () => {
  return (
    <div className={component.scroll_container} id="scroll_icon">
      <div>
        <Image src="/scroll_arrow.svg" alt="scroll_icon" layout="fill" />
      </div>
      <p>scroll</p>
    </div>
  )
}

export default React.memo(Scroll, isEqual)
