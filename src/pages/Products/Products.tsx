import React from 'react'
import { AppProvider } from 'modules/useContext'
import { useSelection } from 'modules/useSelection'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'
import ProductList from 'components/Organisms/ProductList/ProductList'

import ProductsStyles from 'pages/Products/Products.module.css'

const Products = () => {
  const {
    handleDeleteCard,
    handleLoading,
    handleMutation,
    handleShowCart,
    handleShowModal,
    handleUpdateCard,
    isShowCart,
    isShowModal,
    selectedCards,
  } = useSelection()

  const context = {
    handleDeleteCard,
    handleLoading,
    handleMutation,
    handleShowCart,
    handleShowModal,
    handleUpdateCard,
    isShowCart,
    isShowModal,
    selectedCards,
  }

  return (
    <AppProvider appContext={context}>
      <Container className={ProductsStyles.productsWrapper}>
        <Header />
        <ProductList />
      </Container>
    </AppProvider>
  )
}

export default Products
