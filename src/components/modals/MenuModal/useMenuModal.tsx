/**
 * useMenuModal
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * interface
 */
interface HooksParam {
  handleCloseMenuModal: () => void
}

/**
 * useMenuModal
 * @param {HooksParam} param
 * @returns
 */
export const useMenuModal = (param: HooksParam) => {
  /* params */
  const { handleCloseMenuModal } = param
  /* router */
  const router = useRouter()

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

  const actions = {
    handleHomeLink,
    handleAboutLink,
    handleProfileLink,
  }

  return [actions] as const
}
