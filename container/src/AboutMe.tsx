import React from 'react'
import isEqual from 'fast-deep-equal'
import aboutMe from 'styles/about.module.scss'
import Image from 'next/image'

const AboutMe: React.FC = () => {
  return (
    <>
      <div className={aboutMe.about}>
        <div className={aboutMe.about__content}>
          <div className={aboutMe['about__content-title']}>
            <h1>Title</h1>
            <h2>Sub TitleSub TitleSub Title</h2>
            <span>
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              Description Description Description Description Description
              Description Description Description Description Description
              Description
            </span>
          </div>
          <div className={aboutMe['about__content-profile']}>
            <picture>
              <figure>
                <Image
                  src="/profile.webp"
                  alt="프로필 이미지"
                  priority
                  layout="fill"
                />
              </figure>
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(AboutMe, isEqual)
