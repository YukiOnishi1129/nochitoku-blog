/**
 * modals/MenuModal
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * Props
 */
type Props = {
  isMenuModalVisible: boolean
  handleCloseMenuModal: () => void
}

/**
 * container
 * @param props Props
 * @returns
 */
export const MenuModal: React.FC<Props> = (props: Props) => {
  const { isMenuModalVisible, handleCloseMenuModal } = props

  return (
    <Presenter
      isMenuModalVisible={isMenuModalVisible}
      handleCloseMenuModal={handleCloseMenuModal}
    />
  )
}
