import { FC, useContext, useMemo } from 'react'
import Lottie from 'react-lottie'
import { AppContext } from 'modules/useContext'
import { useLoadData } from 'modules/useLoadData'
import { useSelection } from 'modules/useSelection'

import Container from 'components/Atoms/Container/Container'
import Card from 'components/Molecules/Card/Card'
import ProductItemsStyles from 'components/Molecules/ProductItems/ProdcutItems.module.css'

import * as loadingAnimation from 'data/loading.json'

const ProdcutItems: FC = () => {
  const {
    handleDeleteCard,
    handleUpdateCard,
    handleMutation,
    handleLoading,
    isShowModal,
  } = useContext(AppContext)

  const { isLoading } = useSelection()

  const { data } = useLoadData(
    handleDeleteCard,
    handleUpdateCard,
    handleMutation
  )

  const items = useMemo(() => {
    return data?.length === 0 ? (
      <>
        {!isShowModal && (
          <Container className={ProductItemsStyles.emptyMessageWrapper}>
            <p className={ProductItemsStyles.emptyMessage}>
              Your products list is empty, try to add one!
            </p>
          </Container>
        )}
      </>
    ) : isLoading ? (
      <Container className={ProductItemsStyles.loadingWrapper} testId="loading">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: loadingAnimation,
            rendererSettings: {},
          }}
          height="35%"
          width="35%"
        />
      </Container>
    ) : (
      <>
        <Container
          testId="productItems"
          className={
            isShowModal
              ? ProductItemsStyles.productsWithBlureEffect
              : ProductItemsStyles.productsWithoutBlureEffect
          }
        >
          {data?.map((data: DataItem, idx: number) => (
            <Card
              data={data}
              id={data.id}
              isInProductList
              isSelectable={false}
              key={idx}
              onDeleteCard={() =>
                handleDeleteCard && handleDeleteCard('delete', data.id)
              }
              onUpdateCard={() =>
                handleUpdateCard && handleUpdateCard('update', data.id)
              }
              testId={`product-${data.id}`}
            />
          ))}
        </Container>
      </>
    )
  }, [
    data,
    handleDeleteCard,
    handleLoading,
    handleMutation,
    handleUpdateCard,
    isLoading,
  ])

  return items
}

export default ProdcutItems
