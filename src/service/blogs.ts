/**
 * ノチトクブログAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { blogShowCount } from '@/constants/config'
import { initBlogData } from '@/constants/initState'
/* types */
import { BlogDataType } from '@/types/blog'

/**
 * constant
 */
const BASE_URL = 'https://yuki-read.microcms.io/api/v1/blogs/'
const QUERY_OFFSET = '?offset='
const QUERY_LIMIT = '&limit='

/**
 * ブログ一覧取得
 * @param offset number
 * @returns blogData BlogDataType
 */
export const getBlogs = async (offset: number) => {
  const blogData: BlogDataType = initBlogData
  try {
    const res = await globalAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + blogShowCount
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    console.log(error)
  }

  return blogData
}

/**
 * ブログ記事詳細取得
 * @param id string
 */
export const getBlogBy = (id: string) => globalAxios.get(BASE_URL + id)

/**
 * ブログ全記事取得
 * @returns blogData BlogDataType
 */
export const getBlogTotal = async () => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(BASE_URL)
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    console.log(error)
  }

  return blogData
}
