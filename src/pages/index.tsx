/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
/* components */
import { TopTemplate } from '@/components/pages/TopTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs, isBlogsArchives } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
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
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

/**
 * props
 */
type TopPorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * Top
 * @param props PagePorps
 * @returns
 */
const Top: NextPage<TopPorps> = (props: TopPorps) => {
  const { blogList, totalCount, categories, profile, archiveList } = props
  const {
    setBlogData,
    setCategoryData,
    setProfileData,
    setArchive,
  } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setBlogData(blogList, totalCount)
    setArchive(archiveList)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    blogList,
    totalCount,
    setBlogData,
    archiveList,
    setArchive,
  ])

  return <TopTemplate />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // ブログ一覧データ取得 ---------
  const blogData = await getBlogs(0)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // プロフィールデータ取得 ---------
  const profile = await getProfileBy()

  // アーカイブデータ取得 ---------
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
    if (await isBlogsArchives(startMonth, endMonth)) {
      archiveList.push({
        originDate: changeYearMonthDate(startMonth),
        linkDate: changeYearMonth(startMonth),
        showDate: changeShowYearMonth(startMonth),
      })
    }
  }

  const props: TopPorps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }

  return { props }
}

export default Top
