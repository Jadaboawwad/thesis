import { FC, useMemo } from 'react'
import { useViewport } from 'modules/useViewport'

import Burger from 'components/Molecules/Burger/Burger'
import Navbar from 'components/Molecules/Navbar/Navbar'

const Navigation: FC = () => {
  const viewport = useViewport()
  const Nav = useMemo(() => {
    if (viewport === 'extra-large') {
      return <Navbar />
    }
    if (viewport === 'extra-small') {
      return <Burger />
    }

    return <Burger />
  }, [viewport]) as JSX.Element

  return Nav
}

export default Navigation
