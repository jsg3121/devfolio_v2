import React from 'react'
import isEqual from 'fast-deep-equal'
import Link from 'next/link'
import Image from 'next/image'

interface ContactIconProps extends Omit<IconLinkProps, 'name'> {}

const ContactIcon: React.FC<ContactIconProps> = (props) => {
  const { img, link } = props

  return (
    <Link href={link}>
      <a target="_blank">
        <picture>
          <figure>
            <Image src={img} alt="github" layout="fill" priority />
          </figure>
        </picture>
      </a>
    </Link>
  )
}

export default React.memo(ContactIcon, isEqual)
