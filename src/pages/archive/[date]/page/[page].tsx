/**
 * アーカイブ記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
/* components */
import { ArchiveTemplate } from '@/components/pages/ArchiveTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
import { getBlogTargetMonth } from '@/logic/BlogLogic'
import { getArchiveList } from '@/logic/ArchiveLogic'
import { changeShowYearMonth } from '@/logic/DateLogic'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

/**
 * Props
 */
export type ArchiveBlogListPageProps = {
  date: string
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * ArchiveBlogListPage
 * @param {ArchiveBlogListPageProps} props
 * @returns
 */
const ArchiveBlogListPage: NextPage<ArchiveBlogListPageProps> = (
  props: ArchiveBlogListPageProps
) => {
  /* props */
  const { date, blogList, totalCount, categories, profile, archiveList } = props
  /* hooks */
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

  return <ArchiveTemplate date={date} breadName={changeShowYearMonth(date)} />
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()
  const paths: string[] = []

  for await (const archive of archiveList) {
    const { totalCount } = await getBlogTargetMonth(0, archive.originDate)
    // ページ番号の配列を作成
    const pageCountArray = createPageArray(totalCount)
    pageCountArray.forEach((pageNum) => {
      paths.push(`/archive/${archive.linkDate}/page/${pageNum}`)
    })
  }

  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

/**
 * getStaticProps
 * @param {GetStaticPropsContext<ParsedUrlQuery>} context
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  // 対象日付
  let paramDate = ''
  // ページNo
  let pageNum = 1

  if (params?.date && typeof params.date === 'string') {
    paramDate = params.date
  }
  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page)
  }

  const offset = (pageNum - 1) * BLOG_SHOW_COUNT

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogTargetMonth(offset, paramDate)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // プロフィールデータ取得 ---------
  const profile = await getProfileBy()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

  const props: ArchiveBlogListPageProps = {
    date: paramDate,
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }

  return { props }
}

export default ArchiveBlogListPage
