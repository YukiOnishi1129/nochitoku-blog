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
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * props
 */
export type CategoryBlogListPorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * カテゴリー記事一覧
 * @param props CategoryBlogListPorps
 * @returns
 */
const CategoryBlogListPage: NextPage<CategoryBlogListPorps> = (
  props: CategoryBlogListPorps
) => {
  const { blogList, totalCount, categories, profile } = props
  const { setBlogData, setCategoryData, setProfileData } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setBlogData(blogList, totalCount)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    blogList,
    totalCount,
    setBlogData,
  ])

  return <CategoryTemplate />
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

  const blogData = await getBlogsContainCategory(offset, categoryId)
  const categoryData = await getCategories()
  const profile = await getProfileBy()

  const props: CategoryBlogListPorps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
  }

  return { props }
}

export default CategoryBlogListPage
