import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import Card from 'components/Molecules/Card/Card'
import HeroCenter from 'components/Molecules/HeroCenter/HeroCenter'
import ViewMore from 'components/Molecules/ViewMore/ViewMore'
import HeroStyles from 'components/Organisms/Hero/Hero.module.css'

import data from 'data/items.json'
const Hero: FC = () => {
  return (
    <Container testId="hero" className={HeroStyles.heroWrapper}>
      <Container className={HeroStyles.heroCard}>
        <Card
          data={data && data[0]}
          infoDisplay={true}
          isInHome
          isMainCard
          isSelectable={false}
          testId="mainCard"
        />
      </Container>
      <HeroCenter />
      <ViewMore />
    </Container>
  )
}

export default Hero
