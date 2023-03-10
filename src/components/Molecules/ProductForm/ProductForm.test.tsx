import { render, screen } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'

import { appText } from 'data/appText'

import ProductForm from './ProductForm'

const { getByAltText, queryByText, queryByTestId } = screen

const productFormElments = {
  closeAction: () => getByAltText(appText.close.alt),
  description: () => queryByText(appText.productForm.description.label),
  form: () => queryByTestId('form'),
  id: () => queryByText(appText.productForm.id.label),
  imageUrl: () => queryByText(appText.productForm.imageUrl.label),
  submit: () => queryByText(appText.productForm.submit.value),
}

describe('ProductForm', () => {
  describe('When the product page page loads and add or update product clicked', () => {
    it('should render the icon when title', () => {
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowModal: true,
          }}
        >
          <ProductForm />
        </AppProvider>
      )
      expect(productFormElments.closeAction()).toBeInTheDocument()
      expect(productFormElments.description()).toBeInTheDocument()
      expect(productFormElments.form()).toBeInTheDocument()
      expect(productFormElments.id()).toBeInTheDocument()
      expect(productFormElments.imageUrl()).toBeInTheDocument()
      expect(productFormElments.submit()).toBeInTheDocument()
    })
    it('should not render the icon with title', () => {
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowModal: false,
          }}
        >
          <ProductForm />
        </AppProvider>
      )
      expect(productFormElments.form()).not.toBeInTheDocument()
    })
  })
})
