/**
 * SetData
 *
 * @package Hooks
 */
import React from 'react'
/* contexts */
import { useCaregoryDispatch, setCategories } from '@/contexts/CategoryContext'
/* types */
import { CategoryType } from '@/types/category'

/**
 * useSetDate
 * @returns
 */
export const useSetDate = () => {
  const dispatchCategory = useCaregoryDispatch()

  /**
   * setCategoryData
   */
  const setCategoryData = React.useCallback(
    (categories: CategoryType[]) => {
      dispatchCategory(setCategories(categories))
    },
    [dispatchCategory]
  )

  return {
    setCategoryData,
  }
}
