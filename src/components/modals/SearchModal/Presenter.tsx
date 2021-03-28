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
/* styles */
import styles from './styles.module.scss'

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
      <h2 className={styles.title}>ブログ記事を検索できます。</h2>
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
    height: '140px',
    transform: 'translate(-50%, -50%)',
    padding: '30px 20px 0',
    borderRadius: '8px',
  },
}
