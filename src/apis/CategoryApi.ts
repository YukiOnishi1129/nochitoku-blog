/**
 * CategoryApi.ts
 * ノチトクカテゴリーAPI
 * @package apis
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initCategoryData } from '@/constants/initState'
/* types */
import { CategoryType } from '@/types/Category'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/categories/`

/**
 * カテゴリー一覧取得
 */

/**
 * カテゴリー一覧取得
 * @returns {Promise<CategoryType[]>}
 */
export const getCategoriesApi = async (): Promise<CategoryType[]> => {
  let categoryList: CategoryType[] = []
  try {
    const res = await globalAxios.get(BASE_URL)
    categoryList = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getCategoriesApi`)
  }

  return categoryList
}

/**
 * カテゴリー詳細取得
 * @param {string} id
 *
 * @returns {Promise<CategoryType>}
 */
export const getCategoryByApi = async (id: string): Promise<CategoryType> => {
  let category: CategoryType = initCategoryData
  try {
    const res = await globalAxios.get(BASE_URL + id)
    category = res.data
  } catch (error) {
    throw new Error(`API ERROR: getCategoryByApi`)
  }
  return category
}
