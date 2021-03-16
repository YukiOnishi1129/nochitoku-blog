/**
 * SetData
 *
 * @package Hooks
 */
import React from 'react'
/* contexts */
import { useBlogDispatch, setBlogList } from '@/contexts/BlogContext'
import { useCaregoryDispatch, setCategories } from '@/contexts/CategoryContext'
import { useProfileDispatch, setProfile } from '@/contexts/ProfileContext'
/* types */
import { BlogItemType } from '@/types/blogItem'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * useSetDate
 * @returns
 */
export const useSetDate = () => {
  const dispatchBlog = useBlogDispatch()
  const dispatchCategory = useCaregoryDispatch()
  const dispatchProfile = useProfileDispatch()

  /**
   * setBlogData
   */
  const setBlogData = React.useCallback(
    (blogList: BlogItemType[], totalCount: number) => {
      dispatchBlog(setBlogList(blogList, totalCount))
    },
    [dispatchBlog]
  )

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
    setBlogData,
    setCategoryData,
    setProfileData,
  }
}
