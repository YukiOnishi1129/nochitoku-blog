/**
 * SetData
 *
 * @package Hooks
 */
import React from 'react'
/* contexts */
import { useCaregoryDispatch, setCategories } from '@/contexts/CategoryContext'
import { useProfileDispatch, setProfile } from '@/contexts/ProfileContext'
/* types */
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * useSetDate
 * @returns
 */
export const useSetDate = () => {
  const dispatchCategory = useCaregoryDispatch()
  const dispatchProfile = useProfileDispatch()

  /**
   * setCategoryData
   */
  const setCategoryData = React.useCallback(
    (categories: CategoryType[]) => {
      dispatchCategory(setCategories(categories))
    },
    [dispatchCategory]
  )

  /**
   * setProfileData
   */
  const setProfileData = React.useCallback(
    (profile: ProfileType) => {
      dispatchProfile(setProfile(profile))
    },
    [dispatchProfile]
  )

  return {
    setCategoryData,
    setProfileData,
  }
}
