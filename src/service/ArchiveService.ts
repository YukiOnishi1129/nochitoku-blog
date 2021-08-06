/**
 * BlogService
 * アーカイブ関連のサービス層
 * @package service
 */
/* apis */
import { isBlogsArchivesService } from '@/service/BlogService'
/* logic */
import {
  getCurrentDate,
  getBlogStartDate,
  getStartOfMonth,
  getEndOfMonth,
  changeYearMonthDate,
  changeYearMonth,
  changeShowYearMonth,
  subtractMonthDate,
} from '@/logic/DateLogic'
/* types */
import { ArchiveType } from '@/types/archive'

/**
 * アーカイブリスト取得処理
 *
 * @returns {Promise<ArchiveType[]>}
 */
export const getArchiveListService = async (): Promise<ArchiveType[]> => {
  const currentDate = getCurrentDate() // 現在日時
  const startBlogDate = getBlogStartDate() // ブログ開始日時

  // 現在月とブログ開始月の差分 (月数)
  const diffMonthCount = currentDate.diff(startBlogDate, 'month')

  // アーカイブ月取得処理
  const archiveList: ArchiveType[] = []
  for (let i = 0; i <= diffMonthCount; i++) {
    let targetDate = currentDate.format()
    //  現在の月以外の場合
    if (i > 0) {
      // 日付減算処置
      targetDate = subtractMonthDate(targetDate, i)
    }
    const startMonth = getStartOfMonth(targetDate) // 対象月の月初日付取得
    const endMonth = getEndOfMonth(targetDate) // 対象月の月末日付取得

    // 対象の年月に投稿した記事があるか判定
    if (await isBlogsArchivesService(startMonth, endMonth)) {
      archiveList.push({
        originDate: changeYearMonthDate(startMonth),
        linkDate: changeYearMonth(startMonth),
        showDate: changeShowYearMonth(startMonth),
      })
    }
  }

  return archiveList
}
