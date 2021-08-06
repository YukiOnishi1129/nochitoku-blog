/**
 * modals/SearchModal
 * @package Component
 */
import React from 'react'
import Modal from 'react-modal'
/* components */
import { SearchInputForm } from '@/components/common/molecules/SearchInputForm'
import { CloseIcon } from '@/components/common/icons/CloseIcon'
/* types */
import { EventType } from '@/types/Event'
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
 * SearchModal
 * @param {Props} props
 * @returns
 */
export const SearchModal: React.FC<Props> = (props: Props) => {
  /* props */
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
      overlayClassName={{
        base: styles.overlay_base,
        afterOpen: styles.overlay_after,
        beforeClose: styles.overlay_before,
      }}
      className={{
        base: styles.content_base,
        afterOpen: styles.content_after,
        beforeClose: styles.content_before,
      }}
      closeTimeoutMS={500}
    >
      <div>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearch}
        />
        <div className={styles.close} onClick={handleCloseSearchModal}>
          <CloseIcon size={32} />
        </div>
      </div>
    </Modal>
  )
}
