/**
 * modals/MenuModal
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Modal, { Styles } from 'react-modal'
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
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
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
      style={customStyles}
    >
      <ul className={styles.links}>
        <li className={styles.title}>MENU</li>
        <li onClick={handleHomeLink}>ホーム</li>
        <li onClick={handleAboutLink}>このブログについて</li>
        <li onClick={handleProfileLink}>プロフィール</li>
      </ul>
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
    backgroundColor: 'rgba(22, 21, 21, 0.56)',
    zIndex: 14,
  },

  content: {
    top: '50%',
    left: '60% ',
    right: '0',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    padding: '30px 0 0',
    borderRadius: '0',
    backgroundColor: '#F0EEEE',
  },
}
