import { screen } from '@testing-library/react'
import * as useViewportModule from 'modules/useViewport'
import { render } from 'utils/testUtils'

import { appText } from 'data/appText'

import Header from './Header'

const { queryByTestId, queryByAltText, getByAltText } = screen

const headerElements = {
  cart: () => queryByTestId('cart'),
  header: () => queryByTestId('header'),
  mobileLogo: () => queryByAltText(appText.bucket.mobileLogoIcon.alt),
  shoppingIcon: () => getByAltText(appText.bucket.shoppingIcon.alt),
  webLogo: () => queryByTestId('webLogo'),
}

let useViewportSpy: jest.SpyInstance

describe('Header', () => {
  describe('When the header rendered', () => {
    beforeEach(() => {
      useViewportSpy = jest.spyOn(useViewportModule, 'useViewport')
    })

    it('should render header component correctly in Web Version', () => {
      useViewportSpy.mockReturnValueOnce('extra-large')
      render(<Header />)
      expect(headerElements.header()).toBeInTheDocument()
      expect(headerElements.webLogo()).toBeInTheDocument()
    })

    it('should render header component correctly in Mobile version', () => {
      useViewportSpy.mockReturnValueOnce('extra-small')
      render(<Header />)

      expect(headerElements.header()).toBeInTheDocument()
      expect(headerElements.mobileLogo()).toBeInTheDocument()
    })
  })
})
