import { useState } from 'react'
import { validateImage } from 'image-validator'

export const useValidation = (data?: DataItem) => {
  const [imagUrl, setImageUrl] = useState<string | undefined>(data?.imageUrl)

  const handleValidation = (data: DataItem) => {
    validateImage(data.imageUrl).then((result) =>
      result ? setImageUrl(data.imageUrl) : setImageUrl('images/404.png')
    )
  }
  data && handleValidation(data)

  return { handleValidation, imagUrl }
}
