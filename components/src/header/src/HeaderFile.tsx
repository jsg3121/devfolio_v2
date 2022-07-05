import isEqual from 'fast-deep-equal'
import React from 'react'
import Image from '../../common/src/Image'

interface HeaderFileProps {
  image: string
  path: `${string}.${'pdf' | 'ppt' | ''}`
}

const HeaderFile: React.FC<HeaderFileProps> = (props) => {
  const { image, path } = props

  return (
    <button>
      <a href={`/files/${path}`} download>
        <Image src={image} alt="doc_icon" layout="fill" priority />
      </a>
    </button>
  )
}

export default React.memo(HeaderFile, isEqual)
