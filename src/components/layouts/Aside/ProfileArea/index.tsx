/**
 * layouts/Aside/ProfileArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useProfileState } from '@/contexts/ProfileContext'

/**
 * container
 * @returns
 */
export const ProfileArea: React.FC = () => {
  const { profile } = useProfileState()
  //   console.log('aaa')
  //   console.log(profile)
  return <Presenter />
}
