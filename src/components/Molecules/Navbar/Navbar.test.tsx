import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import * as useViewportModule from 'modules/useViewport'

import Navbar from './Navbar'

const { queryByTestId, getAllByTestId } = screen

const navbarElements = {
  list: () => queryByTestId('navbarList'),
  items: () => getAllByTestId('listitem'),
}

let useViewportSpy: jest.SpyInstance

describe('Navbar', () => {
  describe('When the client is Web', () => {
    it('it should render the navbar', () => {
      useViewportSpy = jest.spyOn(useViewportModule, 'useViewport')
      useViewportSpy.mockReturnValue('extra-large')
      render(
        <Router>
          <Navbar />
        </Router>
      )
      expect(navbarElements.items().length).toBe(6)
    })
  })

  describe('When the client is Mobile', () => {
    it('it should not render the navbar', () => {
      useViewportSpy = jest.spyOn(useViewportModule, 'useViewport')
      useViewportSpy.mockReturnValue('extra-small')
      render(
        <Router>
          <Navbar />
        </Router>
      )
      expect(navbarElements.list()).not.toBeInTheDocument()
    })
  })
})
