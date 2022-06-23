import React from 'react'
import isEqual from 'fast-deep-equal'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderIconProps {
  image: string
  link: string
}

const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const { image, link } = props

  return (
    <Link href={link}>
      <a target="_blank">
        <picture>
          <figure>
            <Image src={image} alt="github" layout="fill" priority />
          </figure>
        </picture>
      </a>
    </Link>
  )
}

export default React.memo(HeaderIcon, isEqual)
