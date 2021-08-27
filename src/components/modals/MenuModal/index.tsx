/**
 * modals/MenuModal
 * @package Component
 */
import React from 'react'
import Modal from 'react-modal'
/* components */
import { CloseIcon } from '@/components/common/icons/CloseIcon'
/* styles */
import styles from './styles.module.scss'

Modal.setAppElement('#__next')

/**
 * Props
 */
type Props = {
  isMenuModalVisible: boolean
  handleCloseMenuModal: () => void
  handleHomeLink: () => void
  handleAboutLink: () => void
  handleProfileLink: () => void
}

/**
 * MenuModal
 * @param {Props} props
 * @returns
 */
export const MenuModal: React.FC<Props> = (props: Props) => {
  /* props */
  const {
    isMenuModalVisible,
    handleCloseMenuModal,
    handleHomeLink,
    handleAboutLink,
    handleProfileLink,
  } = props

  return (
    <Modal
      isOpen={isMenuModalVisible}
      onRequestClose={handleCloseMenuModal}
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
      <ul className={styles.links}>
        <li className={styles.title}>MENU</li>
        <li className={styles.link} onClick={handleHomeLink}>
          ホーム
        </li>
        <li className={styles.link} onClick={handleAboutLink}>
          このブログについて
        </li>
        <li onClick={handleProfileLink}>プロフィール</li>
      </ul>

      <div className={styles.close} onClick={handleCloseMenuModal}>
        <div className={styles.close__icon}>
          <CloseIcon />
        </div>
      </div>
    </Modal>
  )
}
