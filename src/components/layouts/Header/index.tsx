/**
 * layouts/Header
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'

/**
 * props
 */
type Props = {
  handleOpenSearchModal: () => void
  handleOpenMenuModal: () => void
}

/**
 * container
 * @param props Props
 * @returns
 */
export const Header: React.FC<Props> = (props: Props) => {
  const { handleOpenSearchModal, handleOpenMenuModal } = props
  const router = useRouter()

  return (
    <Presenter
      pathName={router.pathname}
      handleOpenSearchModal={handleOpenSearchModal}
      handleOpenMenuModal={handleOpenMenuModal}
    />
  )
}
