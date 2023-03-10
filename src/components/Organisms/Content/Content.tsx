import { FC, useContext } from 'react'
import { AppContext } from 'modules/useContext'

import Container from 'components/Atoms/Container/Container'
import Card from 'components/Molecules/Card/Card'
import ContentStyles from 'components/Organisms/Content/Content.module.css'

import { appText } from 'data/appText'

const Content: FC = () => {
  const { isShowItem, data } = useContext(AppContext)
  return (
    <Container className={ContentStyles.contentWrapper}>
      {isShowItem && (
        <Container className={ContentStyles.contentMessage}>
          <p>{appText.content.selectMessage}</p>
        </Container>
      )}
      <Container className={ContentStyles.content} id="contentCards">
        {isShowItem &&
          data?.map((el: DataItem, idx: number) => {
            return (
              <div key={idx}>
                <Card
                  testId={`card-${el.id}`}
                  id={el.id}
                  data={el}
                  isSelectable
                  isInHome
                />
              </div>
            )
          })}
      </Container>
    </Container>
  )
}

export default Content
