/**
 * Blog記事一覧 (ページ遷移時)
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
/* components */
import { PageTemplate } from '@/components/pages/PageTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
import { getArchiveList } from '@/logic/ArchiveLogic'
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

/**
 * props
 */
type PagePorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * ブログ一覧ページ (ページ遷移時)
 * @param props PagePorps
 * @returns
 */
const BlogListPage: NextPage<PagePorps> = (props: PagePorps) => {
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

  return <PageTemplate />
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { totalCount } = await await getBlogs(0)
  // ページ番号の配列を作成
  const pageCountArray = createPageArray(totalCount)
  // pathの配列を作成
  const paths = pageCountArray.map((pageNum) => `/page/${pageNum}`)
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

/**
 * getStaticProps
 * @param context
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  // ページNo
  let pageNum = 1

  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page)
  }

  const offset = (pageNum - 1) * blogShowCount

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogs(offset)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // プロフィールデータ取得 ---------
  const profile = await getProfileBy()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

  const props: PagePorps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }
  return { props }
}

export default BlogListPage
