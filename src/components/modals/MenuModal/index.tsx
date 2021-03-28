/**
 * modals/MenuModal
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

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
  const router = useRouter()
  const { isMenuModalVisible, handleCloseMenuModal } = props

  /**
   * 「ホーム」画面遷移処理
   */
  const handleHomeLink = () => {
    router.push({
      pathname: `${NAVIGATION_LINK.TOP}`,
    })
    handleCloseMenuModal()
  }

  /**
   * 「このブログについて」画面遷移処理
   */
  const handleAboutLink = () => {
    router.push({
      pathname: `${NAVIGATION_LINK.ABOUT}`,
    })
    handleCloseMenuModal()
  }

  /**
   * 「プロフィール」画面遷移処理
   */
  const handleProfileLink = () => {
    router.push({
      pathname: `${NAVIGATION_LINK.PROFILE}`,
    })
    handleCloseMenuModal()
  }

  return (
    <Presenter
      isMenuModalVisible={isMenuModalVisible}
      handleCloseMenuModal={handleCloseMenuModal}
      handleHomeLink={handleHomeLink}
      handleAboutLink={handleAboutLink}
      handleProfileLink={handleProfileLink}
    />
  )
}
