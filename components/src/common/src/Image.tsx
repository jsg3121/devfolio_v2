import isEqual from 'fast-deep-equal'
import NextImage, { ImageProps } from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface CustomImageProps extends ImageProps {
  shadow?: boolean
}

const ImageStyle = styled((props) => {
  const { children } = props
  return <figure {...props}>{children}</figure>
})`
  ${(props) =>
    props.shadow && 'filter: drop-shadow(3px 3px 2.5px rgba(0, 0, 0, 0.3));'}
`

const Image: React.FC<CustomImageProps> = (props) => {
  const { src, alt, layout, objectFit, shadow, loading } = props

  return (
    <picture>
      <ImageStyle shadow={shadow ? 'true' : 'false'}>
        <NextImage
          src={src}
          layout={layout}
          alt={alt}
          priority={loading && false}
          loading={loading && loading}
          objectFit={objectFit && objectFit}
        />
      </ImageStyle>
    </picture>
  )
}

export default React.memo(Image, isEqual)
