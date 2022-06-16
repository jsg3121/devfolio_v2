import { HeaderNav, HeaderSNB } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import header from 'styles/header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={header.header}>
      <HeaderNav />
      <HeaderSNB />
    </div>
  )
}

export default React.memo(Header, isEqual)
