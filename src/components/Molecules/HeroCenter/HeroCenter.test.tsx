import { screen } from '@testing-library/react'
import * as useViewportModule from 'modules/useViewport'
import { render } from 'utils/testUtils'

import { appText } from 'data/appText'
import data from 'data/items.json'

import HeroCenter from './HeroCenter'
const { getByText, queryByText } = screen

const heroCenterElements = {
  beActive: () => getByText(appText.heroCenter.title),
  title: () => getByText(appText.heroCenter.subtitle),
  describe: () => getByText(appText.heroCenter.description),
  topPacks: () => getByText(appText.heroCenter.bottomTitle),
}

let useViewportSpy: jest.SpyInstance

describe('HeroCenter', () => {
  describe('When page loads', () => {
    beforeEach(() => {
      useViewportSpy = jest.spyOn(useViewportModule, 'useViewport')
    })
    it('should render HeroCenter top Correctly', () => {
      render(<HeroCenter />)
      expect(heroCenterElements.beActive()).toBeInTheDocument()
      expect(heroCenterElements.title()).toBeInTheDocument()
      expect(heroCenterElements.describe()).toBeInTheDocument()
      expect(heroCenterElements.topPacks()).toBeInTheDocument()
    })

    it.each(data.slice(2, 5))('Web view card item', ({ name }) => {
      useViewportSpy.mockReturnValueOnce('extra-large')
      render(<HeroCenter />)
      expect(queryByText(name)).toBeInTheDocument()
    })

    it.each(data.slice(3, 5))('Mobile view card item', ({ name }) => {
      useViewportSpy.mockReturnValueOnce('large')
      render(<HeroCenter />)
      expect(queryByText(name)).toBeInTheDocument()
    })

    it.each(data.slice(3, 5))('Tablet view card item', ({ name }) => {
      useViewportSpy.mockReturnValueOnce('medium')
      render(<HeroCenter />)
      expect(queryByText(name)).toBeInTheDocument()
    })

    it.each(data.slice(1, 5))('Mobile view card item', ({ name }) => {
      useViewportSpy.mockReturnValueOnce('extra-small')
      render(<HeroCenter />)
      expect(queryByText(name)).toBeInTheDocument()
    })
  })
})
