/**
 * 日付関連のロジック
 * @package logics
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

// 日本語化
dayjs.locale(`ja`)

/**
 * 日付フォーマット変換(YYYY.M.D)
 * @param date
 * @returns
 */
export const showYearMonthDay = (date: string) => {
  return dayjs(date).format('YYYY.M.D')
}
