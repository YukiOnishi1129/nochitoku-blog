/**
 * modals/SearchModal
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Modal, { Styles } from 'react-modal'
/* components */
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
/* types */
import { EventType } from '@/types/event'

Modal.setAppElement('#__next')

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
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const {
    searchText,
    isSearchModalVisible,
    handleCloseSearchModal,
    onChangeSearchText,
    onKeyUpSearch,
  } = props

  return (
    <Modal
      isOpen={isSearchModalVisible}
      onRequestClose={handleCloseSearchModal}
      style={customStyles}
    >
      <SearchInputForm
        text={searchText}
        placeholder="検索"
        onChange={onChangeSearchText}
        onKeyUp={onKeyUpSearch}
      />
    </Modal>
  )
}

/**
 * styles
 */
const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    height: '100px',
    transform: 'translate(-50%, -50%)',
  },
}
