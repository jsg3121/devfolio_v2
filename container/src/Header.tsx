import { HeaderNav, HeaderSNB, Image } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import header from 'styles/header.module.scss'
import { gsap } from 'gsap'

const Header: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const [isHide, setIsHide] = React.useState<boolean>(true)

  const headerRef = React.useRef<HTMLDivElement>(null)
  const headerButtonRef = React.useRef<HTMLButtonElement>(null)

  const handleClickHeader = React.useCallback(() => {
    gsap
      .timeline()
      .to(headerRef.current, {
        right: isHide ? '0' : '-50%',
        duration: 0.4,
        ease: 'power3.out',
      })
      .to(
        document.querySelectorAll(`.${header['header__nav-button']} picture`),
        {
          x: isHide ? '-3rem' : '0',
          duration: 0.4,
        },
        -1
      )

    setIsHide(!isHide)
  }, [isHide])

  return (
    <>
      <button
        className={header['header__nav-button']}
        ref={headerButtonRef}
        onClick={handleClickHeader}
      >
        <Image src="/hamburger.svg" layout="fill" alt="nav_icon" priority />
        <Image src="/close.svg" layout="fill" alt="nav_icon" priority />
      </button>
      <div className={header.header} ref={headerRef}>
        <HeaderNav />
        <HeaderSNB />
      </div>
    </>
  )
}

export default React.memo(Header, isEqual)
