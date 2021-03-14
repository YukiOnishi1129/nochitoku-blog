/**
 * layouts/Aside/ProfileArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useProfileState } from '@/contexts/ProfileContext'

/**
 * container
 * @returns
 */
export const ProfileArea: React.FC = () => {
  const router = useRouter()
  const { profile } = useProfileState()

  /**
   * moreボタンクリック処理
   * @param e React.MouseEvent<HTMLInputElement>
   */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // TODO: プロフィールページへ遷移
    router.push({
      pathname: `./`,
    })
  }

  return <Presenter profile={profile} handleClick={handleClick} />
}
