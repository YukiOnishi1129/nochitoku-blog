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
  getStartOfMonth,
  getEndOfMonth,
  addOneDay,
  subtractOneDay,
} from '@/logic/DateLogic'

/**
 * getBlogTargetMonthService
 * 対象月のブログ記事一覧を取得
 * @param offset
 * @param targetDate
 * @returns
 */
export const getBlogTargetMonthService = async (
  offset: number,
  targetDate: string
) => {
  // 引数設定
  const startMonth = subtractOneDay(getStartOfMonth(targetDate)) // 対象月の月初日付の一日前取得
  const endMonth = addOneDay(getEndOfMonth(targetDate)) // 対象月の月末日付の翌日取得

  // 記事データ取得
  const blogDate = await getBlogContainArchiveMonthApi(
    offset,
    startMonth,
    endMonth
  )
  return blogDate
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
  const queryStartDate = subtractOneDay(startDate)
  const queryEndDate = addOneDay(endDate)
  // 記事数取得
  const totalCount = await getBlogArchivesCountApi(queryStartDate, queryEndDate)

  if (!totalCount) return false

  return totalCount > 0
}
