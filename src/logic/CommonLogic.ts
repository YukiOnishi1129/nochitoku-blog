/**
 * 共通ロジック
 * @package logics
 */
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * ページ番号配列作成
 * @param {number} totalCount
 *
 * @returns number[]
 */
export const createPageArrayLogic = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map(
    (_, i) => i + 1
  )
}

/**
 * 検索ページではないかを判定
 * @param {string} pathName
 *
 * @returns {boolean}
 */
export const isNotSearchPageLogic = (pathName: string): boolean => {
  return NAVIGATION_LINK.SEARCH !== pathName
}
