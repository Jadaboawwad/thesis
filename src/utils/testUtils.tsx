import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProvider } from 'modules/useContext'
import { useLoadData } from 'modules/useLoadData'
import { useScrollTo } from 'modules/useScrollTo'
import { useSelection } from 'modules/useSelection'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, queryGraphQLServer } = useLoadData()
  const {
    handleCardClick,
    handleCartRemoveAll,
    handleDeleteCard,
    handleMutation,
    handleSetCardBorder,
    handleShowModal,
    handleUpdateCard,
  } = useSelection()
  const { handleClickToScrollTo } = useScrollTo()
  const context = {
    data,
    handleCardClick,
    handleCartRemoveAll,
    handleClickToScrollTo,
    handleDeleteCard,
    handleMutation,
    handleSetCardBorder,
    handleShowModal,
    handleUpdateCard,
    queryGraphQLServer,
  }

  return <AppProvider appContext={context}>{children}</AppProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
