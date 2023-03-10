import { fireEvent, screen } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'
import { render } from 'utils/testUtils'

import { appText } from 'data/appText'
import data from 'data/items.json'

import Cart from './Cart'

const { queryByTestId, queryByText, getByText } = screen

const cartElemets = {
  cart: () => queryByTestId('cart'),
  emptyMessage: () => queryByText(appText.cart.emptyMessage),
  removeAll: () => queryByText(appText.cart.deleteAllAction),
  slection: () => queryByTestId('select-1'),
}

describe('Cart', () => {
  describe('When truthy isShowCart attribute passed', () => {
    it('renders the cart', () => {
      render(<Cart isShowCart />)
      expect(cartElemets.cart()).toBeInTheDocument()
      expect(cartElemets.removeAll()).toBeInTheDocument()
    })

    it('renders a selection', () => {
      render(
        <AppProvider
          appContext={{
            handleCardClick: jest.fn(),
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            selectedCards: [data[1]],
          }}
        >
          <Cart isShowCart />
        </AppProvider>
      )
      expect(cartElemets.cart()).toBeInTheDocument()
      expect(cartElemets.removeAll()).toBeInTheDocument()
      expect(cartElemets.slection()).toBeInTheDocument()
    })

    it('remove all selected items', () => {
      const { rerender } = render(
        <AppProvider
          appContext={{
            data: data,
            handleCardClick: jest.fn(),
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            selectedCards: [data[1]],
          }}
        >
          <Cart isShowCart />
        </AppProvider>
      )
      expect(cartElemets.cart()).toBeInTheDocument()
      fireEvent.click(getByText('Remove All'))
      rerender(
        <AppProvider
          appContext={{
            data: data,
            handleCardClick: jest.fn(),
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            selectedCards: [],
          }}
        >
          <Cart isShowCart />
        </AppProvider>
      )
      expect(cartElemets.emptyMessage()).toBeInTheDocument()
    })
  })

  describe('When falsy isShowCart passed', () => {
    it('should not render the cart', () => {
      render(<Cart isShowCart={false} />)
      expect(cartElemets.cart()).not.toBeInTheDocument()
    })

    it('should not render the cart', () => {
      render(<Cart />)
      expect(cartElemets.cart()).not.toBeInTheDocument()
    })
  })
})
