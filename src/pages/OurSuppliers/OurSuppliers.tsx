import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'

import OurSuppliersStyles from 'pages/OurSuppliers/OurSuppliers.module.css'

const OurSuppliers = () => {
  return (
    <Container className={OurSuppliersStyles.ourSuppliersWrapper}>
      <Header />
      <Container className={OurSuppliersStyles.ourSuppliers}>
        <></>
      </Container>
    </Container>
  )
}

export default OurSuppliers
