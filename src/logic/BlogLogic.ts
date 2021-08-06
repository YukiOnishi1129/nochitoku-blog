/**
 * ブログ関連のロジック
 * @package logics
 */
/* apis */
import { getBlogContainArchiveMonthApi } from '@/apis/BlogApi'
/* logic */
import {
  getStartOfMonth,
  getEndOfMonth,
  addOneDay,
  subtractOneDay,
} from '@/logic/DateLogic'

/**
 * TODO: Service層に移行する
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

  const blogDate = await getBlogContainArchiveMonthApi(
    offset,
    startMonth,
    endMonth
  )
  return blogDate
}
