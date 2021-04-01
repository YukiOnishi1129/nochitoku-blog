/**
 * ノチトクブログAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { blogShowCount } from '@/constants/config'
import { initBlogItem, initBlogData } from '@/constants/initState'
/* logics */
import { addOneDay, subtractOneDay } from '@/logic/DateLogic'
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
    throw new Error(`API ERROR: getBlogs`)
  }

  return blogData
}

/**
 * カテゴリーに紐づくブログ一覧取得
 * @param offset number
 * @param categoryId string
 * @returns
 */
export const getBlogsContainCategory = async (
  offset: number,
  categoryId: string
) => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL +
        QUERY_OFFSET +
        offset +
        QUERY_LIMIT +
        blogShowCount +
        '&filters=categories[contains]' +
        categoryId
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogsContainCategory`)
  }

  return blogData
}

/**
 * 対象日付の月のブログ記事一覧取得
 * @param startDate
 * @param endDate
 * @returns
 */
export const getBlogContainArchiveMonth = async (
  offset: number,
  startDate: string,
  endDate: string
) => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL +
        QUERY_OFFSET +
        offset +
        QUERY_LIMIT +
        blogShowCount +
        '&filters=createdAt[greater_than]' +
        startDate +
        '[and]createdAt[less_than]' +
        endDate
    )
    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogContainArchiveMonth`)
  }
  return blogData
}

/**
 * 対象日付の月の記事があるか確認
 * @param startDate
 * @param endDate
 * @returns
 */
export const isBlogsArchives = async (startDate: string, endDate: string) => {
  let totalCpunt = 0
  const queryStartDate = subtractOneDay(startDate)
  const queryEndDate = addOneDay(endDate)
  try {
    const res = await globalAxios.get(
      BASE_URL +
        '?filters=createdAt[greater_than]' +
        queryStartDate +
        '[and]createdAt[less_than]' +
        queryEndDate
    )
    totalCpunt = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: isBlogsArchives`)
  }

  return totalCpunt > 0
}

/**
 * ブログ記事詳細取得
 * @param id string
 * @param draftKey string
 * @returns blogDetail BlogItemType
 */
export const getBlogBy = async (id: string, draftKey: string) => {
  let blogDetail = initBlogItem
  try {
    const res = await globalAxios.get(
      `${BASE_URL}${id}${draftKey !== '' ? `?draftKey=${draftKey}` : ''}`
    )
    blogDetail = res.data
  } catch (error) {
    throw new Error(`API ERROR: getBlogBy`)
  }

  return blogDetail
}
