import { HeaderNav, HeaderSNB, Image } from 'components'
import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import header from 'styles/header.module.scss'

const navMotion = (ref: HTMLDivElement, isHide?: boolean) => {
  gsap
    .timeline()
    .to(ref, {
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
}

const Header: React.FC = () => {
  const [isHide, setIsHide] = React.useState<boolean>(true)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  const headerRef = React.useRef<HTMLDivElement>(null)
  const headerButtonRef = React.useRef<HTMLButtonElement>(null)

  const handleClickHeader = React.useCallback(() => {
    if (headerRef.current && isMobile) {
      navMotion(headerRef.current, isHide)
    }
    setIsHide(!isHide)
  }, [isHide, isMobile])

  const handleClickClose = React.useCallback(() => {
    if (headerRef.current && isMobile) {
      navMotion(headerRef.current)
      setIsHide(!isHide)
    }
  }, [isHide, isMobile])

  React.useEffect(() => {
    document.querySelector('html')?.getAttribute('data-mode') ===
      ('mobile' || 'tablet') && setIsMobile(true)
  }, [])

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
        <HeaderNav onClick={handleClickClose} />
        <HeaderSNB />
      </div>
    </>
  )
}

export default React.memo(Header, isEqual)
