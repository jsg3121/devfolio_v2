import React from 'react'
import isEqual from 'fast-deep-equal'
import header from 'styles/header.module.scss'
import { HeaderLink } from './aboutMe'

interface HeaderNavProps {
  onClick: () => void
}

const HeaderNav: React.FC<HeaderNavProps> = (props) => {
  const { onClick } = props
  const handleClick = React.useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <nav>
      <ul className={header['header__navigation']}>
        <li onClick={handleClick}>
          <HeaderLink href="#aboutMe" label="About Me" />
        </li>
        <li onClick={handleClick}>
          <HeaderLink href="#skills" label="Skills" />
        </li>
        <li onClick={handleClick}>
          <HeaderLink href="#project" label="Project" />
        </li>
        <li onClick={handleClick}>
          <HeaderLink href="#contact" label="Contact" />
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(HeaderNav, isEqual)
