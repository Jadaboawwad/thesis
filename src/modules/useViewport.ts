import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [viewport, setViewport] = useState<string>()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setViewport('extra-large')
      } else if (window.innerWidth > 992) {
        setViewport('large')
      } else if (window.innerWidth > 768) {
        setViewport('medium')
      } else if (window.innerWidth > 576) {
        setViewport('small')
      } else {
        setViewport('extra-small')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewport
}
