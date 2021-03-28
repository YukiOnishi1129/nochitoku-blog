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
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { isMenuModalVisible, handleCloseMenuModal } = props

  return (
    <Modal
      isOpen={isMenuModalVisible}
      onRequestClose={handleCloseMenuModal}
      style={customStyles}
    >
      <ul>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
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
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    height: '140px',
    transform: 'translate(-50%, -50%)',
    padding: '30px 20px 0',
    borderRadius: '8px',
    backgroundColor: ' #F0EEEE;',
  },
}
