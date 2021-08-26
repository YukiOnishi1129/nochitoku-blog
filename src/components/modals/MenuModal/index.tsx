/**
 * modals/MenuModal
 * @package Component
 */
import React from 'react'
import Modal from 'react-modal'
/* components */
import { CloseIcon } from '@/components/common/icons/CloseIcon'
/* hooks */
import { useMenuModal } from './useMenuModal'
/* styles */
import styles from './styles.module.scss'

Modal.setAppElement('#__next')

/**
 * Props
 */
type Props = {
  isMenuModalVisible: boolean
  handleCloseMenuModal: () => void
}

/**
 * MenuModal
 * @param {Props} props
 * @returns
 */
export const MenuModal: React.FC<Props> = (props: Props) => {
  /* props */
  const { isMenuModalVisible, handleCloseMenuModal } = props
  /* hooks */
  const [actions] = useMenuModal({ handleCloseMenuModal })

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
        <li className={styles.link} onClick={actions.handleHomeLink}>
          ホーム
        </li>
        <li className={styles.link} onClick={actions.handleAboutLink}>
          このブログについて
        </li>
        <li onClick={actions.handleProfileLink}>プロフィール</li>
      </ul>

      <div className={styles.close} onClick={handleCloseMenuModal}>
        <div className={styles.close__icon}>
          <CloseIcon />
        </div>
      </div>
    </Modal>
  )
}
