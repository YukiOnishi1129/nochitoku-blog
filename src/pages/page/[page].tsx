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
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * props
 */
export type PagePorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * ブログ一覧ページ (ページ遷移時)
 * @param props PagePorps
 * @returns
 */
const BlogListPage: NextPage<PagePorps> = (props: PagePorps) => {
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

  const blogData = await getBlogs(offset)
  const categoryData = await getCategories()
  const profile = await getProfileBy()
  const props: PagePorps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
  }
  return { props }
}

export default BlogListPage
