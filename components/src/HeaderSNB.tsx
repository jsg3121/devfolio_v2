import React from 'react'
import isEqual from 'fast-deep-equal'
import header from 'styles/header.module.scss'
import { HeaderFile, HeaderIcon } from './aboutMe'

const HeaderSNB: React.FC = () => {
  return (
    <div className={header.header__icon}>
      <ul className={header['header__icon-list']}>
        <li>
          <HeaderIcon
            image="/github.svg"
            link="https://github.com/jsg3121/devfolio_v2"
          />
        </li>
        <li>
          <HeaderIcon image="/velog.svg" link="https://velog.io/@jsg3121" />
        </li>
        <li>
          <HeaderIcon image="/gmail.svg" link="mailto://xodm95@gmail.com" />
        </li>
        <li>
          <HeaderFile image="/pdf.svg" />
        </li>
        <li>
          <HeaderFile image="/ppt.svg" />
        </li>
        <li>
          <HeaderFile image="/word.svg" />
        </li>
      </ul>
    </div>
  )
}

export default React.memo(HeaderSNB, isEqual)
