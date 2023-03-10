import { act, renderHook } from '@testing-library/react'

import { useValidation } from './useValidation'

const samples = {
  valid: {
    id: '0',
    name: 'Mochaticho Late',
    description:
      'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.',
    imageUrl: 'https://picsum.photos/250',
  },
}

describe('useImageValidation', () => {
  describe('When the hook is rendered', () => {
    it('should validate the image url', async () => {
      const { result } = renderHook(() => useValidation(samples.valid))
      const validate = jest.fn(result.current.handleValidation)

      act(() => {
        validate(samples.valid)
      })
      expect(validate).toBeCalledWith(samples.valid)
    })

    it('should be able to carry undefined data', async () => {
      const { result } = renderHook(() => useValidation(undefined))
      const validate = jest.fn(result.current.handleValidation)

      act(() => {
        validate(samples.valid)
      })
      expect(validate).toBeCalledWith(samples.valid)
    })
  })
})
