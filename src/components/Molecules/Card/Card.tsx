import { FC, RefObject, useContext, useMemo, useRef } from 'react'
import { AppContext } from 'modules/useContext'
import { useSelection } from 'modules/useSelection'
import { useValidation } from 'modules/useValidation'

import Container from 'components/Atoms/Container/Container'
import CardStyles from 'components/Molecules/Card/Card.module.css'

import { appText } from 'data/appText'

interface ICardProps {
  data?: DataItem
  id?: number | string
  infoDisplay?: boolean
  isInHome?: boolean
  isInProductList?: boolean
  isMainCard?: boolean
  isSelectable?: boolean
  onDeleteCard?: (flag: string, id: string) => void
  onUpdateCard?: (flag: string, id: string) => void
  testId?: string
}

const Card: FC<ICardProps> = ({
  data,
  id,
  infoDisplay = false,
  isInHome = false,
  isInProductList = false,
  isMainCard = false,
  isSelectable = false,
  onDeleteCard,
  onUpdateCard,
  testId,
}) => {
  const { handleCardClick } = useContext(AppContext)
  const { handleSetCardBorder, isCardHasBorder } = useSelection()
  const { imagUrl } = useValidation(data)
  const borderStyle = useMemo(() => {
    let style
    isInHome &&
      (isSelectable
        ? isCardHasBorder
          ? (style = CardStyles.selectedCard)
          : (style = CardStyles.cardFilled)
        : (style = CardStyles.cardWrapper))

    isInProductList &&
      (isSelectable
        ? (style = CardStyles.cardWrapper)
        : (style = CardStyles.cardFilled))

    return style
  }, [isCardHasBorder])

  const cardRef = useRef<RefObject<HTMLDivElement>>()

  return (
    <>
      {data && (
        <Container
          className={borderStyle}
          id={id}
          onClick={(cardRef: RefObject<unknown>) =>
            handleCardClick && handleCardClick(cardRef, data)
          }
          testId={testId}
          componentRef={cardRef}
        >
          {isInProductList && (
            <Container className={CardStyles.deleteWrapper}>
              <img
                className={CardStyles.delete}
                src="svg/close.svg"
                onClick={() => onDeleteCard && onDeleteCard('delete', data.id)}
                alt={appText.card.deleteAction}
              />
            </Container>
          )}

          <img
            alt={data.name}
            className={
              !isMainCard
                ? CardStyles.cardImageFilled
                : CardStyles.mainCardImage
            }
            onClick={handleSetCardBorder}
            src={imagUrl}
          />
          <p className={CardStyles.cardName}>{data.name}</p>
          <p className={CardStyles.cardDescription}>{data.description}</p>

          {infoDisplay && (
            <Container className={CardStyles.info}>
              <p className={CardStyles.infoNumber}>{appText.card.bagCount}</p>
              <p className={CardStyles.infoPrice}>{appText.card.price}</p>
            </Container>
          )}

          {isInProductList && (
            <Container
              className={CardStyles.cardOperations}
              testId="updateAction"
            >
              <button
                className={CardStyles.update}
                onClick={() => onUpdateCard && onUpdateCard('update', data.id)}
              >
                {appText.card.updateAction}
              </button>
            </Container>
          )}
        </Container>
      )}
    </>
  )
}

export default Card
