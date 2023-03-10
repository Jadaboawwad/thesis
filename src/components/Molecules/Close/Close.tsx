import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import CloseStyles from 'components/Molecules/Close/Close.module.css'

import { appText } from 'data/appText'

interface IAddMoreProps {
  handleClose?: (timeout?: number) => void
}

const Close: FC<IAddMoreProps> = ({ handleClose }) => (
  <Container className={CloseStyles.closeWrapper}>
    <img
      alt={appText.close.alt}
      className={CloseStyles.closeImage}
      src="svg/close.svg"
      onClick={() => handleClose && handleClose()}
    />
  </Container>
)

export default Close
