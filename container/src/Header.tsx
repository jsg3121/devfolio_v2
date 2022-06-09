import React from 'react'
import isEqual from 'fast-deep-equal'
import header from 'styles/header.module.scss'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <>
      <div className={header.header}>
        <ul className={header.header__navigation}>
          <li>
            <h1 data-content="About Me">About Me</h1>
          </li>
          <li>
            <h1 data-content="Skills">Skills</h1>
          </li>
          <li>
            <h1 data-content="Project">Project</h1>
          </li>
          <li>
            <h1 data-content="Content">Contact</h1>
          </li>
        </ul>
        <div className={header.header__logo}>
          <ul className={header['header__logo-list']}>
            <li>
              <picture>
                <figure className={header['header__logo--git-motion']}>
                  <Image
                    src="/github.svg"
                    alt="github"
                    layout="fill"
                    priority
                  />
                </figure>
              </picture>
            </li>
            <li>
              <picture>
                <figure>
                  <Image src="/velog.svg" alt="velog" layout="fill" priority />
                </figure>
              </picture>
            </li>
            <li>
              <picture>
                <figure></figure>
              </picture>
            </li>
            <li>
              <picture>
                <figure></figure>
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Header, isEqual)
