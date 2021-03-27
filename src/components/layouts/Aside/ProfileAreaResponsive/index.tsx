/**
 * layouts/Aside/ProfileAreaResponsive
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useProfileState } from '@/contexts/ProfileContext'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * container
 * @returns
 */
export const ProfileAreaResponsive: React.FC = () => {
  const router = useRouter()
  const { profile } = useProfileState()

  /**
   * moreボタンクリック処理
   * @param e React.MouseEvent<HTMLInputElement>
   */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // プロフィールページへ遷移
    router.push({
      pathname: `${NAVIGATION_LINK.PROFILE}`,
    })
  }

  return <Presenter profile={profile} handleClick={handleClick} />
}
