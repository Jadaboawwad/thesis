import { FC, useContext } from 'react'
import { useFormik } from 'formik'
import { AppContext } from 'modules/useContext'
import * as Yup from 'yup'

import Container from 'components/Atoms/Container/Container'
import Close from 'components/Molecules/Close/Close'
import ProductFormStyles from 'components/Molecules/ProductForm/ProductForm.module.css'

import { appText } from 'data/appText'

const ProductForm: FC = () => {
  const { isShowModal, handleMutation, handleShowModal } =
    useContext(AppContext)
  const formik = useFormik({
    initialValues: {
      description: '',
      id: '',
      imageUrl: '',
      name: '',
    },
    validationSchema: Yup.object().shape({
      description: Yup.string().required('Required'),
      id: Yup.string().required('Required'),
      imageUrl: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
    }),
    onSubmit: handleMutation,
  })

  return (
    <>
      {isShowModal && (
        <Container
          className={ProductFormStyles.modalWrapper}
          testId="formModal"
        >
          <Close handleClose={handleShowModal} />
          <form
            className={ProductFormStyles.form}
            onSubmit={formik.handleSubmit}
            data-testid="form"
          >
            <label htmlFor="id">{appText.productForm.id.label}</label>
            <input
              id="id"
              name="id"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={appText.productForm.id.placeHolder}
              type="text"
              value={formik.values.id}
            />
            <label htmlFor="name">{appText.productForm.name.label}</label>
            <input
              id="name"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={appText.productForm.name.placeHolder}
              type="text"
              value={formik.values.name}
            />
            <label htmlFor="description">
              {appText.productForm.description.label}
            </label>
            <input
              id="description"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={appText.productForm.description.placeHolder}
              type="text"
              value={formik.values.description}
            />
            <label htmlFor="imageUrl">
              {appText.productForm.imageUrl.label}
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={appText.productForm.imageUrl.placeHolder}
              type="text"
              value={formik.values.imageUrl}
            />
            <input
              className={ProductFormStyles.submit}
              data-testid="submit"
              type="submit"
              value={appText.productForm.submit.value}
            />
          </form>
        </Container>
      )}
    </>
  )
}

export default ProductForm
