import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import AddProduct from 'components/Molecules/AddProduct/AddProduct'
import ProductForm from 'components/Molecules/ProductForm/ProductForm'
import ProdcutItems from 'components/Molecules/ProductItems/ProdcutItems'
import ProductListStyles from 'components/Organisms/ProductList/ProductList.module.css'

const ProductList: FC = () => {
  return (
    <Container className={ProductListStyles.productListWrapper}>
      <AddProduct />
      <ProdcutItems />
      <ProductForm />
    </Container>
  )
}

export default ProductList
