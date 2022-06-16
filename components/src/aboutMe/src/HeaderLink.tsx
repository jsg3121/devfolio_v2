import React from 'react'
import isEqual from 'fast-deep-equal'
import Link from 'next/link'

interface HeaderLinkProps {
  href: string
  label: string
}

const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  const { href, label } = props

  return (
    <Link href={href}>
      <h1 data-content={label}>{label}</h1>
    </Link>
  )
}

export default React.memo(HeaderLink, isEqual)
