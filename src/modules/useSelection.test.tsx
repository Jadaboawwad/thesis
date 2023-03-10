import { createRef } from 'react'
import { act, renderHook } from '@testing-library/react'
import { useSelection } from 'modules/useSelection'

import data from 'data/items.json'

describe('useSelection', () => {
  describe('When the useSelection Hook is rendered', () => {
    describe('In Home Page', () => {
      it('should select a card  and add it to selected cards  on click', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnCard = jest.fn(result.current.handleCardClick)

        const ref = createRef()
        act(() => {
          clickOnCard(ref, data[0])
        })
        expect(clickOnCard).toBeCalledWith(ref, data[0])
        expect(result.current.selectedCards).toStrictEqual([data[0]])
      })

      it('should remove all items in the cart when remove all is clicked', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnRemoveAll = jest.fn(result.current.handleCartRemoveAll)
        act(() => {
          clickOnRemoveAll()
        })
        expect(clickOnRemoveAll).toBeCalled()
      })

      it('should set the border when card is clicked', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnCard = jest.fn(result.current.handleSetCardBorder)
        act(() => {
          clickOnCard()
        })
        expect(clickOnCard).toBeCalled()
      })
    })

    describe('In Products Page', () => {
      it('should  add product when add product is clicked', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnAddProduct = jest.fn(result.current.handleShowModal)
        act(() => {
          clickOnAddProduct()
        })
        expect(clickOnAddProduct).toBeCalled()
      })

      it('should update product when update is clicked', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnUpdate = jest.fn(result.current.handleUpdateCard)
        act(() => {
          clickOnUpdate('update', '10')
        })
        expect(clickOnUpdate).toBeCalled()
      })

      it('should delete product when delete is clicked', () => {
        const { result } = renderHook(() => useSelection())
        const clickOnDelete = jest.fn(result.current.handleDeleteCard)
        act(() => {
          clickOnDelete('delete', '0')
        })
        expect(clickOnDelete).toBeCalledWith('delete', '0')
      })
    })
  })
})
