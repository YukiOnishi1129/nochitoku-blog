/**
 * useProfileAreaResponsive
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* contexts */
import { useProfileState } from '@/contexts/ProfileContext'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * useProfileAreaResponsive
 * @returns
 */
export const useProfileAreaResponsive = () => {
  /* router */
  const router = useRouter()
  /* contexts */
  const { profile } = useProfileState()

  /**
   * moreボタンクリック処理
   * @param {React.MouseEvent<HTMLInputElement>} event
   */
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      // プロフィールページへ遷移
      router.push({
        pathname: `${NAVIGATION_LINK.PROFILE}`,
      })
    },
    [router]
  )

  const states = {
    profile,
  }

  const actions = {
    handleClick,
  }

  return [states, actions] as const
}
