import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import SelectionStyles from 'components/Molecules/Selection/Selection.module.css'

interface ISelectionProps {
  data?: DataItem
  id?: string | number
  testId?: string
}

const Selection: FC<ISelectionProps> = ({ data, id, testId }) => (
  <>
    {data && (
      <Container
        testId={testId}
        key={id}
        className={SelectionStyles.selectionWrapper}
      >
        <img
          alt={data.name}
          className={SelectionStyles.itemLogo}
          src={data.imageUrl}
        />
        <p className={SelectionStyles.itemName}>{data.name}</p>
      </Container>
    )}
  </>
)

export default Selection
