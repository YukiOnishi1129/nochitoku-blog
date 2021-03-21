/**
 * カテゴリー記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
/* components */
import { CategoryTemplate } from '@/components/pages/CategoryTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogsContainCategory } from '@/service/blogs'
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
type CategoryBlogListPorps = {
  categoryId: string
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * カテゴリー記事一覧ページ
 * @param props CategoryBlogListPorps
 * @returns
 */
const CategoryBlogListPage: NextPage<CategoryBlogListPorps> = (
  props: CategoryBlogListPorps
) => {
  const {
    categoryId,
    blogList,
    totalCount,
    categories,
    profile,
    archiveList,
  } = props
  const {
    setBlogData,
    setCategoryData,
    setProfileData,
    setArchive,
  } = useSetDate()

  const categoryName = categories.filter((category) => {
    return category.id === categoryId
  })

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
    <CategoryTemplate
      categoryId={categoryId}
      breadName={categoryName[0].name}
    />
  )
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const categoryData = await getCategories()
  const paths: string[] = []

  // https://qiita.com/risto24/items/b3483f0b8c484e3eea5e
  for await (const category of categoryData) {
    const { totalCount } = await getBlogsContainCategory(0, category.id)
    // ページ番号の配列を作成
    const pageCountArray = createPageArray(totalCount)
    pageCountArray.forEach((pageNum) => {
      paths.push(`/category/${category.id}/page/${pageNum}`)
    })
  }

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
  // カテゴリーId
  let categoryId = ''
  // ページNo
  let pageNum = 1

  if (params?.categoryId && typeof params.categoryId === 'string') {
    categoryId = params.categoryId
  }
  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page)
  }

  const offset = (pageNum - 1) * blogShowCount

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogsContainCategory(offset, categoryId)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // プロフィールデータ取得 ---------
  const profile = await getProfileBy()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

  const props: CategoryBlogListPorps = {
    categoryId: categoryId,
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }

  return { props }
}

export default CategoryBlogListPage
