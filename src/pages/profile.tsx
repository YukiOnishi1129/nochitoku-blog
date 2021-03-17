/**
 * プロフィール
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFicxedPageLayout'
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'

export type PagePorps = {
  categories: CategoryType
}

export const Profile: NextPage<PagePorps> = (props: PagePorps) => {
  const { categories } = props
  return (
    <BasePostPageLayout>
      <div>プロフィール</div>
    </BasePostPageLayout>
  )
}

export const getStaticProps = async () => {
  const blogData = await getBlogs(0)
  const categoryData = await getCategories()
  return {
    props: {
      blogList: blogData.blogList,
      categories: categoryData.data.contents,
    },
  }
}

export default Profile
