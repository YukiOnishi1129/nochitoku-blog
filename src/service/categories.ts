/**
 * ノチトクカテゴリーAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'

const BASE_URL = 'https://yuki-read.microcms.io/api/v1/categories/'

/**
 * カテゴリー一覧取得
 */
export const getCategories = () => globalAxios.get(BASE_URL)

/**
 * カテゴリー詳細取得
 * @param id
 */
export const getCategoryBy = (id: string) => globalAxios.get(BASE_URL + id)
