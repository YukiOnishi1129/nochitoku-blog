/**
 * useProfilePageTransition
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * useProfilePageTransition
 * @returns
 */
export const useProfilePageTransition = () => {
  /* router */
  const router = useRouter()

  /**
   * プロフィール画面遷移のクリック処理
   * @param {React.MouseEvent<HTMLInputElement>} event
   */
  const onClickTransitionProfilePage = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      // プロフィールページへ遷移
      router.push({
        pathname: `${NAVIGATION_LINK.PROFILE}`,
      })
    },
    [router]
  )

  const actions = {
    onClickTransitionProfilePage,
  }

  return [actions]
}
