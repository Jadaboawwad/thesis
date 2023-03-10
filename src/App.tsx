import { FC } from 'react'
import { AppProvider } from 'modules/useContext'
import { useLoadData } from 'modules/useLoadData'
import { useScrollTo } from 'modules/useScrollTo'
import { useSelection } from 'modules/useSelection'

import Container from 'components/Atoms/Container/Container'
import Content from 'components/Organisms/Content/Content'
import Header from 'components/Organisms/Header/Header'
import Hero from 'components/Organisms/Hero/Hero'

import 'styles/App.css'

const App: FC = () => {
  const { data } = useLoadData()
  const {
    handleCardClick,
    handleCartRemoveAll,
    handleMutation,
    handleShowModal,
    handleShowCart,
    isShowModal,
    isShowCart,
    selectedCards,
  } = useSelection()
  const { handleClickToScrollTo, isShowButton, isShowItem } = useScrollTo()
  const context = {
    data,
    handleCardClick,
    handleCartRemoveAll,
    handleClickToScrollTo,
    handleMutation,
    handleShowModal,
    handleShowCart,
    isShowButton,
    isShowItem,
    isShowModal,
    isShowCart,
    selectedCards,
  }

  return (
    <AppProvider appContext={context}>
      <Container className="appContainer">
        <Header />
        <Hero />
        <Content />
      </Container>
    </AppProvider>
  )
}

export default App
