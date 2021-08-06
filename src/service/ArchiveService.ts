/**
 * ArchiveService
 * アーカイブ関連のサービス層
 * @package service
 */
/* service */
import { isBlogsArchivesService } from '@/service/BlogService'
/* logic */
import {
  getCurrentDateLogic,
  getBlogStartDateLogic,
  getStartOfMonthLogic,
  getEndOfMonthLogic,
  changeYearMonthDateLogic,
  changeYearMonthLogic,
  changeShowYearMonthLogic,
  subtractMonthDateLogic,
} from '@/logic/DateLogic'
/* types */
import { ArchiveType } from '@/types/Archive'

/**
 * アーカイブリスト取得処理
 *
 * @returns {Promise<ArchiveType[]>}
 */
export const getArchiveListService = async (): Promise<ArchiveType[]> => {
  const currentDate = getCurrentDateLogic() // 現在日時
  const startBlogDate = getBlogStartDateLogic() // ブログ開始日時

  // 現在月とブログ開始月の差分 (月数)
  const diffMonthCount = currentDate.diff(startBlogDate, 'month')

  // 現在日時がブログ開始時よりも以前の場合、空配列を返却する
  if (currentDate < startBlogDate) return []

  // アーカイブ月取得処理
  const archiveList: ArchiveType[] = []
  for (let i = 0; i <= diffMonthCount; i++) {
    let targetDate = currentDate.format()
    //  現在の月以外の場合
    if (i > 0) {
      // 日付減算処置
      targetDate = subtractMonthDateLogic(targetDate, i)
    }
    const startMonth = getStartOfMonthLogic(targetDate) // 対象月の月初日付取得
    const endMonth = getEndOfMonthLogic(targetDate) // 対象月の月末日付取得

    // 対象の年月に投稿した記事があるか判定
    if (await isBlogsArchivesService(startMonth, endMonth)) {
      archiveList.push({
        originDate: changeYearMonthDateLogic(startMonth),
        linkDate: changeYearMonthLogic(startMonth),
        showDate: changeShowYearMonthLogic(startMonth),
      })
    }
  }

  return archiveList
}
