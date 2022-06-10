import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import styled from 'styled-components'

interface SkillIconProps {
  skillPath: string
}

const Icon = styled.figure`
  filter: drop-shadow(3px 3px 2.5px rgba(0, 0, 0, 0.3));
`

const SkillIcon: React.FC<SkillIconProps> = (props) => {
  const { skillPath } = props

  return (
    <picture>
      <Icon>
        <Image
          src={`/${skillPath}.svg`}
          alt="skill_icon"
          priority
          layout="fill"
        />
      </Icon>
    </picture>
  )
}

export default React.memo(SkillIcon, isEqual)
