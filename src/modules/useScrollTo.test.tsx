import { act, renderHook } from '@testing-library/react'
import { useScrollTo } from 'modules/useScrollTo'

describe('useScrollTo', () => {
  describe('When the useScrollTo Hook is rendered', () => {
    it('should load data', () => {
      const { result } = renderHook(() => useScrollTo())
      const scrollTo = jest.fn(result.current.handleClickToScrollTo)
      const event = document.createEvent('Event')
      act(() => {
        scrollTo(event, 'contentCards')
      })
      expect(scrollTo).toBeCalledWith(event, 'contentCards')
    })
  })
})
