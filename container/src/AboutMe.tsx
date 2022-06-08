import React from 'react'
import isEqual from 'fast-deep-equal'
import aboutMe from 'styles/about.module.scss'

const AboutMe: React.FC = () => {
  return (
    <>
      <div className={aboutMe.about}>
        <div className={aboutMe.about__content}>
          <div className={aboutMe['about__content-title']}>
            <h1>Title</h1>
            <h2>Sub Title</h2>
            <span>
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              Description Description Description Description Description
              Description Description Description Description Description
              Description
            </span>
          </div>
          <div>Profile</div>
        </div>
      </div>
    </>
  )
}

export default React.memo(AboutMe, isEqual)
