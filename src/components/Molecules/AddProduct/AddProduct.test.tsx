import { screen } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'
import { render } from 'utils/testUtils'

import { appText } from 'data/appText'

import AddProduct from './AddProduct'

const { queryByAltText, getByTestId } = screen

const addProductElements = {
  addProduct: () => getByTestId('addProduct'),
  productIcon: () => queryByAltText(appText.addProduct.alt),
}

describe('AddProduct', () => {
  describe('When the add More is rendered', () => {
    it('renders the add product button when the modal is hidden', () => {
      render(<AddProduct />)
      expect(addProductElements.productIcon()).toBeInTheDocument()
    })
    it('should not render the add product button when modal is shown', () => {
      render(
        <AppProvider
          appContext={{
            isShowModal: true,
            handleShowModal: jest.fn(),
            handleMutation: jest.fn(),
          }}
        >
          <AddProduct />)
        </AppProvider>
      )

      expect(addProductElements.productIcon()).not.toBeInTheDocument()
    })
  })
})
