import { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode | ReactNode[]
  className?: string
  id?: string | number
  // eslint-disable-next-line
  onClick?: any
  // eslint-disable-next-line
  componentRef?: any
  testId?: string
}

const Container: FC<IContainerProps> = ({
  children,
  className,
  id,
  onClick,
  testId,
  componentRef,
}) => (
  <div
    className={className}
    data-testid={testId}
    id={`${id}`}
    onClick={onClick}
    ref={componentRef}
  >
    {children}
  </div>
)

export default Container
