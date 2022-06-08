import React from 'react'
import isEqual from 'fast-deep-equal'
import header from 'styles/header.module.scss'

const Header: React.FC = () => {
  return (
    <>
      <div className={header.header}>
        <ul className={header.header__navigation}>
          <li>
            <h1>About Me</h1>
          </li>
          <li>
            <h1>Skills</h1>
          </li>
          <li>
            <h1>Project</h1>
          </li>
          <li>
            <h1>Contact</h1>
          </li>
        </ul>
      </div>
    </>
  )
}

export default React.memo(Header, isEqual)
