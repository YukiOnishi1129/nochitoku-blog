/**
 * Blog記事
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs, getBlogBy } from '@/service/blogs'
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
type BlogItemPorps = {
  blog: BlogItemType
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * BlogsItemPage
 * @param props BlogItemPorps
 * @returns
 */
const BlogsItemPage: NextPage<BlogItemPorps> = (props) => {
  const { blog, categories, profile, archiveList } = props
  const { setCategoryData, setProfileData, setArchive } = useSetDate()
  const imageUrl = !!blog?.image ? blog.image.url : '/no_image.png'

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setArchive(archiveList)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    archiveList,
    setArchive,
  ])

  return (
    <BasePostPageLayout breadName={blog.title}>
      <section>
        <Image
          src={imageUrl}
          alt="Picture"
          width={498 * 1.5}
          height={332 * 1.5}
        />

        <h2>{blog.title}</h2>
        {blog.categories.length > 0 &&
          blog.categories.map((category) => (
            <h3 key={category.id}>カテゴリー：{category.name}</h3>
          ))}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </section>
    </BasePostPageLayout>
  )
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = []
  const { totalCount } = await getBlogs(0)

  // ページ番号の配列を作成
  const pageCountArray = createPageArray(totalCount)

  for await (const pageNum of pageCountArray) {
    const offset = (pageNum - 1) * blogShowCount
    const blogData = await getBlogs(offset)
    blogData.blogList.forEach((blog) => {
      paths.push(`/${blog.id}`)
    })
  }

  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  let blogId = ''

  if (params?.blogId && typeof params.blogId === 'string') {
    blogId = params.blogId
  }

  // ブログ記事詳細データ取得 ---------
  const blogDetailData = await getBlogBy(blogId)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // プロフィールデータ取得 ---------
  const profile = await getProfileBy()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

  const props: BlogItemPorps = {
    blog: blogDetailData,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }
  return { props }
}

export default BlogsItemPage
