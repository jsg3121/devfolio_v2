import isEqual from 'fast-deep-equal'
import React from 'react'
import Image from '../../Image'

interface HeaderFileProps {
  image: string
}

const HeaderFile: React.FC<HeaderFileProps> = (props) => {
  const { image } = props

  return (
    <button>
      <Image src={image} alt="doc_icon" layout="fill" priority />
    </button>
  )
}

export default React.memo(HeaderFile, isEqual)
