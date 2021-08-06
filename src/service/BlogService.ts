/**
 * BlogService
 * ブログ関連のサービス層
 * @package service
 */
/* apis */
import {
  getBlogContainArchiveMonthApi,
  getBlogArchivesCountApi,
} from '@/apis/BlogApi'
/* logics */
import {
  getStartOfMonthLogic,
  getEndOfMonthLogic,
  addOneDayLogic,
  subtractOneDayLogic,
} from '@/logic/DateLogic'
/* types */
import { BlogDataType } from '@/types/Blog'

/**
 * getBlogTargetMonthService
 * 対象月のブログ記事一覧を取得
 * @param {number} offset
 * @param {string} targetDate
 *
 * @returns {Promise<BlogDataType>}
 */
export const getBlogTargetMonthService = async (
  offset: number,
  targetDate: string
): Promise<BlogDataType> => {
  // 引数設定
  const startMonth = subtractOneDayLogic(getStartOfMonthLogic(targetDate)) // 対象月の月初日付の一日前取得
  const endMonth = addOneDayLogic(getEndOfMonthLogic(targetDate)) // 対象月の月末日付の翌日取得

  // 記事データ取得
  const blogData = await getBlogContainArchiveMonthApi(
    offset,
    startMonth,
    endMonth
  )
  return blogData
}

/**
 * 対象日付の月の記事があるか確認
 * @param {string} startDate
 * @param {string} endDate
 *
 * @returns {Promise<boolean>}
 */
export const isBlogsArchivesService = async (
  startDate: string,
  endDate: string
): Promise<boolean> => {
  // 引数の設定
  const queryStartDate = subtractOneDayLogic(startDate)
  const queryEndDate = addOneDayLogic(endDate)
  // 記事数取得
  const totalCount = await getBlogArchivesCountApi(queryStartDate, queryEndDate)

  if (!totalCount) return false

  return totalCount > 0
}
