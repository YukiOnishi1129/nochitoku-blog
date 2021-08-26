/**
 * Blog記事一覧 (ページ遷移時)
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
/* components */
import { PageTemplate } from '@/components/pages/PageTemplate'
/* hooks */
import { useSetDate } from '@/hooks/useSetData'
/* service */
import { getArchiveListService } from '@/service/ArchiveService'
/* apis */
import { getBlogsApi } from '@/apis/BlogApi'
import { getCategoriesApi } from '@/apis/CategoryApi'
import { getProfileByApi } from '@/apis/ProfileApi'
/* logic */
import { createPageArrayLogic } from '@/logic/CommonLogic'
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
type BlogListPageProps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * BlogListPage
 * @param {BlogListPageProps} props
 * @returns
 */
const BlogListPage: NextPage<BlogListPageProps> = (
  props: BlogListPageProps
) => {
  /* props */
  const { blogList, totalCount, categories, profile, archiveList } = props
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

  return <PageTemplate />
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { totalCount } = await getBlogsApi(0)
  // ページ番号の配列を作成
  const pageCountArray = createPageArrayLogic(totalCount)
  // pathの配列を作成
  const paths = pageCountArray.map((pageNum) => `/page/${pageNum}`)
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
  // ページNo
  let pageNum = 1

  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page)
  }

  const offset = (pageNum - 1) * BLOG_SHOW_COUNT

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogsApi(offset)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi()
  // プロフィールデータ取得 ---------
  const profile = await getProfileByApi()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()

  const props: BlogListPageProps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }
  return { props }
}

export default BlogListPage
