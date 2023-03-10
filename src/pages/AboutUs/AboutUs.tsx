import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'

import AboutUsStyles from 'pages/AboutUs/AboutUs.module.css'

const AboutUs = () => {
  return (
    <Container className={AboutUsStyles.aboutUsWrapper}>
      <Header />
      <Container className={AboutUsStyles.aboutUs}>
        <></>
      </Container>
    </Container>
  )
}

export default AboutUs
