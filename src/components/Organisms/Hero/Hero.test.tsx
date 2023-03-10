import { render, screen } from '@testing-library/react'

import Hero from './Hero'

const { queryByTestId } = screen

const heroElements = {
  mainCard: () => queryByTestId('mainCard'),
  heroCenter: () => queryByTestId('heroCenter'),
  viewMore: () => queryByTestId('viewMore'),
}

describe('Hero', () => {
  describe('When Hero is rendered', () => {
    it('renders the maincard with hero center and view more by default', () => {
      render(<Hero />)
      expect(heroElements.mainCard()).toBeInTheDocument()
      expect(heroElements.heroCenter()).toBeInTheDocument()
      expect(heroElements.viewMore()).toBeInTheDocument()
    })
  })
})
