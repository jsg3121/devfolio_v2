import isEqual from 'fast-deep-equal'
import React from 'react'
import Image from '../../common/src/Image'

interface SkillIconProps {
  skillPath: string
}

const SkillIcon: React.FC<SkillIconProps> = (props) => {
  const { skillPath } = props

  return (
    <Image
      src={`/${skillPath}.svg`}
      alt="skill_icon"
      priority
      layout="fill"
      shadow
    />
  )
}

export default React.memo(SkillIcon, isEqual)
