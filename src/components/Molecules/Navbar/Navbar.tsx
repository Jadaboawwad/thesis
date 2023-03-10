import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useViewport } from 'modules/useViewport'

import Container from 'components/Atoms/Container/Container'
import NavbarStyles from 'components/Molecules/Navbar/Navbar.module.css'

import { appText } from 'data/appText'

const Navbar: FC = () => (
  <>
    {useViewport() === 'extra-large' && (
      <Container className={NavbarStyles.navbarWrapper}>
        <ul data-testid="navbarList" className={NavbarStyles.navbarList}>
          {appText.navItems.map((el, idx) => {
            return (
              <li key={el} data-testid="listitem">
                <Link to={`/${appText.links[idx]}`}>{el}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
    )}
  </>
)

export default Navbar
