/**
 * layouts/BaseLayout
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { EventType } from '@/types/event'

/**
 * Props
 */
type Props = {
  searchText: string
  isSearchModalVisible: boolean
  handleCloseSearchModal: () => void
  onChangeSearchText: EventType['onChange']
  onKeyUpSearch: EventType['onkeypress']
}

/**
 * container
 * @param props Props
 * @returns
 */
export const SearchModal: React.FC<Props> = (props: Props) => {
  const {
    searchText,
    isSearchModalVisible,
    handleCloseSearchModal,
    onChangeSearchText,
    onKeyUpSearch,
  } = props

  return (
    <Presenter
      searchText={searchText}
      isSearchModalVisible={isSearchModalVisible}
      handleCloseSearchModal={handleCloseSearchModal}
      onChangeSearchText={onChangeSearchText}
      onKeyUpSearch={onKeyUpSearch}
    />
  )
}
