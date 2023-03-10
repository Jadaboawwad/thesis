import { FC, useContext } from 'react'
import { AppContext } from 'modules/useContext'
import { useViewport } from 'modules/useViewport'

import Container from 'components/Atoms/Container/Container'
import Bucket from 'components/Molecules/Bucket/Bucket'
import Cart from 'components/Molecules/Cart/Cart'
import Logo from 'components/Molecules/Logo/Logo'
import HeaderStyles from 'components/Organisms/Header/Header.module.css'
import Navigation from 'components/Organisms/Header/Navigation'

const Header: FC = () => {
  const { handleShowCart, isShowCart } = useContext(AppContext)

  return (
    <>
      <Container testId="header" className={HeaderStyles.headerWrapper}>
        <Bucket onCartClick={handleShowCart} />
        <Navigation />
        {useViewport() === 'extra-large' && <Logo testId="webLogo" />}
      </Container>
      <Container className={HeaderStyles.cartWrapper}>
        <Cart isShowCart={isShowCart} />
      </Container>
    </>
  )
}

export default Header
