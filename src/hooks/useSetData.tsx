/**
 * useSetData
 *
 * @package Hooks
 */
import React from 'react'
/* contexts */
import { useBlogDispatch, setBlogList } from '@/contexts/BlogContext'
import { useCategoryDispatch, setCategories } from '@/contexts/CategoryContext'
import { useProfileDispatch, setProfile } from '@/contexts/ProfileContext'
import { useArchiveDispatch, setArchiveList } from '@/contexts/ArchiveContext'
/* types */
import { BlogItemType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ArchiveType } from '@/types/Archive'

/**
 * useSetDate
 * @returns
 */
export const useSetDate = () => {
  const dispatchBlog = useBlogDispatch()
  const dispatchCategory = useCategoryDispatch()
  const dispatchProfile = useProfileDispatch()
  const dispatchArchive = useArchiveDispatch()

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

  /**
   * setArchive
   */
  const setArchive = React.useCallback(
    (archive: ArchiveType[]) => {
      dispatchArchive(setArchiveList(archive))
    },
    [dispatchArchive]
  )

  return [{ setBlogData, setCategoryData, setProfileData, setArchive }]
}
