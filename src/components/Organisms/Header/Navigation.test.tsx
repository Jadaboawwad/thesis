import { render, screen } from '@testing-library/react'
import * as useViewportModule from 'modules/useViewport'

import Navigtion from './Navigation'

const { queryByTestId } = screen

const useViewportSpy = jest.spyOn(useViewportModule, 'useViewport')

beforeEach(() => {
  render(<Navigtion />)
})

const navigationElements = {
  bars: () => queryByTestId('bars'),
}

describe('Navigation', () => {
  describe('When page loads', () => {
    it('should render Burger in mobile view', () => {
      useViewportSpy.mockReturnValueOnce('extra-small')
      expect(navigationElements.bars()).toBeInTheDocument()
    })

    it('should not render Burger in web view and bars not active', () => {
      useViewportSpy.mockReturnValueOnce('extra-large')
      render(<Navigtion />)
    })
  })
})
