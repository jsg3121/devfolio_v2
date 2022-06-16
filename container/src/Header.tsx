import { HeaderNav, HeaderSNB, Image } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import header from 'styles/header.module.scss'

const Header: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)

  return (
    <div className={header.header}>
      <button className={header['header__nav-button']}>
        <Image src="/hamburger.svg" layout="fill" alt="nav_icon" priority />
      </button>
      <HeaderNav />
      <HeaderSNB />
    </div>
  )
}

export default React.memo(Header, isEqual)
