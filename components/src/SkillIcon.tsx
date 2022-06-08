import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'

interface SkillIconProps {}

const SkillIcon: React.FC<SkillIconProps> = (props) => {
  const {} = props

  return (
    <>
      <picture>
        <figure>
          <Image src="/html.svg" alt="skill_icon" priority layout="fill" />
        </figure>
      </picture>
    </>
  )
}

export default React.memo(SkillIcon, isEqual)
