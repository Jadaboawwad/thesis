import { FC } from 'react'
import { useViewport } from 'modules/useViewport'

import Container from 'components/Atoms/Container/Container'
import Card from 'components/Molecules/Card/Card'
import HeroCenterStyles from 'components/Molecules/HeroCenter/HeroCenter.module.css'

import { appText } from 'data/appText'
import data from 'data/items.json'

const HeroCenter: FC = () => {
  const viewport = useViewport()
  const numberOfItems =
    viewport === 'extra-large'
      ? 1
      : viewport === 'large'
      ? 2
      : viewport === 'medium'
      ? 0
      : 0

  return (
    <Container
      testId="heroCenter"
      className={HeroCenterStyles.heroCenterWrapper}
    >
      <Container className={HeroCenterStyles.heroCenterTop}>
        <p className={HeroCenterStyles.title}>{appText.heroCenter.title}</p>
        <p className={HeroCenterStyles.subTitle}>
          {appText.heroCenter.subtitle}
        </p>
        <p className={HeroCenterStyles.description}>
          {appText.heroCenter.description}
        </p>
        <p className={HeroCenterStyles.bottomTitle}>
          {appText.heroCenter.bottomTitle}
        </p>
      </Container>
      <Container className={HeroCenterStyles.heroCenterBottom}>
        {data.map((el: DataItem, idx: number) => {
          return (
            idx > numberOfItems &&
            idx < 5 && (
              <div key={idx}>
                <Card
                  data={el}
                  id={el.id}
                  isInHome
                  isSelectable={false}
                  testId={`heroCard-${el.id}`}
                />
              </div>
            )
          )
        })}
      </Container>
    </Container>
  )
}

export default HeroCenter
