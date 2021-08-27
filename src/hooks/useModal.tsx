/**
 * useModal
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * useModal
 * @returns
 */
export const useModal = () => {
  /* router */
  const router = useRouter()
  /* local */
  // SearchModal用のstate
  const [isSearchModalVisible, setIsSearchModalVisible] = React.useState(false)
  // MenuModal用のstate
  const [isMenuModalVisible, setIsMenuModalVisible] = React.useState(false)

  /**
   * SearchModalを開く処理
   */
  const handleOpenSearchModal = React.useCallback(() => {
    setIsSearchModalVisible(true)
  }, [])

  /**
   * SearchModalを閉じる処理
   */
  const handleCloseSearchModal = React.useCallback(() => {
    setIsSearchModalVisible(false)
  }, [])

  /**
   * SearchModalを開く処理
   */
  const handleOpenMenuModal = React.useCallback(() => {
    setIsMenuModalVisible(true)
  }, [])

  /**
   * SearchModalを閉じる処理
   */
  const handleCloseMenuModal = React.useCallback(() => {
    setIsMenuModalVisible(false)
  }, [])

  /**
   * 「ホーム」画面遷移処理
   */
  const handleHomeLink = React.useCallback(() => {
    router.push({
      pathname: `${NAVIGATION_LINK.TOP}`,
    })
    handleCloseMenuModal()
  }, [router, handleCloseMenuModal])

  /**
   * 「このブログについて」画面遷移処理
   */
  const handleAboutLink = React.useCallback(() => {
    router.push({
      pathname: `${NAVIGATION_LINK.ABOUT}`,
    })
    handleCloseMenuModal()
  }, [router, handleCloseMenuModal])

  /**
   * 「プロフィール」画面遷移処理
   */
  const handleProfileLink = React.useCallback(() => {
    router.push({
      pathname: `${NAVIGATION_LINK.PROFILE}`,
    })
    handleCloseMenuModal()
  }, [router, handleCloseMenuModal])

  const states = {
    isSearchModalVisible,
    isMenuModalVisible,
  }

  const actions = {
    handleOpenSearchModal,
    handleCloseSearchModal,
    handleOpenMenuModal,
    handleCloseMenuModal,
    handleHomeLink,
    handleAboutLink,
    handleProfileLink,
  }

  return [states, actions] as const
}
