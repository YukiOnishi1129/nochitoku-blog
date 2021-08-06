/**
 * BlogService
 * ブログ関連のサービス層
 * @package service
 */
/* apis */
import { getBlogArchivesCountApi } from '@/apis/BlogApi'
/* logics */
import { addOneDay, subtractOneDay } from '@/logic/DateLogic'

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
