import React from 'react'
import isEqual from 'fast-deep-equal'
import header from 'styles/header.module.scss'
import { HeaderLink } from './aboutMe'

const HeaderNav: React.FC = () => {
  return (
    <ul className={header['header__navigation']}>
      <li>
        <HeaderLink href="#aboutMe" label="About Me" />
      </li>
      <li>
        <HeaderLink href="#skills" label="Skills" />
      </li>
      <li>
        <HeaderLink href="#project" label="Project" />
      </li>
      <li>
        <HeaderLink href="#contact" label="Contact" />
      </li>
    </ul>
  )
}

export default React.memo(HeaderNav, isEqual)
