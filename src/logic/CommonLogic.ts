/**
 * 共通ロジック
 * @package logics
 */
/* constants */
import { blogShowCount } from '@/constants/config'

/**
 * ページ番号配列作成
 * @param totalCount number
 * @returns
 */
export const createPageArray = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / blogShowCount) + 1)].map(
    (_, i) => i + 1
  )
}
