import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'

import OurLandsStyles from 'pages/OurLands/OurLands.module.css'

const OurLands = () => {
  return (
    <Container className={OurLandsStyles.ourLandsWrapper}>
      <Header />
      <Container className={OurLandsStyles.ourLands}>
        <></>
      </Container>
    </Container>
  )
}

export default OurLands
