import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'

interface SkillIconProps {
  skillPath: string
}

const SkillIcon: React.FC<SkillIconProps> = (props) => {
  const { skillPath } = props

  return (
    <>
      <picture>
        <figure>
          <Image
            src={`/${skillPath}.svg`}
            alt="skill_icon"
            priority
            layout="fill"
          />
        </figure>
      </picture>
    </>
  )
}

export default React.memo(SkillIcon, isEqual)
