/**
 * ブログ関連のロジック
 * @package logics
 */
/* service */
import { getBlogContainArchiveMonth } from '@/service/blogs'
/* logic */
import {
  getStartOfMonth,
  getEndOfMonth,
  addOneDay,
  subtractOneDay,
} from '@/logic/DateLogic'

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
  const startMonth = subtractOneDay(getStartOfMonth(targetDate)) // 対象月の月初日付の一日前取得
  const endMonth = addOneDay(getEndOfMonth(targetDate)) // 対象月の月末日付の翌日取得

  const blogDate = await getBlogContainArchiveMonth(
    offset,
    startMonth,
    endMonth
  )
  return blogDate
}
