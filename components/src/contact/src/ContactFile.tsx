import isEqual from 'fast-deep-equal'
import React from 'react'
import Image from '../../common/src/Image'

interface ContactFileProps extends Omit<IconFileProps, 'name'> {}

const ContactFile: React.FC<ContactFileProps> = (props) => {
  const { img, path } = props

  return (
    <button>
      <a href={`/files/${path}`} download>
        <Image src={img} alt="doc_icon" layout="fill" priority />
      </a>
    </button>
  )
}

export default React.memo(ContactFile, isEqual)
