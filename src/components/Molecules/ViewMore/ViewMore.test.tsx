import { render, screen } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'

import { appText } from 'data/appText'

import ViewMore from './ViewMore'

const { queryByAltText, queryByText, queryByTestId } = screen

const viewMoreElements = {
  content: () => queryByTestId('itemstoView'),
  cup: () => queryByAltText(appText.viewMore.cup.alt),
  viewMoreLink: () => queryByText(appText.viewMore.cup.viewMoreLabel),
  viewLessLink: () => queryByText(appText.viewMore.cup.viewLessLabel),
}

describe('ViewMore', () => {
  describe('When the page loads', () => {
    it('should be visible based on truthy isShowButton', () => {
      render(
        <AppProvider
          appContext={{
            isShowButton: true,
            handleClickToScrollTo: jest.fn(),
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
          }}
        >
          <ViewMore />
        </AppProvider>
      )

      expect(viewMoreElements.cup()).toBeInTheDocument()
      expect(viewMoreElements.viewMoreLink()).toBeInTheDocument()
    })

    it('should be hidden based on falsy isShowButton', () => {
      render(
        <AppProvider
          appContext={{
            isShowButton: false,
            handleClickToScrollTo: jest.fn(),
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
          }}
        >
          <ViewMore />
        </AppProvider>
      )

      expect(viewMoreElements.cup()).toBeInTheDocument()
      expect(viewMoreElements.viewLessLink()).toBeInTheDocument()
    })
  })
})
