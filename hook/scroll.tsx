import React from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = React.useState<number>(0)

  const scrollEvent = () => {
    setScrollY(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return {
    scrollY,
  }
}
