import { Image } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import aboutMe from 'styles/about.module.scss'
import { gsap } from 'gsap'
import { aboutMeMotions } from 'motions'

interface ProfileProps extends Pick<HTMLDivElement, 'className'> {
  src: string
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { src, className } = props

  React.useEffect(() => {
    aboutMeMotions()

    return () => aboutMeMotions()
  }, [])

  return (
    <div className={`${aboutMe[`${className}`]} profile`}>
      <Image src={src} alt="프로필 이미지" layout="fill" />
    </div>
  )
}

export default React.memo(Profile, isEqual)
