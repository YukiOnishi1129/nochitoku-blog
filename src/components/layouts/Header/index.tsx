/**
 * layouts/Header
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * props
 */
type Props = {
  handleOpenSearchModal: () => void
}

/**
 * container
 * @param props Props
 * @returns
 */
export const Header: React.FC<Props> = (props: Props) => {
  const { handleOpenSearchModal } = props

  return <Presenter handleOpenSearchModal={handleOpenSearchModal} />
}
