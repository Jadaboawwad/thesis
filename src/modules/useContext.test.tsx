import { render, screen } from '@testing-library/react'

import Cart from 'components/Molecules/Cart/Cart'

import data from 'data/items.json'

import { AppProvider } from './useContext'

const { getByText } = screen

const emptyMessage = 'Your Cart is Empty Try to view products and select one!'

describe('UseContext', () => {
  describe('When the App provider rendered with selectedcards provided', () => {
    it('should render a selection in cart', () => {
      render(
        <AppProvider
          appContext={{
            data: data,
            handleCardClick: jest.fn(),
            selectedCards: [data[1]],
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
          }}
        >
          <Cart isShowCart />
        </AppProvider>
      )

      expect(getByText('Iced Coffee')).toBeInTheDocument()
    })

    it('should render a empty message in cart', () => {
      render(
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

      expect(getByText(emptyMessage)).toBeInTheDocument()
    })
  })
})
