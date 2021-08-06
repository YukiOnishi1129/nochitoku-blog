/**
 * BlogApi.ts
 * ノチトクブログAPI
 * @package apis
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
import { initBlogItem, initBlogData } from '@/constants/initState'
/* types */
import { BlogDataType } from '@/types/Blog'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/blogs/`
const QUERY_OFFSET = '?offset='
const QUERY_LIMIT = '&limit='

/**
 * ブログ一覧取得
 * @param {number} offset
 *
 * @returns {Promise<BlogDataType>}
 */
export const getBlogsApi = async (offset: number): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData
  try {
    const res = await globalAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + BLOG_SHOW_COUNT
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogsApi`)
  }

  return blogData
}

/**
 * カテゴリーに紐づくブログ一覧取得
 * @param {number} offset
 * @param {string} categoryId
 *
 * @returns {Promise<BlogDataType>} blogData
 */
export const getBlogsContainCategoryApi = async (
  offset: number,
  categoryId: string
): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL +
        QUERY_OFFSET +
        offset +
        QUERY_LIMIT +
        BLOG_SHOW_COUNT +
        '&filters=categories[contains]' +
        categoryId
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogsContainCategoryApi`)
  }

  return blogData
}

/**
 * 対象日付の月のブログ記事一覧取得
 * @param {number} offset
 * @param {string} startDate
 * @param {string} endDate
 *
 * @returns {Promise<BlogDataType>}
 */
export const getBlogContainArchiveMonthApi = async (
  offset: number,
  startDate: string,
  endDate: string
): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL +
        QUERY_OFFSET +
        offset +
        QUERY_LIMIT +
        BLOG_SHOW_COUNT +
        '&filters=createdAt[greater_than]' +
        startDate +
        '[and]createdAt[less_than]' +
        endDate
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogContainArchiveMonthApi`)
  }
  return blogData
}

/**
 * 対象日付の月の記事数を取得
 * @param {string} startDate
 * @param {string} endDate
 *
 * @returns　{Promise<number | undefined>}
 */
export const getBlogArchivesCountApi = async (
  startDate: string,
  endDate: string
): Promise<number | undefined> => {
  try {
    const res = await globalAxios.get(
      BASE_URL +
        '?filters=createdAt[greater_than]' +
        startDate +
        '[and]createdAt[less_than]' +
        endDate
    )
    return res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogArchivesCountApi`)
  }
}

/**
 * ブログ記事詳細取得
 * @param {string} id
 * @param {string} draftKey
 *
 * @returns {BlogItemType}
 */
export const getBlogByApi = async (id: string, draftKey: string) => {
  let blogDetail = initBlogItem
  try {
    const res = await globalAxios.get(
      `${BASE_URL}${id}${draftKey !== '' ? `?draftKey=${draftKey}` : ''}`
    )
    blogDetail = res.data
  } catch (error) {
    throw new Error(`API ERROR: getBlogByApi`)
  }

  return blogDetail
}
