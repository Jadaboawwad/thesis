import { render, screen } from '@testing-library/react'

import { appText } from 'data/appText'

import ProductList from './ProductList'

const { queryByTestId, queryByAltText, queryByText } = screen

const productListElements = {
  productItems: () => queryByTestId('productItems'),
  addProduct: () => queryByAltText(appText.addProduct.alt),
  productForm: () => queryByTestId('form'),
  emptyMessage: () => queryByText(appText.productList.emptyMessage),
}

describe('ProductList', () => {
  describe('When ProductList is rendered', () => {
    it('should render children correctly', () => {
      render(<ProductList />)
      expect(productListElements.addProduct()).toBeInTheDocument()
      expect(productListElements.productForm()).not.toBeInTheDocument()
    })
  })
})
