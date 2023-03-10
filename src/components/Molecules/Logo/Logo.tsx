import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import LogoStyles from 'components/Molecules/Logo/Logo.module.css'

import { appText } from 'data/appText'

interface ILogoProps {
  testId?: string
}

const Logo: FC<ILogoProps> = ({ testId }) => (
  <Container testId={testId} className={LogoStyles.logoWrapper}>
    <img
      className={LogoStyles.headerLogo}
      src="svg/logo.svg"
      alt={appText.logo.alt}
    />
  </Container>
)

export default Logo
