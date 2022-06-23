import React from 'react'
import isEqual from 'fast-deep-equal'
import { useRouter } from 'next/router'

interface HeaderLinkProps {
  href: string
  label: string
}

const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  const { href, label } = props

  const router = useRouter()
  const hadleClick = React.useCallback(() => {
    router.replace(href)
  }, [href, router])

  return (
    <>
      <input type="radio" name="section" id={`section_${label}`} />
      <label htmlFor={`section_${label}`}>
        <h1 data-content={label} onClick={hadleClick}>
          {label}
        </h1>
      </label>
    </>
  )
}

export default React.memo(HeaderLink, isEqual)
