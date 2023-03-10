import { RefObject, useEffect, useState } from 'react'
import { set } from 'utils/localStroage'

export const useSelection = () => {
  const [isCardHasBorder, setIsCardHasBorder] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isShowCart, setIsShowCart] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [operationType, setOperationType] = useState<string>('')
  const [selectedCards, setSelectedCards] = useState<DataItem[]>([])
  const [selectedId, setSelectedId] = useState<string>('')

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 100)
    setTimeout(() => {
      setIsLoading(false)
    }, 900)
  }

  const handleCartRemoveAll = () => {
    setSelectedCards([])
  }

  const handleShowCart = () => {
    setIsShowCart(!isShowCart)
  }

  const handleSetCardBorder = () => {
    setIsCardHasBorder(!isCardHasBorder)
  }

  const handleCardClick = (ref: RefObject<unknown>, data: DataItem) => {
    setSelectedCards((prev) => [...prev, data])
    selectedCards.forEach((card) => {
      card.id === data.id &&
        setSelectedCards(selectedCards.filter((card) => card.id !== data.id))
    })
  }

  const handleShowModal = (timeout = 200) => {
    setOperationType('create')
    setTimeout(() => {
      setIsShowModal(!isShowModal)
    }, timeout)
  }

  const handleUpdateCard = (flag: string, id: string) => {
    flag && setOperationType(flag)
    setSelectedId(id)
    setIsShowModal(!isShowModal)
  }

  const handleDeleteCard = async (flag: string, id: string) => {
    operationType === 'delete' &&
      (await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation($deleteProductId: String) {
            deleteProduct(id: $deleteProductId)
          }`,
          variables: {
            deleteProductId: selectedId,
          },
        }),
      }))
    flag && setOperationType(flag)
    setSelectedId(id)
    handleLoading()
  }

  const handleMutation = async (uploadedData: DataItem) => {
    operationType === 'create' &&
      (await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation($createProductId: String, $name: String, $description: String, $imageUrl: String) {
            createProduct(id: $createProductId, name: $name, description: $description, imageUrl: $imageUrl) {
              product {
                name
                description
                imageUrl
                id
            }}}`,
          variables: {
            createProductId: uploadedData.id,
            description: uploadedData.description,
            imageUrl: uploadedData.imageUrl,
            name: uploadedData.name,
          },
        }),
      }))
    operationType === 'update' &&
      (await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query:`
          mutation($updateProductId: String, $name: String, $description: String, $imageUrl: String, $selectedId: String) {
            updateProduct(id: $updateProductId, name: $name, description: $description, imageUrl: $imageUrl, selectedId: $selectedId)
          }`,
          variables: {
            description: uploadedData.description,
            imageUrl: uploadedData.imageUrl,
            name: uploadedData.name,
            selectedId:selectedId,
            updateProductId: uploadedData.id,
          },
        }),
      }))
    handleLoading()
    handleShowModal(500)
  }

  useEffect(() => {
    set('items', selectedCards)
    handleLoading()
  }, [])

  return {
    handleCardClick,
    handleCartRemoveAll,
    handleDeleteCard,
    handleLoading,
    handleMutation,
    handleSetCardBorder,
    handleShowCart,
    handleShowModal,
    handleUpdateCard,
    isCardHasBorder,
    isLoading,
    isShowCart,
    isShowModal,
    selectedCards,
  }
}
