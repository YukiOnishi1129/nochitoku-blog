/**
 * ノチトクカテゴリーAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initCategoryData } from '@/constants/initState'
/* types */
import { CategoryType } from '@/types/category'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/categories/`

/**
 * カテゴリー一覧取得
 */
export const getCategories = async () => {
  let categories: CategoryType[] = []
  try {
    const res = await globalAxios.get(BASE_URL)
    categories = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getCategories`)
  }

  return categories
}

/**
 * カテゴリー詳細取得
 * @param id string
 * @returns category CategoryType
 */
export const getCategoryBy = async (id: string) => {
  let category: CategoryType = initCategoryData
  try {
    const res = await globalAxios.get(BASE_URL + id)
    category = res.data
  } catch (error) {
    throw new Error(`API ERROR: getCategoryBy`)
  }
  return category
}
