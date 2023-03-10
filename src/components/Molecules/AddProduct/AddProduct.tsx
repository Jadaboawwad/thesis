import { FC, useContext } from 'react'
import { AppContext } from 'modules/useContext'

import Container from 'components/Atoms/Container/Container'
import AddProductStyles from 'components/Molecules/AddProduct/AddProduct.module.css'

import { appText } from 'data/appText'

const AddProduct: FC = () => {
  const { handleShowModal, isShowModal } = useContext(AppContext)
  return (
    <>
      {!isShowModal && (
        <Container
          className={AddProductStyles.addProductWrapper}
          onClick={handleShowModal}
          testId="addProduct"
        >
          <img
            alt={appText.addProduct.alt}
            className={AddProductStyles.addProductImage}
            src="svg/add.svg"
          />
          <p className={AddProductStyles.addProductTitle}>
            {appText.addProduct.label}
          </p>
        </Container>
      )}
    </>
  )
}
export default AddProduct
