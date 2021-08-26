/**
 * アーカイブ記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
/* components */
import { ArchiveTemplate } from '@/components/pages/ArchiveTemplate'
/* hooks */
import { useSetDate } from '@/hooks/useSetData'
/* service */
import { getBlogTargetMonthService } from '@/service/BlogService'
import { getArchiveListService } from '@/service/ArchiveService'
/* apis */
import { getCategoriesApi } from '@/apis/CategoryApi'
import { getProfileByApi } from '@/apis/ProfileApi'
/* logic */
import { createPageArrayLogic } from '@/logic/CommonLogic'
import { changeShowYearMonthLogic } from '@/logic/DateLogic'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ArchiveType } from '@/types/Archive'

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
  const [
    { setBlogData, setCategoryData, setProfileData, setArchive },
  ] = useSetDate()

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

  return (
    <ArchiveTemplate date={date} breadName={changeShowYearMonthLogic(date)} />
  )
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()
  const paths: string[] = []

  for await (const archive of archiveList) {
    const { totalCount } = await getBlogTargetMonthService(
      0,
      archive.originDate
    )
    // ページ番号の配列を作成
    const pageCountArray = createPageArrayLogic(totalCount)
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
  const blogData = await getBlogTargetMonthService(offset, paramDate)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi()
  // プロフィールデータ取得 ---------
  const profile = await getProfileByApi()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()

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
