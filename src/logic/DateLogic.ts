/**
 * 日付関連のロジック
 * @package logics
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

// 日本語化
dayjs.locale(`ja`)

/**
 * 現在日時取得
 * @returns
 */
export const getCurrentDate = () => {
  return dayjs()
}

/**
 * ブログ開始日時取得
 * @returns
 */
export const getBlogStartDate = () => {
  return dayjs('2021-04-01')
}

/**
 * 月初の日時を取得
 * @param day string
 * @returns
 */
export const getStartOfMonth = (date: string) => {
  return dayjs(date).startOf('month').format()
}

/**
 * 月末の日時を取得
 * @param date string
 * @returns
 */
export const getEndOfMonth = (date: string) => {
  return dayjs(date).endOf('month').format()
}

/**
 * 日付フォーマット変換(YYYY.M.D)
 * @param date
 * @returns
 */
export const showYearMonthDay = (date: string) => {
  return dayjs(date).format('YYYY.M.D')
}

/**
 * 日付フォーマット変換(YYYY-MM-DD)
 * @param date
 * @returns
 */
export const changeYearMonthDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD')
}

/**
 * 日付フォーマット変換(YYYY-MM)
 * @param date
 * @returns
 */
export const changeYearMonth = (date: string) => {
  return dayjs(date).format('YYYY-MM')
}
/**
 * 日付フォーマット変換(YYYY年M月)
 * @param date
 * @returns
 */
export const changeShowYearMonth = (date: string) => {
  return dayjs(date).format('YYYY年M月')
}

/**
 * 減算処理 (月毎)
 * @param date
 * @param diffMonth
 * @returns
 */
export const subtractMonthDate = (date: string, diffMonth: number) => {
  return dayjs(date).subtract(diffMonth, 'M').format()
}

/**
 * 1日増算処理
 * @param date
 * @returns
 */
export const addOneDay = (date: string) => {
  return dayjs(date).add(1, 'd').format()
}

/**
 * 1日減算処理
 * @param date
 * @returns
 */
export const subtractOneDay = (date: string) => {
  return dayjs(date).subtract(1, 'd').format()
}
