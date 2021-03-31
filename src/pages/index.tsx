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
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* logic */
import { getArchiveList } from '@/logic/ArchiveLogic'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

/**
 * props
 */
type TopPageProps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * TopPage
 * @param props TopProps
 * @returns
 */
const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
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
  const archiveList = await getArchiveList()

  const props: TopPageProps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }

  return { props }
}

export default TopPage
