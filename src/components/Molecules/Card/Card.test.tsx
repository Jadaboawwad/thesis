import { fireEvent, render, screen } from '@testing-library/react'
import * as useSelectionModule from 'modules/useSelection'

import { appText } from 'data/appText'
import data from 'data/items.json'

import Card from './Card'

const { queryByAltText, queryByText, queryByTestId, getByAltText } = screen

const cardElements = {
  card: () => queryByTestId('card-0'),
  cardDescription: () => queryByText(data[0].description),
  cardImage: () => getByAltText(data[0].name),
  cardName: () => queryByAltText(data[0].name),
  delete: () => queryByAltText(appText.card.deleteAction),
  numberOfBags: () => queryByText(appText.card.bagCount),
  price: () => queryByText(appText.card.price),
  update: () => queryByText(appText.card.updateAction),
}

let useSelectionSpy: jest.SpyInstance

describe('Card', () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      useSelectionSpy = jest.spyOn(useSelectionModule, 'useSelection')
      useSelectionSpy.mockReturnValue({ isCardHasBorder: true })
    })

    describe('In Home', () => {
      it('renders without info', () => {
        render(<Card data={data[0]} />)
        expect(cardElements.cardDescription()).toBeInTheDocument()
        expect(cardElements.cardImage()).toBeInTheDocument()
        expect(cardElements.cardName()).toBeInTheDocument()
        expect(cardElements.numberOfBags()).not.toBeInTheDocument()
        expect(cardElements.price()).not.toBeInTheDocument()
      })

      it('renderds with info', () => {
        render(<Card data={data[0]} infoDisplay />)
        expect(cardElements.cardDescription()).toBeInTheDocument()
        expect(cardElements.cardImage()).toBeInTheDocument()
        expect(cardElements.cardName()).toBeInTheDocument()
        expect(cardElements.numberOfBags()).toBeInTheDocument()
        expect(cardElements.price()).toBeInTheDocument()
      })

      it('should be selectable with truthy props provided ', () => {
        useSelectionSpy.mockReturnValue({ isCardHasBorder: true })
        render(<Card data={data[0]} testId="card-0" isInHome isSelectable />)

        const cardContainer = cardElements.card() as HTMLElement
        fireEvent.click(cardContainer)
      })
    })

    describe('In ProductList', () => {
      it('should be selectable in product list when truthy props provided', () => {
        const clickOnDelete = jest.fn()
        render(
          <Card
            data={data[0]}
            isInProductList
            isSelectable
            onDeleteCard={clickOnDelete}
          />
        )
      })

      it('should be updatable', () => {
        const clickOnUpdate = jest.fn()

        render(
          <Card data={data[0]} isInProductList onUpdateCard={clickOnUpdate} />
        )

        const update = cardElements.update() as HTMLElement
        fireEvent.click(update)

        expect(cardElements.update()).toBeInTheDocument()
        expect(clickOnUpdate).toBeCalled()
      })

      it('should be deletable ', () => {
        const clickOnDelete = jest.fn()
        render(
          <Card data={data[0]} isInProductList onDeleteCard={clickOnDelete} />
        )
        const remove = cardElements.delete() as HTMLElement
        fireEvent.click(remove)

        expect(cardElements.delete()).toBeInTheDocument()
        expect(clickOnDelete).toBeCalled()
      })
    })
  })
})
