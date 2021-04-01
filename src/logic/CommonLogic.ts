/**
 * 共通ロジック
 * @package logics
 */
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
import { NAVIGATION_LINK } from '@/constants/navigation'

/**
 * ページ番号配列作成
 * @param totalCount number
 * @returns
 */
export const createPageArray = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map(
    (_, i) => i + 1
  )
}

/**
 * 検索ページではないかを判定
 * @param pathName string
 * @returns
 */
export const isNotSearchPage = (pathName: string) => {
  return NAVIGATION_LINK.SEARCH !== pathName
}
