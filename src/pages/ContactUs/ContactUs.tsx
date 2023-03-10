import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'

import ContactUsStyles from 'pages/ContactUs/ContactUs.module.css'

const ContactUs = () => {
  return (
    <Container className={ContactUsStyles.contactUsWrapper}>
      <Header />
      <Container className={ContactUsStyles.contactUs}>
        <></>
      </Container>
    </Container>
  )
}

export default ContactUs
