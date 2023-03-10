import { FC } from 'react'
import { useViewport } from 'modules/useViewport'

import Container from 'components/Atoms/Container/Container'
import BucketStyles from 'components/Molecules/Bucket/Bucket.module.css'

import { appText } from 'data/appText'

interface IBucketProps {
  onCartClick?: () => void
}

const Bucket: FC<IBucketProps> = ({ onCartClick }) => (
  <Container className={BucketStyles.bucketWrapper}>
    <Container className={BucketStyles.wrappedLogo}>
      {useViewport() !== 'extra-large' && (
        <img
          alt={appText.bucket.mobileLogoIcon.alt}
          className={BucketStyles.mobileLogoIcon}
          src="svg/logo.svg"
        />
      )}
    </Container>
    <Container className={BucketStyles.wrappedProfile}>
      <img
        alt={appText.bucket.shoppingIcon.alt}
        className={BucketStyles.shoppingIcon}
        onClick={onCartClick}
        src="images/shoppingIcon.png"
      />
      <img
        alt={appText.bucket.profileIcon.alt}
        className={BucketStyles.profileIcon}
        src="images/profileImage.png"
      />
    </Container>
  </Container>
)

export default Bucket
