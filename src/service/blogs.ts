/**
 * ノチトクブログAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'

const BASE_URL = 'https://yuki-read.microcms.io/api/v1/blogs/'
const QUERY_LIMIT = '?offset=0&limit=8'

/**
 * ブログ一覧取得
 */
export const getBlogs = () => globalAxios.get(BASE_URL + QUERY_LIMIT)

/**
 * ブログ記事詳細取得
 * @param id
 */
export const getBlogBy = (id: string) => globalAxios.get(BASE_URL + id)
