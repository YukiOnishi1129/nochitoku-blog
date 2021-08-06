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
 * @returns {dayjs.Dayjs}
 */
export const getCurrentDateLogic = () => {
  return dayjs()
}

/**
 * ブログ開始日時取得
 * @returns {dayjs.Dayjs}
 */
export const getBlogStartDateLogic = () => {
  return dayjs('2021-04-01')
}

/**
 * 月初の日時を取得
 * @param {string} day
 *
 * @returns {string}
 */
export const getStartOfMonthLogic = (date: string): string => {
  return dayjs(date).startOf('month').format()
}

/**
 * 月末の日時を取得
 * @param {string} date
 *
 * @returns {string}
 */
export const getEndOfMonthLogic = (date: string): string => {
  return dayjs(date).endOf('month').format()
}

/**
 * 日付フォーマット変換(YYYY.M.D)
 * @param {string} date
 *
 * @returns {string}
 */
export const showYearMonthDayLogic = (date: string): string => {
  return dayjs(date).format('YYYY.M.D')
}

/**
 * 日付フォーマット変換(YYYY-MM-DD)
 * @param {string} date
 *
 * @returns {string}
 */
export const changeYearMonthDateLogic = (date: string): string => {
  return dayjs(date).format('YYYY-MM-DD')
}

/**
 * 日付フォーマット変換(YYYY-MM)
 * @param {string} date
 *
 * @returns {string}
 */
export const changeYearMonthLogic = (date: string): string => {
  return dayjs(date).format('YYYY-MM')
}
/**
 * 日付フォーマット変換(YYYY年M月)
 * @param {string} date
 *
 * @returns {string}
 */
export const changeShowYearMonthLogic = (date: string): string => {
  return dayjs(date).format('YYYY年M月')
}

/**
 * 減算処理 (月毎)
 * @param {string} date
 * @param {number} diffMonth
 * @returns
 */
export const subtractMonthDateLogic = (
  date: string,
  diffMonth: number
): string => {
  return dayjs(date).subtract(diffMonth, 'M').format()
}

/**
 * 1日増算処理
 * @param date
 * @returns
 */
export const addOneDayLogic = (date: string) => {
  return dayjs(date).add(1, 'd').format()
}

/**
 * 1日減算処理
 * @param date
 * @returns
 */
export const subtractOneDayLogic = (date: string) => {
  return dayjs(date).subtract(1, 'd').format()
}
