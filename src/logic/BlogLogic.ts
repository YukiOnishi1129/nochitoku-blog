/**
 * ブログ関連のロジック
 * @package logics
 */
/* service */
import { getBlogContainArchiveMonth } from '@/service/blogs'
/* logic */
import { getStartOfMonth, getEndOfMonth } from '@/logic/DateLogic'

/**
 * getBlogTargetMonth
 * @param offset
 * @param targetDate
 * @returns
 */
export const getBlogTargetMonth = async (
  offset: number,
  targetDate: string
) => {
  const startMonth = getStartOfMonth(targetDate) // 対象月の月初日付取得
  const endMonth = getEndOfMonth(targetDate) // 対象月の月末日付取得

  const blogDate = await getBlogContainArchiveMonth(
    offset,
    startMonth,
    endMonth
  )
  return blogDate
}
