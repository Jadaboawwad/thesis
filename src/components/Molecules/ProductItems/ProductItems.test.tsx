import { screen } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'
import * as useLoadDataModule from 'modules/useLoadData'
import * as useSelectionModule from 'modules/useSelection'
import { render } from 'utils/testUtils'

import { appText } from 'data/appText'
import data from 'data/items.json'

import ProductItems from './ProdcutItems'

const { queryByAltText, queryByText, queryByTestId } = screen

const productItemsElments = {
  items: () => queryByTestId('productItems'),
  product: () => queryByTestId('product-0'),
  loading: () => queryByTestId('loading'),
  update: () => queryByText(appText.card.updateAction),
  delete: () => queryByAltText(appText.card.deleteAction),
  emptyMessage: () => queryByText(appText.productList.emptyMessage),
}

let useSelectionSpy: jest.SpyInstance
let useLoadDataSpy: jest.SpyInstance

describe('ProductItems', () => {
  describe('When product items loaded from local storage', () => {
    beforeEach(() => {
      useSelectionSpy = jest.spyOn(useSelectionModule, 'useSelection')
      useLoadDataSpy = jest.spyOn(useLoadDataModule, 'useLoadData')
    })

    it('should not render any product with undefined data and show empty message', () => {
      useSelectionSpy.mockReturnValue({ isLoading: false })
      useLoadDataSpy.mockReturnValue({ data: undefined })
      render(
        <AppProvider
          appContext={{
            isShowModal: true,
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
          }}
        >
          <ProductItems />
        </AppProvider>
      )
      expect(productItemsElments.product()).not.toBeInTheDocument()
    })

    it('should not render any product with empty data and show empty message', () => {
      useSelectionSpy.mockReturnValue({ isLoading: false })
      useLoadDataSpy.mockReturnValue({ data: [] })
      render(
        <AppProvider
          appContext={{
            isShowModal: false,
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
          }}
        >
          <ProductItems />
        </AppProvider>
      )

      expect(productItemsElments.product()).not.toBeInTheDocument()
      expect(productItemsElments.emptyMessage()).toBeInTheDocument()
    })

    it('', () => {
      useLoadDataSpy.mockReturnValue({ data: [data[0]] })
      useSelectionSpy.mockReturnValue({ isLoading: false })
      render(<ProductItems />)
      expect(productItemsElments.product()).toBeInTheDocument()
    })

    it('', () => {
      useLoadDataSpy.mockReturnValue({ data: undefined })
      useSelectionSpy.mockReturnValue({ isLoading: true })
      render(<ProductItems />)
      expect(productItemsElments.loading()).toBeInTheDocument()
    })
  })
})
