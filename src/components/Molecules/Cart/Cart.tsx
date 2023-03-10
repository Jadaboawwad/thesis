import { FC, useContext } from 'react'
import { AppContext } from 'modules/useContext'

import Container from 'components/Atoms/Container/Container'
import CartStyles from 'components/Molecules/Cart/Cart.module.css'
import Selection from 'components/Molecules/Selection/Selection'

import { appText } from 'data/appText'

interface ICartProps {
  isShowCart?: boolean
}

const Cart: FC<ICartProps> = ({ isShowCart = false }) => {
  const { handleCartRemoveAll, selectedCards } = useContext(AppContext)
  return (
    <>
      {isShowCart && (
        <Container testId="cart" className={CartStyles.cartWrapper}>
          <Container className={CartStyles.cartHeader}>
            <h3 className={CartStyles.cartHeading}>Shopping Cart</h3>
            {selectedCards?.length !== 0 && (
              <h5
                className={CartStyles.removeAction}
                onClick={handleCartRemoveAll}
              >
                {appText.cart.deleteAllAction}
              </h5>
            )}
          </Container>
          <Container className={CartStyles.cartContent}>
            {selectedCards?.length === 0 ? (
              <p data-testid="message" className={CartStyles.nullContent}>
                {appText.cart.emptyMessage}
              </p>
            ) : (
              selectedCards?.map((el: DataItem) => {
                return (
                  <div key={el.id}>
                    <Selection testId={`select-${el.id}`} data={el} />
                  </div>
                )
              })
            )}
          </Container>
        </Container>
      )}
    </>
  )
}

export default Cart
