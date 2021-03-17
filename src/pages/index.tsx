/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
/* components */
import { TopTemplate } from '@/components/pages/TopTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * props
 */
type TopPorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * Top
 * @param props PagePorps
 * @returns
 */
const Top: NextPage<TopPorps> = (props: TopPorps) => {
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

  return (
    <>
      <TopTemplate />
    </>
  )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする

export const getStaticProps = async () => {
  const blogData = await getBlogs(0)
  const categoryData = await getCategories()
  const profile = await getProfileBy()

  return {
    props: {
      blogList: blogData.blogList,
      totalCount: blogData.totalCount,
      categories: categoryData.data.contents,
      profile: profile.data,
    },
  }
}

export default Top
